import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allAuthors:any;
  constructor(private _httpService:HttpService) { }

  ngOnInit() {
    let obs = this._httpService.getAllAuthors();
    obs.subscribe(data=>{
      this.allAuthors = data;
    })
  }

}
