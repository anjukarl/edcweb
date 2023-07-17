import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Songs } from '../../shared/models';

@Component({
  selector: 'app-songsta',
  templateUrl: './songsta.component.html',
  styleUrls: ['./songsta.component.scss'],
})
export class SongstaComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SongstaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Songs
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
