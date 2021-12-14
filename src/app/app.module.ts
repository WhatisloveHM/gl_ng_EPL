import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

import { HttpService } from './services/http.service';
import { LogService } from './services/log.service';

import { AppComponent }   from './app.component';
import { LoginComponent }   from './login/login.component';
import { HomeComponent }   from './home/home.component';
import { DetailComponent }   from './detail/detail.component';
import { NotFoundComponent }   from './not-found.component';

// import { TeamDetailsComponent }   from './detail/team.details.components';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DetailComponent,
    NotFoundComponent,
    // TeamDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
