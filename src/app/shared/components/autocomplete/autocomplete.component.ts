import { Results, DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  results: Results[] = [];

  Placeholder = 'Хочу найти...';
  simpleItems = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
      this.dataService.getResults().subscribe(items => this.results = items);
      this.simpleItems = [
        'Садовая техника',
        'Посуда',
        'Освещение',
        'Предметы декора',
        'Газонокосилка Штиль',
      ];
  }

}
