import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }   from './login/login.component';
import { HomeComponent }   from './home/home.component';
import { DetailComponent }   from './detail/detail.component';
import { NotFoundComponent }   from './not-found.component';

// import { TeamDetailsComponent }   from './detail/team.details.components';


// const detailRoutes = [
//   { path: 'details', component: TeamDetailsComponent},
// ]

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: DetailComponent },
  // { path: 'detail/:id', component: DetailComponent, children: detailRoutes },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
