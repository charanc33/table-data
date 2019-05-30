import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TableService } from './services/table.service';
import { TabletService } from './services/tabletwo.service';
import { FormsModule } from '@angular/forms'
import { AuthGuardService } from './services/auth-guard.service';
import { HeaderComponent } from './header/header.component';
import { ModalsModule } from './modal/modal.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}


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
    ModalsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
    }),
  ],
  providers: [LoginService,TableService,TabletService,AuthGuardService],
  bootstrap: [AppComponent],
  // exports:[FirstDirectiveDirective]
})
export class AppModule { }
