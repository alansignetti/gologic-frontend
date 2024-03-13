import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatepickerComponent } from './datepicker.component';

describe('DatepickerComponent', () => {
  let component: DatepickerComponent;
  let fixture: ComponentFixture<DatepickerComponent>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(DatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should initialize with default values', () => {
  //   const fixture = TestBed.createComponent(DatepickerComponent);
  //   const component = fixture.componentInstance;
  //   fixture.detectChanges();

  //   expect(component.selectedCheckInDate).toBeNull();
  //   expect(component.selectedCheckOutDate).toBeNull();
  //   expect(component.selectedGuestCount).toBe(1);
  //   expect(component.hasDateValidationError).toBeFalse();
  // });

  // it('should update selectedCheckOutDate and validate dates on check-out selection', () => {
  //   const fixture = TestBed.createComponent(DatepickerComponent);
  //   const component = fixture.componentInstance;
  //   fixture.detectChanges();

  //   const checkInDate = new Date(2024, 2, 15);
  //   const checkOutDate = new Date(2024, 2, 17);
  //   const checkInInputElement =
  //     fixture.nativeElement.querySelector('#checkInDate');
  //   const checkOutInputElement =
  //     fixture.nativeElement.querySelector('#checkOutDate');

  //   checkInInputElement.value = checkInDate.toISOString().slice(0, 10);
  //   checkInInputElement.dispatchEvent(new Event('change'));
  //   fixture.detectChanges();

  //   checkOutInputElement.value = checkOutDate.toISOString().slice(0, 10);
  //   checkOutInputElement.dispatchEvent(new Event('change'));
  //   fixture.detectChanges();

  //   expect(component.selectedCheckOutDate).toEqual(checkOutDate);
  //   expect(component.hasDateValidationError).toBeFalse();
  // });

  // it('should set hasDateValidationError true for invalid check-out date and no dates', () => {
  //   const fixture = TestBed.createComponent(DatepickerComponent);
  //   const component = fixture.componentInstance;
  //   fixture.detectChanges();

  //   // Case 1: Invalid Check-Out Date (Before Check-In)
  //   const checkInDate = new Date(2024, 2, 15); // March 15, 2024
  //   const checkOutDate = new Date(2024, 2, 14); // March 14, 2024 (before check-in)
  //   const checkInInputElement =
  //     fixture.nativeElement.querySelector('#checkInDate');
  //   const checkOutInputElement =
  //     fixture.nativeElement.querySelector('#checkOutDate');

  //   checkInInputElement.value = checkInDate.toISOString().slice(0, 10);
  //   checkInInputElement.dispatchEvent(new Event('change'));
  //   fixture.detectChanges();

  //   checkOutInputElement.value = checkOutDate.toISOString().slice(0, 10);
  //   checkOutInputElement.dispatchEvent(new Event('change'));
  //   fixture.detectChanges();

  //   expect(component.hasDateValidationError).toBeTrue();

  //   // Case 2: No Dates Selected
  //   checkInInputElement.value = '';
  //   checkOutInputElement.value = '';
  //   checkInInputElement.dispatchEvent(new Event('change'));
  //   checkOutInputElement.dispatchEvent(new Event('change'));
  //   fixture.detectChanges();

  //   expect(component.hasDateValidationError).toBeTrue();
  // });
});
