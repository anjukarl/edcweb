import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { finalize } from 'rxjs';

import { Videos } from '../../shared/models';
import { FileService } from '../../services/file.service';
import { VideoDialogComponent } from '../../shared/video-dialog/video-dialog.component';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  heading = 'Video Sermons';
  verse =
    'In the beginning was the Word, and the Word was with God, and the Word was God.';
  columnsToDisplay = ['thumbnail', 'title', 'actions'];
  dataSource!: MatTableDataSource<any>;
  loading = false;
  searchKey: string = '';
  video!: Videos;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private fileService: FileService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.reloadVideos();
  }

  reloadVideos() {
    this.loading = true;
    this.fileService
      .loadVideos()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((results) => {
        this.dataSource = new MatTableDataSource(results);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  playVideo(vid: Videos) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '600px';
    dialogConfig.data = vid;

    this.dialog
      .open(VideoDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => {
        this.onSearchClear();
      });
  }
}
