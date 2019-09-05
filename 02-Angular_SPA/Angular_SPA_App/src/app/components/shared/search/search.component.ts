import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../../services/heroes.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

    heroes: Heroe[] = [];
    termino: string;
    constructor(private _activatedRoute: ActivatedRoute,
        private _heroesService: HeroesService,
        private _router: Router) {}

    ngOnInit() {
        this._activatedRoute.params.subscribe(params => {
            this.termino = params['termino'];
            this.heroes = this._heroesService.searchHero(params['termino']);
            console.log(this.heroes);
        });
    }

    seeHero = (index: number) => { this._router.navigate(['/hero', index]) }
}
