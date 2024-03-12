import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { HomeComponent } from '../components/home/home.component';
import { RoomDetailComponent } from '../components/room-detail/room-detail.component';
import { BookingFormComponent } from '../components/booking-form/booking-form.component';
import { HttpClientModule } from '@angular/common/http';
import { DatepickerComponent } from '../components/datepicker/datepicker.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    HomeComponent,
    RoomDetailComponent,
    BookingFormComponent,
    DatepickerComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
