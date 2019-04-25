import { Routes } from '@angular/router';

import { OrderPageComponent } from './order-page/order-page.component';
import { LoginComponent } from './login/login.component';
export const appRoutes: Routes = [
    
    {path:'', component:LoginComponent},
    {path:'orderPage',component:OrderPageComponent},

];