import { Injectable } from '@angular/core';

@Injectable()
export class PermissionSaveService {
  constructor() {}

  saveData(data, Id, sessionName) {
    if (data) {
      let rolePermission = sessionStorage.getItem(sessionName);
      if (rolePermission) {
        let roleData = JSON.parse(rolePermission);
        const roleIndex = roleData.findIndex(
          (item) => item.userData[Id] === data.userData[Id]
        );
        if (roleIndex != -1) {
          roleData.splice(roleIndex, 1);
          roleData.push(data);
          sessionStorage.setItem(sessionName, JSON.stringify(roleData));
        } else {
          roleData.push(data);
          sessionStorage.setItem(sessionName, JSON.stringify(roleData));
        }
      } else {
        this.storeDataInSession(data, sessionName);
      }
    }
  }

  private storeDataInSession(data, sessionName) {
    let tempArr = [];
    tempArr.push(data);
    sessionStorage.setItem(sessionName, JSON.stringify(tempArr));
  }
}
