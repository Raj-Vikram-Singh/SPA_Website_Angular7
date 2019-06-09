import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home' , component: HomeComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'service', component: OurServicesComponent},
  {path: 'thankyou/:id', component: ThankyouComponent},
  {path: 'feedback', component: FeedbackComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
