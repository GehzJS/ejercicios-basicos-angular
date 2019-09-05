import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit {
  personas = Array(500).fill(0);
  @ViewChild(CdkVirtualScrollViewport, { static: false })
  viewport: CdkVirtualScrollViewport;

  constructor() {}

  ngOnInit() {}

  inicio() {
    this.viewport.scrollToIndex(0);
  }
  medio() {
    this.viewport.scrollToIndex(this.personas.length / 2);
  }
  final() {
    this.viewport.scrollToIndex(this.personas.length);
  }
}
