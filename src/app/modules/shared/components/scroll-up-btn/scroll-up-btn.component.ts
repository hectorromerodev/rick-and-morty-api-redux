import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-up-btn',
  templateUrl: './scroll-up-btn.component.html',
  styleUrls: ['./scroll-up-btn.component.scss']
})
export class ScrollUpBtnComponent {
  @Input() showScrollBtn: boolean = false;
  constructor(
    @Inject(DOCUMENT) private doc: Document
  ) { }

  onScrollUp(): void {
    this.doc.documentElement.scrollTop = 0;
  }
}
