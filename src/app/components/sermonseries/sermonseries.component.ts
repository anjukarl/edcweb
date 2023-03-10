import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { finalize } from 'rxjs';

import { Series } from '../../shared/models';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-sermonseries',
  templateUrl: './sermonseries.component.html',
  styleUrls: ['./sermonseries.component.scss'],
})
export class SermonseriesComponent implements OnInit {
  heading = 'Audio Sermon Series';

  columnsToDisplay = ['text', 'actions'];
  dataSource!: MatTableDataSource<any>;
  loading = false;
  searchKey: string = '';
  activeSeries: Series;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.reloadSeries();
  }

  reloadSeries() {
    this.loading = true;
    this.fileService
      .loadSermonSeries()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((seriesList) => {
        this.dataSource = new MatTableDataSource(seriesList);
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

  openSeries(series: Series) {
    this.activeSeries = series;
  }

  backToSeries() {
    this.activeSeries = null;
  }
}
