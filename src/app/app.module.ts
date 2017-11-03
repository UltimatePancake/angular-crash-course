import { RestApiService } from './rest-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
    { path: 'home', component: ListComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: 'create', component: CreateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent,
    CreateComponent,
    HeaderComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [RestApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
