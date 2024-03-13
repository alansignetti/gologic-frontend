import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { HomeComponent } from '../components/home/home.component';
import { RoomDetailComponent } from '../components/room-detail/room-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { DatepickerComponent } from '../components/datepicker/datepicker.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RoomService } from '../services/room-service.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterTestingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    RoomDetailComponent,
    DatepickerComponent,
  ],
  providers: [RoomService],
  bootstrap: [AppComponent],
})
export class AppModule {}
