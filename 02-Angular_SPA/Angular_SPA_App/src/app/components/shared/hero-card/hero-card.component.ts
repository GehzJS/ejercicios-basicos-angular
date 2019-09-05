import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-hero-card',
    templateUrl: './hero-card.component.html',
    styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

    @Input() heroe: Heroe[] = [];
    @Input() index: number;

    @Output() selectedHero: EventEmitter < number > ;

    constructor(private _router: Router) {
        this.selectedHero = new EventEmitter();
    }

    ngOnInit() {}

    seeHero = () => { this._router.navigate(['/hero', this.index]); };

}
