import { DecimalPipe } from "@angular/common";

export class Team{
  constructor(
     public teamId:number,
     public teamName:string,
     public city:string,
     public coach:string,
     public president:string,
     public cost: number,
     ){}
}