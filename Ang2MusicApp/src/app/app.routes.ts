import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';

export const router: Routes = [
    { path: '', component: SearchComponent },
    { path: 'about', component: AboutComponent },
    {path:'artist/:id', component:ArtistComponent}
    
];

export const routes: ModuleWithProviders  = RouterModule.forRoot(router);