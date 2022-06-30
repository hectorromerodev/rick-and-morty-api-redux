import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '../environments/environment';
import { ROOT_REDUCERS, ROOT_EFFECTS } from '@state/app.state';
import { SpinnerLoaderModule } from '@shared/components/spinner-loader/spinner-loader.module';
import { HeaderModule } from '@shared/components/header/header.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot(ROOT_EFFECTS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    SpinnerLoaderModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
