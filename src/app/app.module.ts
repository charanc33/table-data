import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { TableService } from './services/table.service';
import { TabletService } from './services/tabletwo.service';
import { FormsModule } from '@angular/forms'
import { AuthGuardService } from './services/auth-guard.service';
import { HeaderComponent } from './header/header.component';
import { ModalsModule } from './modal/modal.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    
    
    // FirstDirectiveDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalsModule
  ],
  providers: [LoginService,TableService,TabletService,AuthGuardService],
  bootstrap: [AppComponent],
  // exports:[FirstDirectiveDirective]
})
export class AppModule { }
