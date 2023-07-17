import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DailyWord } from '../../shared/models';

@Component({
  selector: 'app-wordftdta',
  templateUrl: './wordftdta.component.html',
  styleUrls: ['./wordftdta.component.scss'],
})
export class WordftdtaComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<WordftdtaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DailyWord
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
