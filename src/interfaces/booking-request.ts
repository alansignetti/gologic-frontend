import { Room } from './room';
export interface BookingRequest {
  bookingRequest?: number;
  roomId: number;
  room?: Room;
  checkinDate: string;
  checkoutDate: string;
  email: string;
  guestCount: number;
}
