import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';
import { SearchComponent } from './components/shared/search/search.component';

const APP_ROUTES: Routes = [{
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'hero/:id',
        component: HeroeComponent
    },
    {
        path: 'search/:termino',
        component: SearchComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
