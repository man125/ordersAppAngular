import { Component, OnInit } from '@angular/core';
import {PERSONS} from '../../assets/mock-persons';
import { IPerson } from '../shared/interfaces';


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  private title: string;
  private people: IPerson[];
  constructor() { }

  ngOnInit() {
    this.title = "Persons Crud";
    this.people = PERSONS;
  }

}
