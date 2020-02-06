import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { QuoteComponent } from './quote/quote.component';
import { SimpleComponent } from './simple/simple.component'

const routes: Routes = [
  {path: "", component: MainComponent},
  {path: "quote", component: QuoteComponent},
  {path: "simple/:id", component: SimpleComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
