import { Component, OnInit } from '@angular/core';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';
import { IDropdownsItens } from './IDropdownsItens';

@Component({
  selector: 'app-raspagem',
  templateUrl: './raspagem.component.html',
  styleUrls: ['./raspagem.component.scss']
})


export class RaspagemComponent implements OnInit {
  dropdownList: IDropdownsItens[];
  selectedItems: IDropdownsItens[];
  dropdownSettings: IDropdownSettings;

  constructor() { }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Vasco' },
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Selecionar tudo',
      unSelectAllText: 'Desmarcar tudo',
      searchPlaceholderText: 'Pesquisar',
      itemsShowLimit: 27,
      allowSearchFilter: true
    };
  }

onItemSelect(item: any) {
  console.log('onItemSelect', item);
}
onSelectAll(items: any) {
  console.log('onSelectAll', items);
}
onItemClick(item: any) {
  console.log(item)
}

}
