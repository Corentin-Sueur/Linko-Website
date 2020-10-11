import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-page-etudiants',
  templateUrl: './page-etudiants.component.html',
  styleUrls: ['./page-etudiants.component.css']
})
export class PageEtudiantsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const status = form.value['status'];
}
  
}


