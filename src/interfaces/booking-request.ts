import { Room } from './room';
export interface BookingRequest {
  bookingRequest: number;
  room: Room;
  checkinDate: Date;
  checkoutDate: Date;
}
