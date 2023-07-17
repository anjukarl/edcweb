import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Qanda } from '../../shared/models';

@Component({
  selector: 'app-qandata',
  templateUrl: './qandata.component.html',
  styleUrls: ['./qandata.component.scss'],
})
export class QandataComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<QandataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Qanda
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
