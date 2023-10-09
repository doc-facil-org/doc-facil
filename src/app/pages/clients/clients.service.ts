import { Injectable } from '@angular/core';
import {concatMap, interval, map, Observable, of, throwError} from "rxjs";
import { CITY_ENUM, Client, CLIENT_STATUS_ENUM } from "./clients-types";

export interface CityClients {
  total: number;
  canoas: Client[];
  poa: Client[];
}

@Injectable()
export class ClientsService {

  mockedClients: Client[] = [
    {
      name: 'JULIA CRISTINA',
      cnpj: 'xx.xxx.xxx/xxxx-xx',
      password: '123',
      city: CITY_ENUM.PORTO_ALEGRE,
      createdBy: 'user1',
      orgUid: 'p9fw9ejf12-0ej',
      position: 1,
      jobStatus: {
        status: CLIENT_STATUS_ENUM.IDLE,
        lastUpdated: new Date()
      },
    },
    {
      name: 'BERND DA SILVA',
      cnpj: 'xx.xxx.xxx/xxxx-xx',
      password: '123',
      city: CITY_ENUM.PORTO_ALEGRE,
      createdBy: 'user1',
      orgUid: 'p9fw9ejf12-0ej',
      position: 2,
      jobStatus: {
        status: CLIENT_STATUS_ENUM.QUEUED,
        lastUpdated: new Date()
      },
    },
    {
      name: 'ALEXANDRE CARVALHO',
      cnpj: 'xx.xxx.xxx/xxxx-xx',
      password: '123',
      city: CITY_ENUM.PORTO_ALEGRE,
      createdBy: 'user1',
      orgUid: 'p9fw9ejf12-0ej',
      position: 3,
      jobStatus: {
        status: CLIENT_STATUS_ENUM.ERROR,
        lastUpdated: new Date()
      },
    },
    {
      name: 'RODRIGO PNTICELLI',
      cnpj: 'xx.xxx.xxx/xxxx-xx',
      password: '123',
      city: CITY_ENUM.CANOAS,
      createdBy: 'user1',
      orgUid: 'p9fw9ejf12-0ej',
      position: 1,
      jobStatus: {
        status: CLIENT_STATUS_ENUM.SUCCESS,
        lastUpdated: new Date()
      },
    },
    {
      name: 'MARIA MIRANDA',
      cnpj: 'xx.xxx.xxx/xxxx-xx',
      password: '123',
      city: CITY_ENUM.CANOAS,
      createdBy: 'user1',
      orgUid: 'p9fw9ejf12-0ej',
      position: 2,
      jobStatus: {
        status: CLIENT_STATUS_ENUM.RUNNING,
        lastUpdated: new Date()
      },
    },
  ]

  constructor() { }

  getClients(): Observable<CityClients> {
    //TODO: REMOVE AFTER BACKEND READY

    //with clients
    const obs$ = interval(2000).pipe(
      concatMap(_ => of(this.mockedClients))
    )

    //empty clients
    // const obs$ = interval(2000).pipe(
    //   concatMap(_ => of([] as Client[]))
    // )

    return obs$.pipe(map((clients) => {
      return {
        total: clients.length,
        poa: clients.filter((c) => c.city === CITY_ENUM.PORTO_ALEGRE),
        canoas: clients.filter((c) => c.city === CITY_ENUM.CANOAS)
      }
    }));
  }

  createClient(client: { name: string, cnpj: string, password: string }) {
    // TODO: create client
    // return interval(2000).pipe(map(() => {throw new Error('error') })); //with error
    return interval(2000);
  }

  requestClientsFiles(clients: Client[], month: number) {
    // TODO: request files
    // return interval(2000).pipe(map(() => {throw new Error('error') })); //with error
    return interval(2000);
  }
}
