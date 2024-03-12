import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component'; // Adjust the path if needed
import { RoomDetailComponent } from '../components/room-detail/room-detail.component';
import { BookingFormComponent } from '../components/booking-form/booking-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'rooms/:id', component: RoomDetailComponent },
  { path: 'booking/:id', component: BookingFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
