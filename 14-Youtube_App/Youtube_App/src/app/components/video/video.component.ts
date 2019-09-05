import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Input() video;
  @Output() mostrarModal: EventEmitter<boolean>;

  constructor() {
    this.mostrarModal = new EventEmitter();
  }

  ngOnInit() {}

  ver() {
    this.mostrarModal.emit(true);
  }
}
