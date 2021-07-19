import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRoomsComponent } from './rooms/create-rooms/create-rooms.component';
import { RoomsDetailsComponent } from './rooms/rooms-details/rooms-details.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { UpdateRoomsComponent } from './rooms/update-rooms/update-rooms.component';


const routes: Routes = [
  { path: '', redirectTo: 'rooms', pathMatch: 'full'},
  { path: 'rooms', component: RoomsListComponent},
  { path: 'add', component: CreateRoomsComponent},
  { path: 'update/:id', component: UpdateRoomsComponent},
  { path: 'details/:id', component: RoomsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
