import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SecondSlideComponent } from './second-slide/second-slide.component';
import { ThirdSlideComponent } from './third-slide/third-slide.component';
import { FirstSlideComponent } from './first-slide/first-slide.component';
import { FourthSlideComponent } from './fourth-slide/fourth-slide.component';

const routes: Routes = [
  {path: '', component: FirstSlideComponent},
  {path: 'second', component: SecondSlideComponent},
  {path: 'third', component: ThirdSlideComponent},
  {path: 'fourth', component: FourthSlideComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    FirstSlideComponent,
    SecondSlideComponent,
    ThirdSlideComponent,
    FourthSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
