import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../interfaces/room';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  readonly apiUrl: string = 'http://localhost:3000/api/rooms';

  constructor(private http: HttpClient) {}

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl);
  }

  getRoomById(id: number): Observable<Room> {
    return this.http.get<Room>(this.apiUrl + '/' + id);
  }

  getAvailableRooms(
    checkInDate?: Date,
    checkOutDate?: Date
  ): Observable<Room[]> {
    const convertedCheckInDate = checkInDate ? new Date(checkInDate) : '';
    const convertedCheckOutDate = checkOutDate ? new Date(checkOutDate) : '';
    return this.http.get<Room[]>(this.apiUrl + '/available', {
      params: {
        checkInDate:
          convertedCheckInDate instanceof Date
            ? convertedCheckInDate.toISOString()
            : convertedCheckInDate.toString(),
        checkOutDate:
          convertedCheckOutDate instanceof Date
            ? convertedCheckOutDate.toISOString()
            : convertedCheckOutDate.toString(),
      },
    });
  }
}
