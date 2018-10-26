import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Card } from '../card';
import { DialogComponent } from '../dialog/dialog.component';
import { INTRODUCTION, SKILLS } from './about-me';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  cardCollection: Card[];
  intro = INTRODUCTION.split('\n');
  topics = Object.keys(SKILLS);
  skills = SKILLS;
  submitted = false;
  private tries = 0;

  constructor(private dialog: MatDialog) { }

  onSubmit() {
    const randomNumber = Math.round(Math.random());

    if (this.tries && randomNumber) {
      this.submitted = true;
      this.dialog.open(DialogComponent);
    } else {
      this.tries++;
      alert('Something went wrong!');
    }
  }

}
