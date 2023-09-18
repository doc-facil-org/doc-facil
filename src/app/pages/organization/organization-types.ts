export interface Org {
  uid: string;
  name: string;
  created: number;
  members: OrgMember[];
  subscription: string;
}

export interface OrgMember {
  name: string;
  email: string;
  role: ROLE;
}

export enum ROLE {
  OWNER = 'owner',
  ADMIN = 'admin',
  MEMBER = 'member'
}
