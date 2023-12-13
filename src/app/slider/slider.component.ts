import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() items: any[] = []; // Dane otrzymane z backendu
  activeIndex: number = 0;
  prevIndex: number = this.items.length - 1;
  nextIndex: number = 1;

  setActive(index: number): void {
    if (index > this.activeIndex || (index === 0 && this.activeIndex === this.items.length - 1)) {
      this.prevIndex = this.activeIndex;
      this.activeIndex = index;
      this.nextIndex = index < this.items.length - 1 ? index + 1 : 0;
    } else if (index < this.activeIndex || (index === this.items.length - 1 && this.activeIndex === 0)) {
      this.prevIndex = index;
      this.activeIndex = index;
      this.nextIndex = this.activeIndex < this.items.length - 1 ? this.activeIndex + 1 : 0;
    }
  }

  next(): void {
    this.prevIndex = this.activeIndex;
    this.activeIndex = this.nextIndex;
    this.nextIndex = this.nextIndex < this.items.length - 1 ? this.nextIndex + 1 : 0;
    if (this.activeIndex === 0) {
      this.prevIndex = this.items.length - 1;
    }
  }

  prev(): void {
    this.nextIndex = this.activeIndex;
    this.activeIndex = this.prevIndex;
    this.prevIndex = this.prevIndex > 0 ? this.prevIndex - 1 : this.items.length - 1;
    if (this.activeIndex === this.items.length - 1) {
      this.nextIndex = 0;
    }
  }
}