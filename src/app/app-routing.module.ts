import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
  {path: "", component: MainComponent},
  {path: "quote", component: QuoteComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
