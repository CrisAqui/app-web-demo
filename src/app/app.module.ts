import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { AhorroComponent } from './components/ahorro/ahorro.component';
import { MovimientoComponent } from './components/movimiento/movimiento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule } from '@angular/forms';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { AngularFirePerformanceModule } from "@angular/fire/compat/performance";



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TransferenciaComponent,
    AhorroComponent,
    MovimientoComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    NgxGoogleAnalyticsModule.forRoot('TU_MEASUREMENT_ID'),
    NgxGoogleAnalyticsRouterModule,
    AngularFirePerformanceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
