import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from '../services/http.service';
import { Player } from '../models/player'
  
@Component({
    selector: 'detail-app',
    templateUrl: './detail.component.html',
})
export class DetailComponent{
  teamId: any;
  players: Player[] = [];
  private routeSubscription: Subscription;
    
  constructor(private route: ActivatedRoute, private httpService: HttpService){     
      this.routeSubscription = route.params.subscribe(params=>this.teamId=params['id']);
  }
  // constructor(private teamId: number){}


  ngOnInit(){        
    console.log(this.teamId)
    this.httpService.getPlayers(parseInt(this.teamId)).subscribe((data: Player[]) => this.players = data);

  }
}