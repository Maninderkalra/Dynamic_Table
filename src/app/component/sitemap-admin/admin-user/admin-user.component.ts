import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { PermissionSaveService } from './component-content/permission-save.service';
import {
  SitemapRole,
  SitemapTier,
} from './component-content/sitemap-role.enum';
import { UserTableData } from './component-content/user-table-data';
import { RolesPermission } from './component-content/roles-permission';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css'],
})
export class AdminUserComponent implements OnInit {
  @Output() selectedData = new EventEmitter();
  userTable = new UserTableData();
  userTableHeader = [];
  usrTableData = [];
  permissionCheckbox = null;
  informationModalData = {
    id: null,
    name: null,
    email: null,
    phone: null,
    role: null,
    subTier: null,
  };
  dropDownRoles = [
    {
      value: SitemapRole.Admin,
      name: 'Admin',
    },
    {
      value: SitemapRole.ProjectManager,
      name: 'Project Manager',
    },
    {
      value: SitemapRole.Client,
      name: 'Client',
    },
  ];

  dropDownTiers = [
    {
      value: SitemapTier.Free,
      name: 'Free',
    },
    {
      value: SitemapTier.Basic,
      name: 'Basic',
    },
    {
      value: SitemapTier.Enterprise,
      name: 'Enterprise',
    },
  ];
  @Input() searchValue: string;
  permissionData: any;
  checkedData = [];

  constructor(private permissionService: PermissionSaveService) {}

  ngOnInit() {
    this.userTableHeader = this.userTable.tblHeader;
    this.usrTableData = this.userTable.tblData;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchValue) {
      if (this.searchValue) {
        this.usrTableData = this.userTable.tblData.filter((item) =>
          item.name.toLowerCase().includes(this.searchValue)
        );
      } else {
        this.usrTableData = this.userTable.tblData;
      }
    }
  }

  onRoleSelected(value) {}

  onTierSelected(value) {}

  btnClick(event) {
    if (event.data && event.header) {
      if (event.header.includes('information')) {
        this.informationModalData = event.data;
      }
    }
  }

  onCheckBoxClick(event) {
    if (this.checkedData.length > 0) {
      const index = this.checkedData.findIndex(
        (item) => item.data.id === event.data.id
      );
      if (index != -1) {
        if (event.data.checkBox === false) this.checkedData.splice(index, 1);
      } else {
        this.checkedData.push(event);
      }
    } else {
      this.checkedData.push(event);
    }
    this.selectedData.emit(this.checkedData);
  }

  linkClick(event) {
    if (event.data && event.header) {
      if (event.header.columnName.includes('permission')) {
        this.permissionData = event.data;

        let rolePermission = sessionStorage.getItem('permissionSave');
        if (rolePermission) {
          let roleData = JSON.parse(rolePermission);
          const roleIndex = roleData.findIndex(
            (item) => item.userData.id === this.permissionData.id
          );
          if (roleIndex != -1 && roleData[roleIndex].checkBoxData) {
            this.permissionCheckbox = roleData[roleIndex].checkBoxData;
          } else {
            this.permissionCheckbox = new RolesPermission().permissionChckBox;
          }
        } else {
          this.permissionCheckbox = new RolesPermission().permissionChckBox;
        }
      }
    }
  }

  permissionSave() {
    this.permissionService.saveData(
      {
        userData: this.permissionData,
        checkBoxData: this.permissionCheckbox,
      },
      'id',
      'persmissionSave'
    );
  }
}
