export interface Client {
  name: string;
  cnpj: string;
  password: string;
  city: CITY_ENUM;
  createdBy: string;
  orgUid: string;
  jobStatus: ClientJobStatus;
}

export interface ClientJobStatus {
  status: CLIENT_STATUS_ENUM;
  lastUpdated: Date;
}

export enum CLIENT_STATUS_ENUM {
  IDLE = 'idle',
  QUEUED = 'queued',
  RUNNING = 'running',
  ERROR = 'error',
  SUCCESS = 'success'
}

export enum CITY_ENUM {
  CANOAS = 'Canoas',
  PORTO_ALEGRE = 'Porto Alegre'
}
