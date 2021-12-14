import { Injectable, Optional } from '@angular/core';
import { LogService } from './log.service';
import { HttpClient } from '@angular/common/http';
import { Team } from '../models/team';
import { Player } from '../models/player';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpService {
  constructor(
    private http: HttpClient,
    @Optional() private logService: LogService
  ) {}

  getTeams(): Observable<Team[]> {
    return this.http.get('assets/teams.json').pipe(
      map((data: any) => {
        return data.map(function (team: any): Team {
          return new Team(
            team.teamId,
            team.team_name,
            team.city,
            team.coach,
            team.president,
            team.total_cost
          );
        });
      }),
      catchError((err) => {
        if (this.logService) this.logService.write(err);
        return [];
      })
    );
  }

  getPlayers(teamId: number): Observable<Player[]> {
    return this.http.get('assets/players.json').pipe(
      map((data: any) => {
        const filteredPlayers = data.filter(function (player: any): boolean {
          return player.teamId === teamId;
        });
        return filteredPlayers.map(function (player: any): Player {
          return new Player(
            player.playerId,
            player.teamId,
            player.firstName,
            player.surName
          );
        });
      }),
      catchError((err) => {
        if (this.logService) this.logService.write(err);
        return [];
      })
    );
  }
}
