import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rooms } from '../rooms';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-create-rooms',
  templateUrl: './create-rooms.component.html',
  styleUrls: ['./create-rooms.component.css']
})
export class CreateRoomsComponent implements OnInit {
  room: Rooms = new Rooms();
  submitted = false;

  constructor(private roomsService: RoomsService,
              private router: Router) { }

  ngOnInit() {
  }

  newRoom(): void {
    this.submitted = false;
    this.room = new Rooms();
  }

  save() {
    this.roomsService.createRoom(this.room)
      .subscribe(data => console.log(data),
      error => console.log(error));
      this.room = new Rooms();
      this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/rooms'])
  }
}
