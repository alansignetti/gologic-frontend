import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent {
  selectedCheckInDate: Date | null = null;
  selectedCheckOutDate: Date | null = null;
  hasDateValidationError = false;
  minDate: string | null = null;

  @Output() searchRooms = new EventEmitter<{
    checkInDate: Date;
    checkOutDate: Date;
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
      alert('Please select both Check-In and Check-Out dates.');
      return;
    }
    // Emit an event with selected dates
    this.searchRooms.emit({
      checkInDate: this.selectedCheckInDate,
      checkOutDate: this.selectedCheckOutDate,
    });
  }
}
