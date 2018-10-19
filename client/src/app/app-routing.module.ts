import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthorComponent } from './author/author.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/home"
  },
  {
    path:"authors/new",
    component:CreateAuthorComponent
  },
  {
    path:'authors/:author_id',
    component:AuthorComponent
  },
  {
    path:"quotes/:author_id",
    component:CreateQuoteComponent
  },
  {
    path:"authors/:author_id/edit",
    component:EditAuthorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
