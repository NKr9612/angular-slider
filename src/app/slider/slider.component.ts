import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() items: any[] = []; // Dane otrzymane z backendu
  activeIndex: number = 0;

  setActive(index: number): void {
    this.activeIndex = index;
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.items.length;
  }

  prev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.items.length) % this.items.length;
  }
}