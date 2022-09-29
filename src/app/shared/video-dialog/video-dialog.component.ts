import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Videos } from '../models';

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.scss'],
})
export class VideoDialogComponent implements OnInit {
  yturl = 'https://www.youtube.com/watch?v=';
  vidId = '';

  constructor(
    public dialogRef: MatDialogRef<VideoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Videos
  ) {}

  ngOnInit(): void {
    this.vidId = this.data.videoId;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
