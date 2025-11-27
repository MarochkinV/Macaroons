import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'phone-component',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  public phoneNumber = {
    phone: '375293689868'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
