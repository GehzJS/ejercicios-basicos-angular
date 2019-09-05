import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() video;
  @Output() cerrarModal: EventEmitter<boolean>;

  constructor() {
    this.cerrarModal = new EventEmitter();
  }

  ngOnInit() {}

  cerrar() {
    this.cerrarModal.emit(false);
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }
}
