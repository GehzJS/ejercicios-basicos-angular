import { Component, OnInit } from '@angular/core';

@Component({
	  selector: 'app-body',
	  templateUrl: './body.component.html',
	  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

	mostrar = true;
	personajes : string[] = ['nombre 1', 'nombre 2', 'nombre 3', 'nombre 4', 'nombre 5'];
	frase: any = {
		mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		autor: 'Lorem ipsum'
	}
	  constructor() { }

	  ngOnInit() {
	  }

}
