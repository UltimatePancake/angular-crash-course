// import { RestApiService } from './rest-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

const appRoutes: Routes = [
    { path: 'home', component: ListComponent },
    { path: 'detail/:id', component: DetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
