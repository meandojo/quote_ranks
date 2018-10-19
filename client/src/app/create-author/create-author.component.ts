import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {
  error:String="";
  author:any;
  constructor(private _httpService:HttpService, private _router:Router) { }

  ngOnInit() {
    this.resetPage();
  }
  resetPage(){
    this.author = {
      name:""
    }
    this.error = ""
  }
  createAuthor(){
    let obs = this._httpService.createAuthor(this.author)
    obs.subscribe(data=>{
      console.log(data);
      if("errors" in data){
        this.error = data["message"]
      }
      else{
        this.resetPage();
        this._router.navigate(['/'])
      }
    })
  }

}
