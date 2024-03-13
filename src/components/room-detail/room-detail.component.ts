import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../../interfaces/room';
import { RoomService } from '../../services/room-service.service';
import Swal from 'sweetalert2';
import { BookingRequest } from '../../interfaces/booking-request';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss'],
})
export class RoomDetailComponent implements OnInit {
  room: Room | null = null;
  roomId: number = 0;
  checkInDate: string = '';
  checkOutDate: string = '';
  userEmail: string = '';
  guestCount: number = 1;

  private roomService: RoomService;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    roomService: RoomService
  ) {
    this.roomService = roomService;
  }

  ngOnInit(): void {
    // Get room ID from route parameters
    this.roomId = parseInt(this.route.snapshot.paramMap.get('id') || '');

    this.route.queryParams.subscribe((params) => {
      this.checkInDate = params['checkInDate'];
      this.checkOutDate = params['checkOutDate'];
      this.guestCount = parseInt(params['guestCount']) || 1;
    });

    this.roomService.getRoomById(this.roomId).subscribe((room: Room) => {
      this.room = room;
    });
  }

  makeBooking() {
    const bookingData: BookingRequest = {
      roomId: this.roomId,
      email: this.userEmail,
      checkinDate: this.checkInDate,
      checkoutDate: this.checkOutDate,
      guests: this.guestCount,
    };

    this.roomService.createBooking(bookingData).subscribe({
      next: (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Booking Created!',
          text: 'Booking created successfully.',
        }).then(() => {
          this.router.navigate(['/']); // Redirect to home page
        });
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error Creating Booking!',
          text: error || 'An unknown error occurred.',
        });
      },
    });
  }
}
