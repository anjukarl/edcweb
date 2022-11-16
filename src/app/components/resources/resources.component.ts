import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { finalize } from 'rxjs';

import { Message } from '../../shared/models';
import { FileService } from '../../services/file.service';
import { VideoDialogComponent } from '../../shared/video-dialog/video-dialog.component';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  heading = 'Messages from other servants of God';

  columnsToDisplay = ['speaker', 'title', 'actions'];
  dataSource!: MatTableDataSource<any>;
  loading = false;
  searchKey: string = '';
  message!: Message;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private fileService: FileService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.reloadMessages();
  }

  reloadMessages() {
    this.loading = true;
    this.fileService
      .loadMessages()
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

  playVideo(mes: Message) {
    const videoUrl = mes.videoUrl;
    const videoId = videoUrl.substring(videoUrl.indexOf('=') + 1);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = videoId;
    dialogConfig.width = '60%';

    this.dialog
      .open(VideoDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => {
        this.onSearchClear();
      });
  }
}
