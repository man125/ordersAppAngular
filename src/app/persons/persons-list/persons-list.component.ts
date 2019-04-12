import { Component, OnInit, Input } from '@angular/core';
import { IPerson } from 'src/app/shared/interfaces';
import {PERSONS} from '../../../assets/mock-persons';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {
 filteredPersons :IPerson[];
 @Input() personas: IPerson[];
 constructor() { }

  ngOnInit() {
    //this.filteredPersons = PERSONS;
    this.filteredPersons = this.personas;
  }

  sort(prop: string) {
    // A sorter service will handle the sorting
  }
}
