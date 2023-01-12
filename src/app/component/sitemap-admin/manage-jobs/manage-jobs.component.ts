import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import {
  jobAssignedUserTableData,
  jobDetailForm,
  JobsListData,
} from './jobs-component-content/jobs-data';

@Component({
  selector: 'app-manage-jobs',
  templateUrl: './manage-jobs.component.html',
  styleUrls: ['./manage-jobs.component.css'],
})
export class ManageJobsComponent implements OnInit {
  @Input() searchValue = null;
  jobListData = new JobsListData().listData['allJobs'];
  showDiv = false;
  detailForm = new jobDetailForm().detailForm;
  assignTblHeader = new jobAssignedUserTableData().tblHeader;
  assignTblData = new jobAssignedUserTableData().tblData;
  assignUserForm = { email: null, accessType: 1 };
  assignedUserClickData = null;
  assignedUserName = null;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchValue) {
      if (this.searchValue) {
        this.jobListData = new JobsListData().listData['allJobs'].filter(
          (item) => item.name.toLowerCase().includes(this.searchValue)
        );
      } else {
        this.jobListData = new JobsListData().listData['allJobs'];
      }
    }
  }

  listClick(list) {
    this.showDiv = true;
  }

  btnClick(event) {
    this.assignedUserClickData = event;
    this.assignedUserName = event.data.userName;
  }

  onSubmitDetailForm() {}

  onAssignUserModalSubmit() {}

  btnDeleteAssignedUserClick(id) {
    if (this.assignedUserClickData && this.assignTblData) {
      const index = this.assignTblData.findIndex(
        (item) => item.id === this.assignedUserClickData.data.id
      );
      if (index != -1) {
        this.assignTblData.splice(index, 1);
        document.getElementById(id).setAttribute('data-bs-dismiss', 'modal');
        document.getElementById(id).click();
      }
    }
  }
}
