import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

import { DailyWord } from '../../shared/models';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-wordftd',
  templateUrl: './wordftd.component.html',
  styleUrls: ['./wordftd.component.scss'],
})
export class WordftdComponent implements OnInit {
  heading = 'Daily Word - Audio & Text';

  columnsToDisplay = ['serialno', 'title', 'actions'];
  dataSource!: MatTableDataSource<any>;
  loading = false;
  searchKey: string = '';

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private fileService: FileService, private router: Router) {}

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
    this.router.navigate(['/wordftd', dword.serialno]);
  }
}
