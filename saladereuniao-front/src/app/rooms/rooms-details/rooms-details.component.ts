import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rooms } from '../rooms';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-rooms-details',
  templateUrl: './rooms-details.component.html',
  styleUrls: ['./rooms-details.component.css']
})
export class RoomsDetailsComponent implements OnInit {

  id: number;
  room: Rooms;

  constructor(private roomsService: RoomsService,
              private router: Router,
              private activateRouter: ActivatedRoute) { }

  ngOnInit() {
    this.room = new Rooms();

    this.id = this.activateRouter.snapshot.params['id'];

    this.roomsService.getRoom(this.id)
      .subscribe(data => {
        console.log(data)
        this.room = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['rooms']);
  }
}
