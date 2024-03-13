import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RoomService } from '../../services/room-service.service';
import { AppModule } from '../../app/app.module';
import { Room } from '../../interfaces/room';
import { of } from 'rxjs';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [HomeComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.rooms).toEqual([]);
    expect(component.selectedCheckInDate).toBeNull();
    expect(component.selectedCheckOutDate).toBeNull();
    expect(component.selectedGuestCount).toBe(1);
    expect(component.isSearched).toBeFalse();
  });

  it('should fetch rooms on initialization', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    const mockRoomService = TestBed.inject(RoomService);
    const mockRooms: Room[] = [
      {
        id: 1,
        title: 'Ocean View Suite',
        images: ['image1.jpg', 'image2.jpg'],
        price: 150.0,
        description:
          'Enjoy breathtaking ocean views from this luxurious suite.',
        address: '123 Beachfront Blvd, Malibu, CA',
        capacity: 4,
      },
      {
        id: 2,
        title: 'Cozy Studio Apartment',
        images: ['image3.jpg'],
        price: 75.0,
        description:
          'A charming studio apartment perfect for a weekend getaway.',
        address: '456 Main St, Anytown, CA',
        capacity: 2,
      },
    ];

    spyOn(mockRoomService, 'getRooms').and.returnValue(of(mockRooms));

    fixture.detectChanges();

    expect(mockRoomService.getRooms).toHaveBeenCalled();
    expect(component.rooms).toEqual(mockRooms);
  });

  it('should search for available rooms on search event', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    const mockRoomService = TestBed.inject(RoomService);
    const searchFilter = {
      checkInDate: new Date(2024, 2, 15), // March 15, 2024
      checkOutDate: new Date(2024, 2, 17), // March 17, 2024
      guestCount: 2,
    };
    const mockAvailableRooms: Room[] = [
      {
        id: 1,
        title: 'Ocean View Suite',
        images: ['image1.jpg', 'image2.jpg'],
        price: 150.0,
        description:
          'Enjoy breathtaking ocean views from this luxurious suite.',
        address: '123 Beachfront Blvd, Malibu, CA',
        capacity: 4,
      },
      {
        id: 2,
        title: 'Cozy Studio Apartment',
        images: ['image3.jpg'],
        price: 75.0,
        description:
          'A charming studio apartment perfect for a weekend getaway.',
        address: '456 Main St, Anytown, CA',
        capacity: 2,
      },
    ];

    spyOn(mockRoomService, 'getAvailableRooms').and.returnValue(
      of(mockAvailableRooms)
    );
    const datepicker = fixture.debugElement.query(
      By.directive(DatepickerComponent)
    );
    datepicker.componentInstance.searchRooms.emit(searchFilter);

    fixture.detectChanges();

    expect(component.selectedCheckInDate).toEqual(searchFilter.checkInDate);
    expect(component.selectedCheckOutDate).toEqual(searchFilter.checkOutDate);
    expect(component.selectedGuestCount).toEqual(searchFilter.guestCount);
    expect(component.isSearched).toBeTrue();
    expect(mockRoomService.getAvailableRooms).toHaveBeenCalledWith(
      searchFilter.checkInDate,
      searchFilter.checkOutDate,
      searchFilter.guestCount
    );
    expect(component.rooms).toEqual(mockAvailableRooms);
  });

  it('should handle no available rooms', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    const mockRoomService = TestBed.inject(RoomService);
    const searchFilter = {
      checkInDate: new Date(2024, 2, 18), // March 18, 2024 (assuming no rooms available)
      checkOutDate: new Date(2024, 2, 20), // March 20, 2024
      guestCount: 2,
    };

    const emptyRooms: Room[] = []; // Empty array for no available rooms

    spyOn(mockRoomService, 'getAvailableRooms').and.returnValue(of(emptyRooms));
    const datepicker = fixture.debugElement.query(
      By.directive(DatepickerComponent)
    );
    datepicker.componentInstance.searchRooms.emit(searchFilter);

    fixture.detectChanges();

    expect(component.selectedCheckInDate).toEqual(searchFilter.checkInDate);
    expect(component.selectedCheckOutDate).toEqual(searchFilter.checkOutDate);
    expect(component.selectedGuestCount).toEqual(searchFilter.guestCount);
    expect(component.isSearched).toBeTrue();
    expect(mockRoomService.getAvailableRooms).toHaveBeenCalledWith(
      searchFilter.checkInDate,
      searchFilter.checkOutDate,
      searchFilter.guestCount
    );
    expect(component.rooms).toEqual(emptyRooms);
  });
});
