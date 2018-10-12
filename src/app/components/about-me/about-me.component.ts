import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Card } from '../card';
import { DialogComponent } from '../dialog/dialog.component';
import { INTRODUCTION, SKILLS } from './about-me';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  cardCollection: Card[];
  submitted = false;
  intro = INTRODUCTION.split('\n');
  topics = Object.keys(SKILLS);
  skills = SKILLS;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
console.log(this.intro);
  }

  onSubmit() {
    this.submitted = true;
    this.dialog.open(DialogComponent);
  }

}
