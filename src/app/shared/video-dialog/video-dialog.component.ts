import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.scss'],
})
export class VideoDialogComponent implements OnInit {
  yturl = 'https://www.youtube.com/embed/';
  vidUrl = '';

  constructor(
    public dialogRef: MatDialogRef<VideoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit(): void {
    this.vidUrl = this.yturl + this.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
