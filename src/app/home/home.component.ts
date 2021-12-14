import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Team } from '../models/team'

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
})
export class HomeComponent { 
    teams: Team[] = [];

    constructor(private httpService: HttpService){}

    ngOnInit(){        
        this.httpService.getTeams().subscribe((data: Team[]) => this.teams = data);
    }
}