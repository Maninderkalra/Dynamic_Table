import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AdminRolesPermissionComponent } from '../admin-roles-permission/admin-roles-permission.component';
import { PermissionSaveService } from '../admin-user/component-content/permission-save.service';
import { RolesPermission } from '../admin-user/component-content/roles-permission';
import { RolesData } from './component-assets/roles-data';

@Component({
  selector: 'app-manage-roles',
  templateUrl: './manage-roles.component.html',
  styleUrls: ['./manage-roles.component.css'],
})
export class ManageRolesComponent implements OnInit {
  @Input() searchValue = null;
  rolesTableData = null;
  rolesTableClass = new RolesData();
  permissionCheckbox = null;
  @ViewChild(AdminRolesPermissionComponent)
  private rolePermissionComponent: AdminRolesPermissionComponent;

  constructor(private permissionService: PermissionSaveService) {}

  ngOnInit() {
    this.rolesTableData = this.rolesTableClass.tblData;
    this.permissionCheckbox = new RolesPermission().permissionChckBox;
  }

  onListClick(listItem) {
    this.permissionCheckbox = null;
    this.rolePermissionComponent = null;
    // if (listItem) {
    //   // let rolePermission = sessionStorage.getItem('rolePersmissionSave');
    //   if (rolePermission) {
    //     let roleData = JSON.parse(rolePermission);
    //     const roleIndex = roleData.findIndex(
    //       (item) => item.userData.roleId === this.rolesTableData.roleId
    //     );
    //     if (roleIndex != -1 && roleData[roleIndex].checkBoxData) {
    //       this.permissionCheckbox = roleData[roleIndex].checkBoxData;
    //     } else {
    //       this.permissionCheckbox = new RolesPermission().permissionChckBox;
    //     }
    //   } else {
    this.permissionCheckbox = new RolesPermission().permissionChckBox;
    // }
    // }
  }

  permissionSave() {
    // this.permissionService.saveData(
    //   {
    //     userData: this.rolesTableData,
    //     checkBoxData: this.permissionCheckbox,
    //   },
    //   'roleId',
    //   'rolePersmissionSave'
    // );
  }
}
