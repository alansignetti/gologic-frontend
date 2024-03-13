import { Component, OnInit } from '@angular/core';
import { Room } from '../../interfaces/room';
import { RoomService } from '../../services/room-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  rooms: Room[] = [];
  selectedCheckInDate: Date | null = null;
  selectedCheckOutDate: Date | null = null;
  selectedGuestCount: number = 1;
  isSearched: boolean = false;
  isLoading = true;
  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.roomService.getRooms().subscribe((rooms: Room[]) => {
      this.rooms = rooms;
      this.isLoading = false;
    });
  }

  onSearchRooms(filter: {
    checkInDate: Date;
    checkOutDate: Date;
    guestCount: number;
  }) {
    this.isLoading = true;
    this.selectedCheckInDate = filter.checkInDate;
    this.selectedCheckOutDate = filter.checkOutDate;
    this.selectedGuestCount = filter.guestCount;
    this.isSearched = true;
    this.roomService
      .getAvailableRooms(
        filter.checkInDate,
        filter.checkOutDate,
        this.selectedGuestCount
      )
      .subscribe((availableRooms: Room[]) => {
        this.rooms = availableRooms;
        this.isLoading = false;
      });
  }
}
