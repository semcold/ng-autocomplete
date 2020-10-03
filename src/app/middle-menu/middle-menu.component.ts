import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle-menu',
  templateUrl: './middle-menu.component.html',
  styleUrls: ['./middle-menu.component.scss']
})
export class MiddleMenuComponent implements OnInit {

  value = 'Clear me';

  constructor() { }

  ngOnInit(): void {

  }

}
