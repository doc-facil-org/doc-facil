import { Injectable } from '@angular/core';
import {concatMap, interval, Observable, of} from "rxjs";
import {Org, ROLE} from "./organization-types";

@Injectable()
export class OrganizationService {

  //TODO REMOVE AFTER BACKEND READY
  private mockedOrg = {
    uid: 'random',
    name: 'Test Org',
    created: 1694305214,
    members: [
      { name: 'user1', email: 'user1@test.de', role: ROLE.OWNER },
      { name: 'user2', email: 'user2@test.de', role: ROLE.ADMIN },
      { name: 'user3', email: 'user3@test.de', role: ROLE.MEMBER },
      { name: 'user4', email: 'user4@test.de', role: ROLE.MEMBER },
    ],
    subscription: 'Enterprise',
  }

  constructor() { }

  getOrganization(): Observable<Org> {
    //TODO: GET FROM BACKEND WHEN READY
    return interval(2000).pipe(
      concatMap(_ => of<Org>(this.mockedOrg))
    );
  }


}
