import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router"; import { FormsModule } from '@angular/forms';
import { appRoutes } from './route';
import { AppComponent } from './app.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { LoginComponent } from './login/login.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    OrderPageComponent,
    LoginComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), FormsModule, RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ModalContentComponent ]
})
export class AppModule { }
