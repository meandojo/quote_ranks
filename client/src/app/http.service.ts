import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HttpService {

  constructor(private _http:HttpClient) { }
  getAllAuthors(){
    return this._http.get('/api/authors')
  }
  createAuthor(author){
    return this._http.post('/api/authors', author)
  }
  getAuthor(author_id){
    return this._http.get('/api/authors/' + author_id)
  }
  createQuote(quote){
    return this._http.post("/api/quotes", quote);
  }
  castVote(num, quote_id){
    return this._http.patch('/api/quotes/' + quote_id, {votes:num})
  }
  deleteQuote(quote_id){
    return this._http.delete('/api/quotes/' + quote_id)
  }
  updateAuthor(author){
    return this._http.put('/api/authors/'+author._id, author);
  }

}
