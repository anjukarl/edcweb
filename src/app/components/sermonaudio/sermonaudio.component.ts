import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { finalize } from 'rxjs';

import { Sermon } from '../../shared/models';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-sermonaudio',
  templateUrl: './sermonaudio.component.html',
  styleUrls: ['./sermonaudio.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('0.5s')),
    ]),
  ],
})
export class SermonaudioComponent implements OnInit {
  heading = 'Audio Sermons';

  columnsToDisplay = ['series', 'title', 'actions'];
  dataSource!: MatTableDataSource<any>;
  expandedElement: Sermon | null;
  loading = false;
  searchKey: string = '';
  currentSermon = false;
  activeSermon = false;
  playingSermon!: Sermon;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private fileService: FileService, private router: Router) {}

  ngOnInit(): void {
    this.reloadSermons();
  }

  reloadSermons() {
    this.loading = true;
    this.fileService
      .loadSermons()
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

  onSelectSermon() {
    this.currentSermon = true;
  }

  playSermon(sermon: Sermon) {
    this.activeSermon = true;
    this.playingSermon = sermon;
  }
}
