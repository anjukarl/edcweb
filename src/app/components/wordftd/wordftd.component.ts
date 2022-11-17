import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { finalize } from 'rxjs';

import { DailyWord } from '../../shared/models';
import { FileService } from '../../services/file.service';
import { WordftdtaComponent } from '../../components/wordftdta/wordftdta.component';

@Component({
  selector: 'app-wordftd',
  templateUrl: './wordftd.component.html',
  styleUrls: ['./wordftd.component.scss'],
})
export class WordftdComponent implements OnInit {
  heading = 'Daily Word - Audio & Text';

  columnsToDisplay = ['title', 'actions'];
  dataSource!: MatTableDataSource<any>;
  loading = false;
  searchKey: string = '';

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private fileService: FileService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.reloadDailyWord();
  }

  reloadDailyWord() {
    this.loading = true;
    this.fileService
      .loadDailyWord()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((dailywordList) => {
        this.dataSource = new MatTableDataSource(dailywordList);
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

  viewDailyWord(dword: DailyWord) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = dword;

    this.dialog
      .open(WordftdtaComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => {
        this.onSearchClear();
      });
  }
}
