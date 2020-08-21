import { Component, OnInit } from '@angular/core';
import { CovidService } from '../services/covid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises: any[] = [];

  constructor(private covidService: CovidService) {
     this.covidService.getStats().subscribe((data: any) =>{
       console.log(data['data'].rows);
       this.paises = data['data'].rows;
     });
   }

  ngOnInit(): void {
  }

}
