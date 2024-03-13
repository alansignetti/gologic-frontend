import { Component, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent {
  selectedCheckInDate: Date | null = null;
  selectedCheckOutDate: Date | null = null;
  selectedGuestCount: number = 1;
  hasDateValidationError = false;
  minDate: string | null = null;

  @Output() searchRooms = new EventEmitter<{
    checkInDate: Date;
    checkOutDate: Date;
    guestCount: number;
  }>();

  onCheckInDateChange(event: string) {
    this.validateDates();
  }

  validateDates() {
    this.hasDateValidationError =
      !this.selectedCheckInDate ||
      !this.selectedCheckOutDate ||
      (this.selectedCheckInDate &&
        this.selectedCheckOutDate &&
        this.selectedCheckInDate > this.selectedCheckOutDate);
    this.setMinDate(); // Update minimum date for check-out
  }

  setMinDate() {
    if (this.selectedCheckInDate) {
      const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in a day
      const selectedDate = new Date(this.selectedCheckInDate);
      this.minDate = new Date(selectedDate.getTime() + oneDay)
        .toISOString()
        .slice(0, 10);
    }
  }

  searchAvailableRooms() {
    if (!this.selectedCheckInDate || !this.selectedCheckOutDate) {
      let timerInterval: any;
      Swal.fire({
        html: 'Please select both Check-In and Check-Out dates.',
        timer: 1500,
        timerProgressBar: true,
        didOpen: () => {
          const timer = Swal.getPopup()?.querySelector('b');
          timerInterval = setInterval(() => {
            if (timer) {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
      return;
    }
    // Emit an event with selected dates
    this.searchRooms.emit({
      checkInDate: this.selectedCheckInDate,
      checkOutDate: this.selectedCheckOutDate,
      guestCount: this.selectedGuestCount,
    });
  }
}
