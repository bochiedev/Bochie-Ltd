import { NgModule } from '@angular/core';
import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HomepageComponent } from './pages/homepage/homepage.component';




const routes : Routes =
  [
    {
      path: '',
      redirectTo: 'welcome',
      pathMatch: 'full'
    },
    {
      path: 'welcome',
      component: HomeComponent,
    },
    {
      path: 'home',
      component: HomepageComponent,
    },

  ];

@NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })

export class AppRoutingModule { }
