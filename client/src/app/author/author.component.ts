import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author_id:string;
  author:any;
  constructor(private _activatedRoute:ActivatedRoute, private _httpService:HttpService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params:Params)=>{
      this.author_id = params['author_id'];
      this.updateAuthor();
    })
  }

  castVote(num, quote_id){
    let obs = this._httpService.castVote(num,quote_id);
    obs.subscribe(data=>{
      this.updateAuthor();
    });
  }
  updateAuthor(){
    let obs = this._httpService.getAuthor(this.author_id);
    obs.subscribe(data=>{
      this.author = data;
    })
  }
  deleteQuote(quote_id){
    let obs = this._httpService.deleteQuote(quote_id);
    obs.subscribe(data=>{
      this.updateAuthor();
    });
  }


}
