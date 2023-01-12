import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  tableHeader = [
    {
      columnName: 'subject',
      displayName: 'subject',
      class: '',
      dropDown: false,
      icon: false,
      visible: true,
      span: true,
      link: false,
      button: false,
    },
    {
      columnName: 'rating',
      displayName: 'Rating',
      class: '',
      dropDown: false,
      icon: false,
      visible: true,
      span: true,
      link: false,
      button: false,
    },
    {
      columnName: 'description',
      displayName: 'description',
      class: '',
      dropDown: false,
      icon: false,
      visible: true,
      span: true,
      link: false,
      button: false,
    },
    {
      columnName: 'submitted',
      displayName: 'Submitted By',
      class: '',
      dropDown: false,
      icon: false,
      visible: true,
      span: true,
      link: false,
      button: false,
    },
    {
      columnName: 'date',
      displayName: 'Date',
      class: '',
      dropDown: false,
      icon: false,
      visible: true,
      span: true,
      link: false,
      button: false,
    },
    {
      columnName: 'comments',
      displayName: 'Comments',
      class: '',
      dropDown: false,
      dropDownButton: false,
      icon: false,
      visible: true,
      span: false,
      link: false,
      button: false,
      text: true,
    },
    {
      columnName: 'action',
      displayName: 'Action',
      class: '',
      dropDown: true,
      dropDownButton: false,
      icon: false,
      visible: true,
      span: false,
      link: false,
      button: false,
    },
  ];

  tblData = [
    {
      id: 1,
      subject: '',
      rating: '',
      description: '',
      submitted: '',
      date: '',
      comments: '',
      action: 1,
    },
    {
      id: 2,
      subject: '',
      rating: '',
      description: '',
      submitted: '',
      date: '',
      comments: '',
      action: 2,
    },
    {
      id: 3,
      subject: '',
      rating: '',
      description: '',
      submitted: '',
      date: '',
      comments: '',
      action: 1,
    },
    {
      id: 4,
      subject: '',
      rating: '',
      description: '',
      submitted: '',
      date: '',
      comments: '',
      action: 1,
    },
    {
      id: 5,
      subject: '',
      rating: '',
      description: '',
      submitted: '',
      date: '',
      comments: '',
      action: 2,
    },
  ];

  dropDownOptions = [
    {
      id: 1,
      value: 1,
      name: 'Open',
    },
    {
      id: 2,
      value: 2,
      name: 'Resolved',
    },
  ];

  tableData = [];

  constructor() {}

  ngOnInit() {
    this.tableData = this.tblData;
  }

  onSearchChange(value) {
    if (value) {
      const data = this.tblData.filter((item) => item.subject.includes(value));
      this.tableData = data;
    } else {
      this.tableData = this.tblData;
    }
  }
}
