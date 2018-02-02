import { Component } from '@angular/core';

@Component({
  selector: 'horizontal',
  templateUrl: 'horizontal.component.html'
})
export class HorizontalComponent {

  selectedHorizontal = null;

  items = [
      { name: 'Item 1', id: 1 },
      { name: 'Item 2', id: 2 },
      { name: 'Item 3', id: 3 },
      { name: 'Item 4', id: 4 }
    ];

  change() {
    this.selectedHorizontal = this.items[3];
  }
}
