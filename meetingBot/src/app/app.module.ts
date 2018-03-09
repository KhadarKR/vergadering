import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,HeaderComponent
  ],
  imports: [
    BrowserModule,MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
