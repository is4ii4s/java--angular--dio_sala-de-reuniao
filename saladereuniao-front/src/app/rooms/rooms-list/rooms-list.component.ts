import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Rooms } from '../rooms';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {
  rooms : Observable<Rooms[]>;

  constructor(private roomsService: RoomsService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.rooms = this.roomsService.getRoomList();
  }

  deleteRoom(id: number) {
    this.roomsService.deleteRoom(id)
      .subscribe(
        data => {
          console.log(data)
          this.reloadData()
        },
        error => console.log(error)
        );
  }

  roomDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateRoom(id: number) {
    this.router.navigate(['update', id]);
  }

}
