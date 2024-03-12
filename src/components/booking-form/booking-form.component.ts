import { Component, Input } from '@angular/core';
import { Room } from '../../interfaces/room'; // Import Room interface

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent {
  @Input() room: Room | null = null; // Input to receive the room data

  booking = {
    email: '',
    checkInDate: '',
    checkOutDate: '',
    guests: 1,
  };

  onSubmit(): void {
    // Implement booking logic here
    // - Validate check-in and check-out dates (ensure check-in before check-out)
    // - Check for room availability on those dates (needs integration with your service)
    // - Check if the room has the capacity for the number of guests
    // - If valid, submit booking information (could involve calling a booking service)
    // - Handle success or error scenarios
    console.log('Booking submitted:', this.booking);
    // Clear the form after successful booking (optional)
  }
}
