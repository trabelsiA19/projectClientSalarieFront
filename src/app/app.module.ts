import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientEffects } from './modules/clients/store/client.effects';
import clientReducer from './modules/clients/store/client.reducer';

import { SalarieListComponent } from './modules/salarie/salarie-list/salarie-list.component';
import { SalarieEffects } from './modules/salarie/store/salarie.effects';
import salarieReducer from './modules/salarie/store/salarie.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    StoreModule.forRoot({ clients: clientReducer, salaries: salarieReducer }),
    EffectsModule.forRoot([ClientEffects, SalarieEffects]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
