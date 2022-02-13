import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxMatomoTrackerModule} from '@ngx-matomo/tracker';
import {NgHttpCachingModule} from 'ng-http-caching';
import {NgxMatomoRouterModule} from '@ngx-matomo/router';
import {HttpErrorInterceptor} from './global/HttpErrorInterceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxMatomoTrackerModule.forRoot({
      trackerUrl: '//analytics.reisishot.pictures',
      siteId: 1,
    }),
    NgxMatomoRouterModule,
    NgHttpCachingModule.forRoot({
      lifetime: 60 * 1000, // 1 minute
    }),
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
