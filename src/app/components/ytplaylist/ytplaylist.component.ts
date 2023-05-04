import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { finalize } from 'rxjs';

import { YTPlaylist } from '../../shared/models';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-ytplaylist',
  templateUrl: './ytplaylist.component.html',
  styleUrls: ['./ytplaylist.component.scss'],
})
export class YtplaylistComponent implements OnInit {
  heading = 'Video Messages Playlists';

  columnsToDisplay = ['thumbnail', 'title', 'actions'];
  dataSource!: MatTableDataSource<any>;
  loading = false;
  searchKey: string = '';
  activePlaylist: YTPlaylist;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.reloadYTPlaylist();
  }

  reloadYTPlaylist() {
    this.loading = true;
    this.fileService
      .loadYTPlaylist()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((playlist) => {
        this.dataSource = new MatTableDataSource(playlist);
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

  openPlaylist(playlist: YTPlaylist) {
    this.activePlaylist = playlist;
  }

  backToPlaylist() {
    this.activePlaylist = null;
  }
}
