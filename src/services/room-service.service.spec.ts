import { TestBed } from '@angular/core/testing';
import { RoomService } from './room-service.service';
import { AppModule } from '../app/app.module'; // Import only AppModule

describe('RoomServiceService', () => {
  let service: RoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
    service = TestBed.inject(RoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
