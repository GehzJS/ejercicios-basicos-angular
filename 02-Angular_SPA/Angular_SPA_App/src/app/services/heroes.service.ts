import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class HeroesService {

    private heroes: Heroe[] = [{
            nombre: "nombre0",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eaque vero, veritatis voluptates ducimus veniam facilis suscipit.",
            foto: "../assets/img/boy-1.png",
            nacimiento: "1990-01-10",
            cargo: "empleado"
        },
        {
            nombre: "nombre1",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eaque vero, veritatis voluptates ducimus veniam facilis suscipit. lorem",
            foto: "../assets/img/girl-1.png",
            nacimiento: "1991-02-09",
            cargo: "empleado"
        },
        {
            nombre: "nombre2",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eaque vero, veritatis voluptates ducimus veniam facilis suscipit.",
            foto: "../assets/img/boy-2.png",
            nacimiento: "1992-03-08",
            cargo: "empleado"
        },
        {
            nombre: "nombre3",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eaque vero, veritatis voluptates ducimus veniam facilis suscipit.",
            foto: "../assets/img/girl-2.png",
            nacimiento: "1993-04-07",
            cargo: "empleado"
        },
        {
            nombre: "nombre4",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eaque vero, veritatis voluptates ducimus veniam facilis suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, corporis.",
            foto: "../assets/img/boy-3.png",
            nacimiento: "1994-05-06",
            cargo: "empleado"
        },
        {
            nombre: "nombre5",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eaque vero, veritatis voluptates ducimus veniam facilis suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, corporis.",
            foto: "../assets/img/girl-3.png",
            nacimiento: "1995-06-05",
            cargo: "empleado"
        },
        {
            nombre: "nombre6",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eaque vero, veritatis voluptates ducimus veniam facilis suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, corporis.",
            foto: "../assets/img/boy-4.png",
            nacimiento: "1996-07-04",
            cargo: "empleado"
        },
        {
            nombre: "nombre7",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eaque vero, veritatis voluptates ducimus veniam facilis suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt veritatis fugiat officia blanditiis ab, molestiae ipsam aut, odio similique dicta nihil voluptate, reiciendis. Nisi itaque, cupiditate ut ipsa sapiente vitae.",
            foto: "../assets/img/girl-4.png",
            nacimiento: "1997-08-03",
            cargo: "empleado"
        },
        {
            nombre: "nombre8",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eaque vero, veritatis voluptates ducimus veniam facilis suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt veritatis fugiat officia blanditiis ab, molestiae ipsam aut, odio similique dicta nihil voluptate, reiciendis. Nisi itaque, cupiditate ut ipsa sapiente vitae.",
            foto: "../assets/img/boy-5.png",
            nacimiento: "1998-09-02",
            cargo: "empleado"
        },
        {
            nombre: "nombre9",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eaque vero, veritatis voluptates ducimus veniam facilis suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt veritatis fugiat officia blanditiis ab, molestiae ipsam aut, odio similique dicta nihil voluptate, reiciendis. Nisi itaque, cupiditate ut ipsa sapiente vitae.",
            foto: "../assets/img/girl-5.png",
            nacimiento: "1999-10-01",
            cargo: "empleado"
        }
    ];

    constructor() {
        console.log("Servicio funcionando")
    }

    getHeroes = (): Heroe[] => this.heroes;

    getHero = (index: string): string => this.heroes[index];

    searchHero = (termino: string): Heroe[] => {
        let heroArray: Heroe[] = [];
        termino = termino.toLowerCase();
        for (let index = 0; index < this.heroes.length; index++) {
            let heroe = this.heroes[index];
            let nombre = heroe.nombre.toLowerCase();
            if (nombre.indexOf(termino) >= 0) {
                heroe.index = index;
                heroArray.push(heroe);
            }
        }
        return heroArray;
    }
}

export interface Heroe {
    index?: number;
    nombre: string;
    descripcion: string;
    foto: string;
    nacimiento: string;
    cargo: string;
};
