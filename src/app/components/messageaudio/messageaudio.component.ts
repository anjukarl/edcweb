import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { finalize } from 'rxjs';

import { MessageAudio } from '../../shared/models';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-messageaudio',
  templateUrl: './messageaudio.component.html',
  styleUrls: ['./messageaudio.component.scss'],
})
export class MessageaudioComponent implements OnInit {
  heading = 'Audio Messages from other servants of God';

  columnsToDisplay = ['speaker', 'title', 'actions'];
  dataSource!: MatTableDataSource<any>;
  loading = false;
  searchKey: string = '';
  currentSermon = false;
  activeSermon = false;
  playingSermon!: MessageAudio;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.reloadSermons();
  }

  reloadSermons() {
    this.loading = true;
    this.fileService
      .loadMessagesaudio()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((trackList) => {
        this.dataSource = new MatTableDataSource(trackList);
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

  playSermon(sermon: MessageAudio) {
    this.activeSermon = true;
    this.playingSermon = sermon;
  }
}
