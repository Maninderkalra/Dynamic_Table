import { IJobList } from './jobs-interface';

export class JobsListData {
  private jobListInterface: IJobList;

  listData = {
    allJobs: [
      {
        jobId: 1,
        name: 'Central DuPage Hospital',
        description: 'string',
        latitude: 'string',
        longitude: 'string',
        customerName: 'string',
        waNumber: '309930',
        projectManager: 'string',
        lastAccessed: '2022-07-21T08:02:46.815Z',
        jobContact: 'string',
        email: 'string',
        phone: 'string',
        createdOn: '2022-07-21T08:02:46.815Z',
        addedlink: 'string',
        address: 'string',
        logStatus: true,
        jobLogs: [
          {
            date: '2022-07-21T08:02:46.815Z',
            action: 'string',
            user: 'string',
          },
        ],
      },
      {
        jobId: 2,
        name: '2302 Thornton Rd',
        description: 'string',
        latitude: 'string',
        longitude: 'string',
        customerName: 'string',
        waNumber: '307098',
        projectManager: 'string',
        lastAccessed: '2022-07-21T08:02:46.815Z',
        jobContact: 'string',
        email: 'string',
        phone: 'string',
        createdOn: '2022-07-21T08:02:46.815Z',
        addedlink: 'string',
        address: 'string',
        logStatus: true,
        jobLogs: [
          {
            date: '2022-07-21T08:02:46.815Z',
            action: 'string',
            user: 'string',
          },
        ],
      },
      {
        jobId: 3,
        name: '7004 International Dr',
        description: 'string',
        latitude: 'string',
        longitude: 'string',
        customerName: 'string',
        waNumber: '309724',
        projectManager: 'string',
        lastAccessed: '2022-07-21T08:02:46.815Z',
        jobContact: 'string',
        email: 'string',
        phone: 'string',
        createdOn: '2022-07-21T08:02:46.815Z',
        addedlink: 'string',
        address: 'string',
        logStatus: true,
        jobLogs: [
          {
            date: '2022-07-21T08:02:46.815Z',
            action: 'string',
            user: 'string',
          },
        ],
      },
      {
        jobId: 4,
        name: '8295 Arenzville Rd.',
        description: 'string',
        latitude: 'string',
        longitude: 'string',
        customerName: 'string',
        waNumber: '310044',
        projectManager: 'string',
        lastAccessed: '2022-07-21T08:02:46.815Z',
        jobContact: 'string',
        email: 'string',
        phone: 'string',
        createdOn: '2022-07-21T08:02:46.815Z',
        addedlink: 'string',
        address: 'string',
        logStatus: true,
        jobLogs: [
          {
            date: '2022-07-21T08:02:46.815Z',
            action: 'string',
            user: 'string',
          },
        ],
      },
      {
        jobId: 5,
        name: '7800 S US HWY 17',
        description: 'string',
        latitude: 'string',
        longitude: 'string',
        customerName: 'string',
        waNumber: '309723',
        projectManager: 'string',
        lastAccessed: '2022-07-21T08:02:46.815Z',
        jobContact: 'string',
        email: 'string',
        phone: 'string',
        createdOn: '2022-07-21T08:02:46.815Z',
        addedlink: 'string',
        address: 'string',
        logStatus: true,
        jobLogs: [
          {
            date: '2022-07-21T08:02:46.815Z',
            action: 'string',
            user: 'string',
          },
        ],
      },
    ],
  };
}

export class jobDetailForm {
  detailForm = {
    customerName: null,
    siteName: null,
    contactPerson: null,
    email: null,
    phoneNumber: null,
    CAD: null,
    description: null,
  };
}

export class jobAssignedUserTableData {
  tblHeader = [
    {
      columnName: 'userName',
      displayName: 'User Name',
      class: '',
      dropDown: false,
      icon: true,
      visible: true,
      span: true,
      link: false,
      button: false,
      text: false,
    },
    {
      columnName: 'email',
      displayName: 'Email Address',
      class: '',
      dropDown: false,
      icon: false,
      visible: true,
      span: true,
      link: false,
      button: false,
      text: false,
    },
    {
      columnName: 'accessType',
      displayName: 'Access Type',
      class: '',
      dropDown: false,
      icon: false,
      visible: true,
      span: true,
      link: false,
      button: false,
      text: false,
    },
    {
      columnName: 'action',
      displayName: 'Action',
      class: '',
      dropDown: false,
      icon: true,
      visible: false,
      span: false,
      link: false,
      button: true,
      text: false,
    },
  ];

  actionButton = [
    {
      icon: 'fa-trash',
      tooltip: 'Edit User Information',
      dataBsToggle: 'modal',
      dataBsTarget: '#deleteAssignUser',
    },
  ];

  tblData = [
    {
      id: 1,
      userName: 'York Leng',
      userNameIcon: 'fa-user',
      email: 'yorkleng.k@gmail.com',
      accessType: 'View',
      action: this.actionButton,
    },
    {
      id: 2,
      userName: 'Billy Jackson',
      userNameIcon: 'fa-user',
      email: 'billy.j@abcgroup.com',
      accessType: 'Edit',
      action: this.actionButton,
    },
    {
      id: 3,
      userName: 'Cathy Seger',
      userNameIcon: 'fa-user',
      email: 'carlos.s@gmail.com',
      accessType: 'View',
      action: this.actionButton,
    },
    {
      id: 4,
      userName: "Georgia O' Keeffe",
      userNameIcon: 'fa-user',
      email: 'GOK@abc.com',
      accessType: 'View',
      action: this.actionButton,
    },
  ];
}
