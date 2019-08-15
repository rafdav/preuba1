import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {DemoMaterialModule} from './material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TabComponent } from './tab.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DemoMaterialModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, TabComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
