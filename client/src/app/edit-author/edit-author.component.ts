import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from "@angular/router";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {

  author:any;
  error:string;
  constructor(private _router:Router, private _activatedRoute:ActivatedRoute, private _httpService:HttpService) { }

  ngOnInit() {
    // this.resetPage();
    this._activatedRoute.params.subscribe((params:Params)=>{
      let obs = this._httpService.getAuthor(params['author_id'])
      obs.subscribe(data=>{
        this.author = data;
      })
    })
  }
  // resetPage(){
  //   this.author = {
  //     name:""
  //   }
  // }
  updateAuthor(){
    let obs = this._httpService.updateAuthor(this.author)
    obs.subscribe(data=>{
      if('errors' in data){
        this.error = data['message'];
      }
      else{
        // this.resetPage();
        this._router.navigate(['/'])
      }
    })
  }

}
