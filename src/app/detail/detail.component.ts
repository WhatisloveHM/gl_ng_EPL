import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from '../services/http.service';
import { Player } from '../models/player';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {
  teamId: any;
  players: Player[] = [];
  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
    this.routeSubscription = route.params.subscribe(
      (params) => (this.teamId = params['id'])
    );
  }

  ngOnInit() {
    this.httpService
      .getPlayers(parseInt(this.teamId))
      .subscribe((data: Player[]) => (this.players = data));
  }
}
