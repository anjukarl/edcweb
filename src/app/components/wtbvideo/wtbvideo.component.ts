import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { finalize } from 'rxjs';

import { Videos } from '../../shared/models';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-wtbvideo',
  templateUrl: './wtbvideo.component.html',
  styleUrls: ['./wtbvideo.component.scss'],
})
export class WtbvideoComponent implements OnInit {
  heading = 'With the Bible - Videos';
  verse =
    'In the beginning was the Word, and the Word was with God, and the Word was God.';
  columnsToDisplay = ['thumbnail', 'title', 'actions'];
  dataSource!: MatTableDataSource<any>;
  loading = false;
  searchKey: string = '';

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private fileService: FileService) {}

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

  playVideo(vid: Videos) {}
}
