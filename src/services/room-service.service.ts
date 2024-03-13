import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Room } from '../interfaces/room';
import { BookingRequest } from '../interfaces/booking-request';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  // readonly apiUrl: string = 'http://localhost:3000/api/';
  readonly apiUrl: string = ' https://gologic-backend.vercel.app/api/';

  constructor(private http: HttpClient) {}

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl + 'rooms');
  }

  getRoomById(id: number): Observable<Room> {
    return this.http.get<Room>(this.apiUrl + 'rooms/' + id);
  }

  getAvailableRooms(
    checkInDate?: Date,
    checkOutDate?: Date,
    guestCount?: number
  ): Observable<Room[]> {
    const convertedCheckInDate = checkInDate ? new Date(checkInDate) : '';
    const convertedCheckOutDate = checkOutDate ? new Date(checkOutDate) : '';
    return this.http.get<Room[]>(this.apiUrl + 'rooms/available', {
      params: {
        checkInDate:
          convertedCheckInDate instanceof Date
            ? convertedCheckInDate.toISOString()
            : convertedCheckInDate.toString(),
        checkOutDate:
          convertedCheckOutDate instanceof Date
            ? convertedCheckOutDate.toISOString()
            : convertedCheckOutDate.toString(),
        guestCount: guestCount ? guestCount.toString() : '',
      },
    });
  }

  createBooking(bookingData: BookingRequest): Observable<BookingRequest> {
    console.log(bookingData);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post<BookingRequest>(this.apiUrl + 'createBooking', bookingData, {
        headers,
      })
      .pipe(
        map((response: unknown) => response as BookingRequest),
        catchError((error: HttpErrorResponse) => {
          // Handle error response
          console.log(error.error.message);
          const errorMessage = error.error.message || 'Something went wrong';
          return throwError(errorMessage);
        })
      );
  }
}
