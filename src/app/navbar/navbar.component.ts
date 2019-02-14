import { Component,OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(NavbarComponentDialog, {panelClass: 'my-panel'});

  }
  ngOnInit() {
  }
}

@Component({
  selector: 'app-navbar-dialog',
  templateUrl: './navbar.component-dialog.html',
})
export class NavbarComponentDialog {}



