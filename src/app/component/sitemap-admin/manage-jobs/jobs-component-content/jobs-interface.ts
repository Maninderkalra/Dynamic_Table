export interface IJobList {
  jobId: number;
  name: string;
  description: string;
  latitude: string;
  longitude: string;
  customerName: string;
  waNumber: string;
  projectManager: string;
  lastAccessed: string;
  jobContact: string;
  email: string;
  phone: string;
  createdOn: string;
  addedlink: string;
  address: string;
  logStatus: boolean;
  jobLogs: [LogEntity: IJobLogEntity];
}

export interface IJobLogEntity {
  date: string;
  action: string;
  user: string;
}
