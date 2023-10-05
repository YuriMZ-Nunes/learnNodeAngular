import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { FormsModule } from '@angular/forms';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { SharedModule } from './shared/shared.module';
import { AverageComponent } from './average/average.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DiretivasComponent,
    AverageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
