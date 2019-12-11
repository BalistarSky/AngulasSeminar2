import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'; // für two-way Databinding

import { AppRoutingModule } from './app-routing.module'; // Dependencies
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SuchleisteComponent } from './components/suchleiste/suchleiste.component';
import { HeaderComponent } from './components/header/header.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { GridItemComponent } from './components/grid-view/grid-item/grid-item.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { PostComponent } from './components/post/post.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostImgComponent } from './components/post/post-img/post-img.component';
import { TestService } from './services/test.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SuchleisteComponent,
    HeaderComponent,
    GridViewComponent,
    GridItemComponent,
    HomePageComponent,
    ErrorPageComponent,
    PostComponent,
    PostPageComponent,
    PostImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // für two-way Databinding
    NgbModule,
  ],
  providers: [TestService], // hier müssen die services rein!
  bootstrap: [AppComponent]
})
export class AppModule { }
