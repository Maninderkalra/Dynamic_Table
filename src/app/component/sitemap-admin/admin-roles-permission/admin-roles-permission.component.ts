import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-roles-permission',
  templateUrl: './admin-roles-permission.component.html',
  styleUrls: ['./admin-roles-permission.component.css'],
})
export class AdminRolesPermissionComponent implements OnInit {
  @Input() permissionCheckbox: any = [];

  constructor() {}

  ngOnInit() {}

  CheckAllOptions(data, headerData, checked?: any) {
    if (checked === undefined) {
      if (data.firstListData.every((val) => val.checked == true)) {
        headerData.checked = false;
        this.checkAllOptionsForList(data, 'firstListData', false);
      } else this.checkAllOptionsForList(data, 'firstListData', true);
    } else {
      this.checkAllOptionsForList(data, 'firstListData', checked);
    }
  }

  checkAllOptionsForList(data, columnName, checked) {
    data[columnName].forEach((val) => {
      val.checked = checked;
    });
  }

  CheckAllOptionsForHead(data) {
    if (data.checked === false) {
      data.viewList.forEach((val) => {
        val.checked = false;
        this.CheckAllOptions(val, data, false);
      });
    } else
      data.viewList.forEach((val) => {
        val.checked = true;
        this.CheckAllOptions(val, data, true);
      });
  }
}
