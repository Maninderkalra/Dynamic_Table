import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import {
  SitemapRole,
  SitemapTier,
} from '../admin-user/component-content/sitemap-role.enum';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css'],
})
export class AddEditUserComponent implements OnInit {
  @Input() modalTittle = null;

  @Input() informationModalData? = {
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
  selectedRole: SitemapRole;
  subTier: SitemapTier;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.informationModalData) {
      this.getSelectedRoleTier();
    }
  }

  onRoleSelected(value) {}

  onTierSelected(value) {}

  getSelectedRoleTier() {
    if (this.informationModalData.role) {
      this.selectedRole = this.dropDownRoles.find(
        (item) => item.name === this.informationModalData.role
      ).value;
    }
    if (this.informationModalData.subTier) {
      this.subTier = this.dropDownTiers.find(
        (item) => item.name === this.informationModalData.subTier
      ).value;
    }
  }

  onSubmit() {
    console.log('form');
  }
}
