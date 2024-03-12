import { Component, OnInit } from '@angular/core';
import { Room } from '../../interfaces/room';
import { RoomService } from '../../services/room-service.service';
import { Observable } from 'rxjs'; // Import Observable
import { DatepickerComponent } from '../datepicker/datepicker.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  rooms: Room[] = [];
  selectedCheckInDate: Date | null = null;
  selectedCheckOutDate: Date | null = null;

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.roomService.getAvailableRooms().subscribe((rooms: Room[]) => {
      this.rooms = rooms;
    });
  }

  onSearchRooms(dates: { checkInDate: Date; checkOutDate: Date }) {
    this.selectedCheckInDate = dates.checkInDate;
    this.selectedCheckOutDate = dates.checkOutDate;
    this.roomService
      .getAvailableRooms(dates.checkInDate, dates.checkOutDate)
      .subscribe((availableRooms: Room[]) => {
        this.rooms = availableRooms;
      });
  }
}
