import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'image/:id',  // mit Doppelpunkt packe ich Variablen ein, für dynamisches Wert
    component: PostPageComponent
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',   // alles andere, kommt zum Schluss
    redirectTo: '404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
