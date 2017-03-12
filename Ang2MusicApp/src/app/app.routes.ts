import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';

export const router: Routes = [
    { path: '', component: SearchComponent },
    { path: 'about', component: AboutComponent },
    
];

export const routes: ModuleWithProviders  = RouterModule.forRoot(router);