import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: any[] = [];
  seleccionado: string;
  constructor(private youtubeService: YoutubeService) {}

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    this.youtubeService.getVideos().subscribe(respuesta => {
      this.videos.push.apply(this.videos, respuesta);
      // this.videos = respuesta;
    });
  }

  ver(video: any, evento: any) {
    this.seleccionado = video;
    $('#modal').modal('toggle');
    $('#modal').css({ display: 'block' });
  }

  cerrar(event: any) {
    this.seleccionado = null;
    $('#modal').modal('toggle');
    $('#modal').css({ display: 'none' });
  }
}
