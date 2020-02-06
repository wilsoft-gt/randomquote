import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { QuoteComponent } from './quote/quote.component';

import { HttpClientModule} from '@angular/common/http';
import { SimpleComponent } from './simple/simple.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    QuoteComponent,
    SimpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
