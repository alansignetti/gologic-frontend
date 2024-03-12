import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../../interfaces/room';
import { RoomService } from '../../services/room-service.service'; // Import the RoomService class

@Component({
  selector: 'app-room-details',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss'],
})
export class RoomDetailComponent implements OnInit {
  room: Room | null = null;
  roomId: number = 0;
  private roomService: RoomService; // Declare a private property of type RoomService

  constructor(private route: ActivatedRoute, roomService: RoomService) {
    this.roomService = roomService; // Assign the injected RoomService instance to the roomService property
  }

  ngOnInit(): void {
    // Get room ID from route parameters

    this.roomId = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.roomService.getRoomById(this.roomId).subscribe((room: Room) => {
      console.log(room);
      this.room = room; // Assign the result to the room property
    });
  }
}
