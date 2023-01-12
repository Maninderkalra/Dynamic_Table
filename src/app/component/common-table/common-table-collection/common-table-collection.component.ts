import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-common-table-collection',
  templateUrl: './common-table-collection.component.html',
  styleUrls: ['./common-table-collection.component.css'],
})
export class CommonTableCollectionComponent implements OnInit {
  @Input() tableHeader = [];
  @Input() tableData = [];
  @Input() isPagination = false;
  @Input() dropDownVal = [];
  @Input() tblClass = '';
  @Output() dropDownChange = new EventEmitter();
  @Output() buttonClickEmitter = new EventEmitter();
  @Output() linkClickEmitter = new EventEmitter();
  @Output() checkBoxEmitter = new EventEmitter();

  pager: any = {};
  tableDataWithPage: any[];

  constructor() {}

  ngOnInit() {
    if (this.isPagination) {
      this.pager = this.getPager(this.tableData.length, 1, 5);
      this.setPage(1);
    } else {
      this.tableDataWithPage = this.tableData;
    }
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.tableData) {
      this.tableDataWithPage = this.tableData;
    }
  }

  onOptionsSelected(value) {
    this.dropDownChange.emit(value);
  }

  onButtonClick(event, header) {
    const value = { data: event, header: header };
    this.buttonClickEmitter.emit(value);
  }

  onLinkClick(event, header) {
    const value = { data: event, header: header };
    this.linkClickEmitter.emit(value);
  }

  onCheckboxClick(event, header) {
    const value = { data: event, header: header };
    this.checkBoxEmitter.emit(value);
  }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 5) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);
    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: number, endPage: number;
    if (totalPages <= 5) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 2 > totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
      (i) => startPage + i
    );

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }

  setPage(page: number) {
    this.pager = this.getPager(this.tableData.length, page, 5);
    this.tableDataWithPage = this.tableData.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }

  isArray(obj) {
    if (Array.isArray(obj)) return true;
    else return false;
  }
}
