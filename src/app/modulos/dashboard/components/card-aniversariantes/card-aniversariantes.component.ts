import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-aniversariantes',
  templateUrl: './card-aniversariantes.component.html',
  styleUrls: ['./card-aniversariantes.component.scss']
})
export class CardAniversariantesComponent implements OnInit {

  @Input() listAniversariantes: any;
  constructor() { }

  ngOnInit(): void {
  }

}
