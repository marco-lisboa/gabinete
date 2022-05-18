import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  styles : [
      `@media only screen and (max-width: 375px) {
        .container { max-width: 85%};
        .profile-sidebar { max-width: 85%};
        .profile-usermenu ul li a { font-size: 12px};
        .profile-usermenu ul li a svg { font-size: 12px};
        .profile-userpic { margin-left: 6rem; max-width: 12px};
        .profile-usertitle-name { font-size: 12px;}
       }`
  ]
})



export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

