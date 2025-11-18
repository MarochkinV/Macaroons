import {Component} from '@angular/core';

@Component({
  selector: 'present-component',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.scss']
})
export class PresentComponent {
  showPresent: boolean = true;
  constructor() {
  }

}
