import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <div>{{ data }}</div>
    <div>GównoDUpa</div>
  `,
  styles: ['div { padding: 20px; border: 1px solid #ccc; }']
})
export class ItemComponent {
  @Input() data: any;
}