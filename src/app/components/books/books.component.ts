import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { finalize } from 'rxjs';

import { FileService } from '../../services/file.service';
import { Bookpdf } from '../../shared/models';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  @ViewChild('theContainer') theContainer;
  heading = 'Books';
  noBooks = false;
  books: Bookpdf[] = [];
  loading = false;
  columnNum = 5;
  tileSize = 230;

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.loading = true;
    this.fileService
      .loadBookpdfs()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((pdflist) => {
        this.books = pdflist;
        if (this.books.length == 0) {
          this.noBooks = true;
        }
      });
  }

  setColNum() {
    let width = this.theContainer.nativeElement.offsetWidth;
    this.columnNum = Math.trunc(width / this.tileSize);
  }

  ngAfterViewInit() {
    this.setColNum();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setColNum();
  }
}
