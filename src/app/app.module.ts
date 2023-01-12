import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CollectionManagementComponent } from './component/collection-management/collection-management.component';
import { CommonTableCollectionComponent } from './component/common-table/common-table-collection/common-table-collection.component';
import { FeedbackComponent } from './component/feedback/feedback.component';
import { SitemapAdminComponent } from './component/sitemap-admin/sitemap-admin.component';
import { AdminUserComponent } from './component/sitemap-admin/admin-user/admin-user.component';
import { AdminRolesPermissionComponent } from './component/sitemap-admin/admin-roles-permission/admin-roles-permission.component';
import { AddEditUserComponent } from './component/sitemap-admin/add-edit-user/add-edit-user.component';
import { PermissionSaveService } from './component/sitemap-admin/admin-user/component-content/permission-save.service';
import { ManageJobsComponent } from './component/sitemap-admin/manage-jobs/manage-jobs.component';
import { AddNewJobComponent } from './component/sitemap-admin/manage-jobs/add-new-job/add-new-job.component';
import { ManageRolesComponent } from './component/sitemap-admin/manage-roles/manage-roles.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CollectionManagementComponent,
    CommonTableCollectionComponent,
    FeedbackComponent,
    SitemapAdminComponent,
    AdminUserComponent,
    AddEditUserComponent,
    AdminRolesPermissionComponent,
    ManageJobsComponent,
    AddNewJobComponent,
    ManageRolesComponent,
  ],
  bootstrap: [AppComponent],
  providers: [PermissionSaveService],
})
export class AppModule {}
