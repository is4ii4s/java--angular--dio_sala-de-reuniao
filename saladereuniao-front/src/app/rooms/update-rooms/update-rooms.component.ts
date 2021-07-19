import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rooms } from '../rooms';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-update-rooms',
  templateUrl: './update-rooms.component.html',
  styleUrls: ['./update-rooms.component.css']
})
export class UpdateRoomsComponent implements OnInit {

  id: number;
  room: Rooms;
  submitted: false;

  constructor(private roomsService: RoomsService,
              private router: Router,
              private activateRouter: ActivatedRoute) { }

  ngOnInit() {
    this.room = new Rooms();

    this.id = this.activateRouter.snapshot.params['id'];

    this.roomsService.getRoom(this.id)
      .subscribe(data => {
        console.log(data);
        this.room = data;
      }, error => console.log(error));
  };

  updateRoom() {
    this.roomsService.updateRoom(this.id, this.room)
      .subscribe(data => console.log(data), error => console.log(error));
    
    this.room = new Rooms();

    this.gotoList();
  }

  onSubmit() {
    this.updateRoom();
  }

  gotoList() {
    this.router.navigate(['/rooms']);
  }

}
