import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeaderBarComponent, SideBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
