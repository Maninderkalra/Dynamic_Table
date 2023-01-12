import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-management',
  templateUrl: './collection-management.component.html',
  styleUrls: ['./collection-management.component.css'],
})
export class CollectionManagementComponent implements OnInit {
  docTableHeader = [
    {
      columnName: 'fileName',
      displayName: 'File Name',
      class: 'col-2',
      dropDown: false,
      icon: true,
      visible: true,
      span: true,
      link: false,
      button: false,
    },
    {
      columnName: 'sharedWith',
      displayName: 'Shared With',
      class: '',
      dropDown: false,
      icon: false,
      visible: true,
      span: true,
      link: false,
      button: false,
    },
    {
      columnName: 'sharedBy',
      displayName: 'Shared By',
      class: '',
      dropDown: false,
      icon: false,
      visible: true,
      span: true,
      link: false,
      button: false,
    },
    {
      columnName: 'dateTime',
      displayName: 'Date & Time',
      class: '',
      dropDown: false,
      icon: false,
      visible: true,
      span: true,
      link: false,
      button: false,
    },
    {
      columnName: 'accessType',
      displayName: 'Access Type',
      class: '',
      dropDown: false,
      dropDownButton: true,
      icon: false,
      visible: true,
      span: false,
      link: false,
      button: false,
    },
  ];

  docTableData = [
    {
      id: 1,
      fileName: 'File Name',
      sharedWith: 'Edouard Monet  (abcdef.lkomnort@microsoft.com)',
      sharedBy: 'Jennifer Twigg  (Jennifer.Twigg@coforge.com)',
      dateTime: '03-14-2019 16:45',
      accessType: 1,
    },
    {
      id: 2,
      fileName: 'File Name',
      sharedWith: 'Edouard Monet  (abcdef.lkomnort@microsoft.com)',
      sharedBy: 'Jennifer Twigg  (Jennifer.Twigg@coforge.com)',
      dateTime: '03-14-2019 16:45',
      accessType: 2,
    },
    {
      id: 3,
      fileName: 'File Name',
      sharedWith: 'Edouard Monet  (abcdef.lkomnort@microsoft.com)',
      sharedBy: 'Jennifer Twigg  (Jennifer.Twigg@coforge.com)',
      dateTime: '03-14-2019 16:45',
      accessType: 1,
    },
    {
      id: 4,
      fileName: 'File Name',
      sharedWith: 'Edouard Monet  (abcdef.lkomnort@microsoft.com)',
      sharedBy: 'Jennifer Twigg  (Jennifer.Twigg@coforge.com)',
      dateTime: '03-14-2019 16:45',
      accessType: 3,
    },
    {
      id: 5,
      fileName: 'File Name',
      sharedWith: 'Edouard Monet  (abcdef.lkomnort@microsoft.com)',
      sharedBy: 'Jennifer Twigg  (Jennifer.Twigg@coforge.com)',
      dateTime: '03-14-2019 16:45',
      accessType: 3,
    },
    {
      id: 6,
      fileName: 'File Name6',
      sharedWith: 'Edouard Monet  (abcdef.lkomnort@microsoft.com)',
      sharedBy: 'Jennifer Twigg  (Jennifer.Twigg@coforge.com)',
      dateTime: '03-14-2019 16:45',
      accessType: 1,
    },
    {
      id: 7,
      fileName: 'File Name7',
      sharedWith: 'Edouard Monet  (abcdef.lkomnort@microsoft.com)',
      sharedBy: 'Jennifer Twigg  (Jennifer.Twigg@coforge.com)',
      dateTime: '03-14-2019 16:45',
      accessType: 2,
    },
    {
      id: 8,
      fileName: 'File Name8',
      sharedWith: 'Edouard Monet  (abcdef.lkomnort@microsoft.com)',
      sharedBy: 'Jennifer Twigg  (Jennifer.Twigg@coforge.com)',
      dateTime: '03-14-2019 16:45',
      accessType: 1,
    },
    {
      id: 9,
      fileName: 'File Name9',
      sharedWith: 'Edouard Monet  (abcdef.lkomnort@microsoft.com)',
      sharedBy: 'Jennifer Twigg  (Jennifer.Twigg@coforge.com)',
      dateTime: '03-14-2019 16:45',
      accessType: 3,
    },
    {
      id: 10,
      fileName: 'File Name10',
      sharedWith: 'Edouard Monet  (abcdef.lkomnort@microsoft.com)',
      sharedBy: 'Jennifer Twigg  (Jennifer.Twigg@coforge.com)',
      dateTime: '03-14-2019 16:45',
      accessType: 3,
    },
  ];

  docDropDown = [
    {
      id: 1,
      value: 1,
      name: 'View',
    },
    {
      id: 2,
      value: 2,
      name: 'Edit',
    },
    {
      id: 3,
      value: 3,
      name: 'No Access',
    },
  ];

