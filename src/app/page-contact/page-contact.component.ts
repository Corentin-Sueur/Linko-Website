import { Component, OnInit } from '@angular/core';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.css'],
})
export class PageContactComponent implements OnInit {
  faInstagram = faInstagram;
  faFacebookSquare = faFacebookSquare;
  faLinkedin = faLinkedin;
  faPhone = faPhoneAlt;
  faComment = faComment;

  constructor() {}

  ngOnInit(): void {}
}
