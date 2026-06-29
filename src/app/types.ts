export type ScreenId =
  | 'splash'
  | 'welcome'
  | 'uitleg'
  | 'contacten'
  | 'familie'
  | 'instellingen'
  | 'dashboard'
  | 'simulatie'
  | 'notificatie'
  | 'familie-dashboard'
  | 'bericht'
  | 'details';

export interface Contact {
  id: number;
  name: string;
  initials: string;
  bgColor: string;
  textColor: string;
  checked: boolean;
}

export interface FamilyMember {
  id: number;
  name: string;
  relation: string;
  active: boolean;
}