  jobTableHeader = [
    {
      columnName: 'siteJobName',
      displayName: 'Site/Job Name',
      class: '',
      dropDown: false,
      icon: false,
      visible: true,
      span: true,
      link: false,
      button: false,
    },
    {
      columnName: 'woNumber',
      displayName: 'WO Number',
      class: '',
      dropDown: false,
      icon: false,
      visible: true,
      span: true,
      link: false,
      button: false,
    },
    {
      columnName: 'sharedWith',
      displayName: 'Shared With',
      class: '',
      dropDown: false,
      icon: false,
      visible: true,
      span: true,
      link: false,
      button: false,
    },
    {
      columnName: 'sharedBy',
      displayName: 'Shared By',
      class: '',
      dropDown: false,
      icon: false,
      visible: true,
      span: true,
      link: false,
      button: false,
    },
    {
      columnName: 'dateTime',
      displayName: 'Date & Time',
      class: '',
      dropDown: false,
      icon: false,
      visible: true,
      span: true,
      link: false,
      button: false,
    },
    {
      columnName: 'accessType',
      displayName: 'Access Type',
      class: '',
      dropDown: false,
      dropDownButton: true,
      icon: false,
      visible: true,
      span: false,
      link: false,
      button: false,
    },
  ];

  jobTableData = [
    {
      id: 1,
      siteJobName: 'File Name',
      woNumber: 12345,
      sharedWith: 'Edouard Monet  (abcdef.lkomnort@microsoft.com)',
      sharedBy: 'Jennifer Twigg  (Jennifer.Twigg@coforge.com)',
      dateTime: '03-14-2019 16:45',
      accessType: 1,
    },
    {
      id: 2,
      siteJobName: 'File Name',
      woNumber: 12345,
      sharedWith: 'Edouard Monet  (abcdef.lkomnort@microsoft.com)',
      sharedBy: 'Jennifer Twigg  (Jennifer.Twigg@coforge.com)',
      dateTime: '03-14-2019 16:45',
      accessType: 2,
    },
    {
      id: 3,
      siteJobName: 'File Name',
      woNumber: 12345,
      sharedWith: 'Edouard Monet  (abcdef.lkomnort@microsoft.com)',
      sharedBy: 'Jennifer Twigg  (Jennifer.Twigg@coforge.com)',
      dateTime: '03-14-2019 16:45',
      accessType: 1,
    },
    {
      id: 4,
      siteJobName: 'File Name',
      woNumber: 12345,
      sharedWith: 'Edouard Monet  (abcdef.lkomnort@microsoft.com)',
      sharedBy: 'Jennifer Twigg  (Jennifer.Twigg@coforge.com)',
      dateTime: '03-14-2019 16:45',
      accessType: 3,
    },
    {
      id: 5,
      siteJobName: 'File Name',
      woNumber: 12345,
      sharedWith: 'Edouard Monet  (abcdef.lkomnort@microsoft.com)',
      sharedBy: 'Jennifer Twigg  (Jennifer.Twigg@coforge.com)',
      dateTime: '03-14-2019 16:45',
      accessType: 3,
    },
    {
      id: 6,
      siteJobName: 'File Name6',
      woNumber: 12345,
      sharedWith: 'Edouard Monet  (abcdef.lkomnort@microsoft.com)',
      sharedBy: 'Jennifer Twigg  (Jennifer.Twigg@coforge.com)',
      dateTime: '03-14-2019 16:45',
      accessType: 1,
    },
    {
      id: 7,
      siteJobName: 'File Name7',
      woNumber: 12345,
      sharedWith: 'Edouard Monet  (abcdef.lkomnort@microsoft.com)',
      sharedBy: 'Jennifer Twigg  (Jennifer.Twigg@coforge.com)',
      dateTime: '03-14-2019 16:45',
      accessType: 2,
    },
    {
      id: 8,
      siteJobName: 'File Name8',
      woNumber: 12345,
      sharedWith: 'Edouard Monet  (abcdef.lkomnort@microsoft.com)',
      sharedBy: 'Jennifer Twigg  (Jennifer.Twigg@coforge.com)',
      dateTime: '03-14-2019 16:45',
      accessType: 1,
    },
    {
      id: 9,
      siteJobName: 'File Name9',
      woNumber: 12345,
      sharedWith: 'Edouard Monet  (abcdef.lkomnort@microsoft.com)',
      sharedBy: 'Jennifer Twigg  (Jennifer.Twigg@coforge.com)',
      dateTime: '03-14-2019 16:45',
      accessType: 3,
    },
    {
      id: 10,
      siteJobName: 'File Name10',
      woNumber: 12345,
      sharedWith: 'Edouard Monet  (abcdef.lkomnort@microsoft.com)',
      sharedBy: 'Jennifer Twigg  (Jennifer.Twigg@coforge.com)',
      dateTime: '03-14-2019 16:45',
      accessType: 3,
    },
  ];

  txtSearch = null;
  docuTableData = [];
  siteJobsTableData = [];
  selectedTab = 1;
  searchPlaceHolder = 'Search by file name';

  constructor() {}

  ngOnInit() {
    this.docuTableData = this.docTableData;
    this.siteJobsTableData = this.jobTableData;
  }

  onSearchChange(value) {
    if (value && this.selectedTab === 1) {
      const data = this.docTableData.filter((item) =>
        item.fileName.includes(value)
      );
      this.docuTableData = data;
    } else {
      this.docuTableData = this.docTableData;
    }
    if (value && this.selectedTab === 2) {
      const data = this.jobTableData.filter((item) =>
        item.siteJobName.includes(value)
      );
      this.siteJobsTableData = data;
    } else {
      this.siteJobsTableData = this.jobTableData;
    }
  }

  tabClick(val) {
    if (val === 'documents') {
      this.selectedTab = 1;
      this.searchPlaceHolder = 'Search by file name';
    } else {
      this.selectedTab = 2;
      this.searchPlaceHolder = 'Search by Site/job name';
    }
  }
}
