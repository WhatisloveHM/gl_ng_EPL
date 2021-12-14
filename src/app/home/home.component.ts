import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Team } from '../models/team';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  teams: Team[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService
      .getTeams()
      .subscribe((data: Team[]) => (this.teams = data));
  }
}
