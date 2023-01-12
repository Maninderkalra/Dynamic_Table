import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddNewJobComponent } from './manage-jobs/add-new-job/add-new-job.component';

@Component({
  selector: 'app-sitemap-admin',
  templateUrl: './sitemap-admin.component.html',
  styleUrls: ['./sitemap-admin.component.css'],
})
export class SitemapAdminComponent implements OnInit {
  tabValue = 'Sites';
  searchPlaceHolder = 'Search Site';
  searchValue = null;
  userSelectedData = null;
  @ViewChild(AddNewJobComponent) private alert: AddNewJobComponent;

  constructor() {}

  ngOnInit() {}

  tabClick(value) {
    if (value === 'sites') {
      this.tabValue = 'Sites';
      this.searchPlaceHolder = 'Search Site';
    }
    if (value === 'jobs') {
      this.tabValue = 'Jobs';
      this.searchPlaceHolder = 'Search Job';
    }
    if (value === 'users') {
      this.tabValue = 'Users';
      this.searchPlaceHolder = 'Search User';
    }
    if (value === 'roles') {
      this.tabValue = 'Roles';
      this.searchPlaceHolder = 'Search Role';
    }
  }

  onSearchChange(value) {
    this.searchValue = value;
  }

  manageUserSelectedData(event) {
    this.userSelectedData = event;
  }

  btnDeleteClick(id) {
    document.getElementById(id).setAttribute('data-bs-dismiss', 'modal');
    document.getElementById(id).click();
  }

  btnJobCloseModal() {
    this.alert.btnCancelClick(this.alert.form);
  }
}
