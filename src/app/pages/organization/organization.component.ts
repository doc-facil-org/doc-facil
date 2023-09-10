import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

export interface Org {
  uid: string,
  name: string,
  created: number,
  members: Member[]
  subscription: string,
}

export interface Member {
  name: string,
  email: string,
  role: ROLE
}

export enum ROLE {
  'owner' = 'owner',
  'admin' = 'admin',
  'member' = 'member',
}

@Component({
  selector: 'app-organization',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatListModule, MatTableModule],
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent {

  org: Org = {
    uid: 'random',
    name: 'Test Org',
    created: 1694305214,
    members: [
      { name: 'user1', email: 'user1@test.de', role: ROLE.owner },
      { name: 'user2', email: 'user2@test.de', role: ROLE.admin },
      { name: 'user3', email: 'user3@test.de', role: ROLE.member },
      { name: 'user4', email: 'user4@test.de', role: ROLE.member },
    ],
    subscription: 'Enterprise',
  }

  displayedColumns: string[] = ['name', 'email', 'role'];
  dataSource = this.org.members;

}
