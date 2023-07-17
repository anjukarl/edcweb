import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

import { Songs } from '../../shared/models';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
  heading = 'Songs - Text';

  columnsToDisplay = ['serialno', 'title', 'actions'];
  dataSource!: MatTableDataSource<any>;
  loading = false;
  searchKey: string = '';

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private fileService: FileService, private router: Router) {}

  ngOnInit(): void {
    this.reloadSongs();
  }

  reloadSongs() {
    this.loading = true;
    this.fileService
      .loadSongs()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((songsList) => {
        this.dataSource = new MatTableDataSource(songsList);
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

  viewSongs(songs: Songs) {
    this.router.navigate(['/songs', songs.serialno]);
  }
}
