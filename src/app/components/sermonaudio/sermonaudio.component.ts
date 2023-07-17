import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { finalize } from 'rxjs';

import { Sermon, Series } from '../../shared/models';
import { FileService } from '../../services/file.service';
import { VideoDialogComponent } from '../../shared/video-dialog/video-dialog.component';

@Component({
  selector: 'app-sermonaudio',
  templateUrl: './sermonaudio.component.html',
  styleUrls: ['./sermonaudio.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('0.2s')),
    ]),
  ],
})
export class SermonaudioComponent implements OnInit {
  @Input()
  series: Series;
  heading = 'Audio Sermons';

  columnsToDisplay = ['title', 'actions'];
  dataSource!: MatTableDataSource<any>;
  expandedElement: Sermon | null;
  loading = false;
  searchKey: string = '';
  currentSermon = false;
  activeSermon = false;
  playingSermon!: Sermon;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator1!: MatPaginator;

  constructor(private fileService: FileService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.reloadSermons();
  }

  reloadSermons() {
    this.loading = true;
    this.fileService
      .loadSermons(this.series)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((trackList) => {
        this.dataSource = new MatTableDataSource(trackList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator1;
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
    if (sermon.path) {
      this.activeSermon = true;
      this.playingSermon = sermon;
    } else {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.data = sermon.videoUrl;

      this.dialog
        .open(VideoDialogComponent, dialogConfig)
        .afterClosed()
        .subscribe(() => {
          this.onSearchClear();
        });
    }
  }
}
