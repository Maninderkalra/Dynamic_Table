export interface Permission {}

export class RolesPermission {
  permissionChckBox = [
    {
      header: 'View',
      id: 'view',
      checked: false,
      viewList: [
        {
          firstList: 'Digital Plan Room',
          id: 'viewDigital',
          checked: false,
          firstListData: [
            {
              name: 'File of a Site',
              value: 'filesOfSite',
              checked: false,
              tooltip: 'File of a Site',
            },
            {
              name: 'File of a SubSite',
              value: 'fileOfSubSite',
              checked: true,
              tooltip: 'File of a SubSite',
            },
            {
              name: 'File of a Job',
              value: 'fileOfJob',
              checked: false,
              tooltip: 'File of a Job',
            },
            {
              name: 'Folders of a Site',
              value: 'foldersOfSite',
              checked: false,
              tooltip: 'Folders of a Site',
            },
            {
              name: 'Folders of a SubSite',
              value: 'foldersOfSubSite',
              checked: false,
              tooltip: 'Folders of a SubSite',
            },
            {
              name: 'Folders of a Job',
              value: 'foldersOfJob',
              checked: false,
              tooltip: 'Folders of a Job',
            },
            {
              name: 'Only the shared files',
              value: 'OnlySharedFiles',
              checked: false,
              tooltip: 'Only the shared files',
            },
            {
              name: 'Only the shared folders',
              value: 'OnlySharedFolders',
              checked: false,
              tooltip: 'Only the shared folders',
            },
          ],
        },
        {
          firstList: 'Shared',
          id: 'viewShared',
          checked: false,
          firstListData: [
            {
              name: 'All the files of the Site',
              value: 'viewSharedFilesOfSite',
              checked: false,
              tooltip: 'All the files of the Site',
            },
            {
              name: 'All the files of the SubSite',
              value: 'viewSharedFileOfSubSite',
              checked: true,
              tooltip: 'All the files of the SubSite',
            },
            {
              name: 'All the files of the Job',
              value: 'viewSharedFileOfJob',
              checked: false,
              tooltip: 'All the files of the Job',
            },
            {
              name: 'All the folders of the Site',
              value: 'viewSharedFoldersOfSite',
              checked: false,
              tooltip: 'Folders of a Site',
            },
            {
              name: 'All the folders of a SubSite',
              value: 'viewSharedFoldersOfSubSite',
              checked: false,
              tooltip: 'All the folders of a SubSite',
            },
            {
              name: 'All the Folders of a Job',
              value: 'viewSharedFoldersOfJob',
              checked: false,
              tooltip: 'All the Folders of a Job',
            },
          ],
        },
      ],
    },
    {
      header: 'Edit',
      id: 'edit',
      checked: false,
      viewList: [
        {
          firstList: 'Digital Plan Room',
          id: 'editDigital',
          checked: false,
          firstListData: [
            {
              name: 'File of a Site',
              value: 'editFilesOfSite',
              checked: false,
              tooltip: 'File of a Site',
            },
            {
              name: 'File of a SubSite',
              value: 'editFileOfSubSite',
              checked: true,
              tooltip: 'File of a SubSite',
            },
            {
              name: 'File of a Job',
              value: 'editFileOfJob',
              checked: false,
              tooltip: 'File of a Job',
            },
            {
              name: 'Folders of a Site',
              value: 'editFoldersOfSite',
              checked: false,
              tooltip: 'Folders of a Site',
            },
            {
              name: 'Folders of a SubSite',
              value: 'editFoldersOfSubSite',
              checked: false,
              tooltip: 'Folders of a SubSite',
            },
            {
              name: 'Folders of a Job',
              value: 'editFoldersOfJob',
              checked: false,
              tooltip: 'Folders of a Job',
            },
            {
              name: 'Only the shared files',
              value: 'editOnlySharedFiles',
              checked: false,
              tooltip: 'Only the shared files',
            },
            {
              name: 'Only the shared folders',
              value: 'editOnlySharedFolders',
              checked: false,
              tooltip: 'Only the shared folders',
            },
          ],
        },
        {
          firstList: 'Shared',
          id: 'editShared',
          checked: false,
          firstListData: [
            {
              name: 'All the files of the Site',
              value: 'editSharedFilesOfSite',
              checked: false,
              tooltip: 'All the files of the Site',
            },
            {
              name: 'All the files of the SubSite',
              value: 'editSharedFileOfSubSite',
              checked: true,
              tooltip: 'All the files of the SubSite',
            },
            {
              name: 'All the files of the Job',
              value: 'editSharedFileOfJob',
              checked: false,
              tooltip: 'All the files of the Job',
            },
            {
              name: 'All the folders of the Site',
              value: 'editSharedFoldersOfSite',
              checked: false,
              tooltip: 'Folders of a Site',
            },
            {
              name: 'All the folders of a SubSite',
              value: 'editSharedFoldersOfSubSite',
              checked: false,
              tooltip: 'All the folders of a SubSite',
            },
            {
              name: 'All the Folders of a Job',
              value: 'editSharedFoldersOfJob',
              checked: false,
              tooltip: 'All the Folders of a Job',
            },
          ],
        },
      ],
    },
  ];
}
