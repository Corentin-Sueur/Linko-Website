import { Component, OnInit } from '@angular/core';

import { faFileAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-banniere',
  templateUrl: './banniere.component.html',
  styleUrls: ['./banniere.component.css'],
})
export class BanniereComponent implements OnInit {
  faFileAlt = faFileAlt;

  constructor() {}

  ngOnInit(): void {}
}
