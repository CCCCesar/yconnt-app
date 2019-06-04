//providers necesarios para las rutas
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Params } from '@angular/router';

//componentes a usar en las rutas
import { HomeComponent } from './parts/home/home.component';
import { BuyComponent } from './parts/buy/buy.component';
import { BuycelComponent } from './parts/buycel/buycel.component';
import { CarComponent } from './parts/car/car.component';
import { LoginComponent } from './parts/login/login.component';
import { MessageComponent } from './parts/message/message.component';
import { ConsolasComponent } from './parts/consolas/consolas.component';
import { AccesorioComponent } from './parts/accesorio/accesorio.component';
import { AudvideoComponent } from './parts/audvideo/audvideo.component';



//arreglo de rutas
const appRoutes: Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'computer',
        component: BuyComponent
    },
    {
        path:'phone',
        component: BuycelComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'order',
        component: CarComponent
    },
    {
        path:'questions',
        component: MessageComponent
    },
    {
        path: 'consoles',
        component: ConsolasComponent
    },
    {
        path: 'props',
        component: AccesorioComponent
    },
    {
        path: 'audiovideo',
        component: AudvideoComponent
    },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

  
];
//exportar las rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);