import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { routing, appRoutingProviders} from './app.routing';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './parts/home/home.component';
import { HeaderComponent } from './parts/header/header.component';
import { BuyComponent } from './parts/buy/buy.component';
import { BuycelComponent } from './parts/buycel/buycel.component';
import { CarComponent } from './parts/car/car.component';

import { LoginComponent } from './parts/login/login.component';
import { ConsolasComponent } from './parts/consolas/consolas.component';
import { AccesorioComponent } from './parts/accesorio/accesorio.component';
import { AudvideoComponent } from './parts/audvideo/audvideo.component';
import { MessageComponent } from './parts/message/message.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BuyComponent,
    BuycelComponent,
    CarComponent,
    LoginComponent,
    ConsolasComponent,
    AccesorioComponent,
    AudvideoComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }