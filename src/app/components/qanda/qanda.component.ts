import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { finalize } from 'rxjs';

import { Qanda } from '../../shared/models';
import { FileService } from '../../services/file.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qanda',
  templateUrl: './qanda.component.html',
  styleUrls: ['./qanda.component.scss'],
})
export class QandaComponent implements OnInit {
  heading = 'Questions and Answers';

  columnsToDisplay = ['number', 'question', 'actions'];
  dataSource!: MatTableDataSource<any>;
  loading = false;
  searchKey: string = '';

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private fileService: FileService, private router: Router) {}

  ngOnInit(): void {
    this.reloadQandas();
  }

  reloadQandas() {
    this.loading = true;
    this.fileService
      .loadQandas()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((qandaList) => {
        this.dataSource = new MatTableDataSource(qandaList);
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

  viewQanda(qanda: Qanda) {
    this.router.navigate(['/qanda', qanda.serialno]);
  }
}
