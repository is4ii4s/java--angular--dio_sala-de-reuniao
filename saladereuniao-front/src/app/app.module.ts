import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRoomsComponent } from './rooms/create-rooms/create-rooms.component';
import { RoomsDetailsComponent } from './rooms/rooms-details/rooms-details.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { UpdateRoomsComponent } from './rooms/update-rooms/update-rooms.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateRoomsComponent,
    RoomsDetailsComponent,
    RoomsListComponent,
    UpdateRoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
