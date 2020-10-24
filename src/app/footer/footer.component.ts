import { Component, OnInit } from '@angular/core';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  faInstagram = faInstagram;
  faFacebookSquare = faFacebookSquare;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;

  constructor() {}

  ngOnInit(): void {}
}
