import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params, Route} from "@angular/router";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {
  error:string;
  quote:any;
  author_id:string;
  author:any;
  constructor(private _router:Router, private _activatedRoute:ActivatedRoute, private _httpService:HttpService) { }

  ngOnInit() {
    this.resetPage();
    this._activatedRoute.params.subscribe((param:Params)=>{
      this.author_id = param['author_id'];
      let obs = this._httpService.getAuthor(this.author_id);
      obs.subscribe(data=>{
        this.author = data;
      })
    })
  }
  resetPage(){
    this.quote = {
      quote:""
    }
    this.error = ""
  }
  createQuote(){
    this.quote['author_id'] = this.author_id;
    let obs = this._httpService.createQuote(this.quote);
    obs.subscribe(data=>{
      if('errors' in data){
        this.error = data['message'];
      }
      else{
        let goto = "/authors/" + this.author_id
        this._router.navigate([goto])
      }
    })
  }

}
