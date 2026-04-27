export interface DailyBoard {
  id: string;
  board_date: string;
  dinner_team: 'A' | 'B';
  clearing_team: 'A' | 'B';
  dinner_plan: string;
  dinner_prep_done: boolean;
  dinner_cook_done: boolean;
  dinner_serve_done: boolean;
  dishwasher_emptied_done: boolean;
  dishwasher_loaded_done: boolean;
  kitchen_reset_done: boolean;
  mum_school_lunch_done: boolean;
  dinner_prep_by: string;
  dinner_cook_by: string;
  dinner_serve_by: string;
  dishwasher_emptied_by: string;
  dishwasher_loaded_by: string;
  kitchen_reset_by: string;
  mum_school_lunch_by: string;
  updated_at: string;
}

export interface AppSettings {
  id: string;
  school_mode_enabled: boolean;
  base_team_a_dinner_date: string;
  created_at: string;
  updated_at: string;
}

export interface TeamMember {
  name: string;
  nickname: string;
  color: string;
  bgClass: string;
  textClass: string;
  ringClass: string;
}

export const TEAM_A_MEMBERS: TeamMember[] = [
  {
    name: 'Dimuth',
    nickname: 'Dad',
    color: '#d97706',
    bgClass: 'bg-amber-100',
    textClass: 'text-amber-800',
    ringClass: 'ring-amber-300',
  },
  {
    name: 'Yuvin',
    nickname: 'Yuvin',
    color: '#ea580c',
    bgClass: 'bg-orange-100',
    textClass: 'text-orange-800',
    ringClass: 'ring-orange-300',
  },
  {
    name: 'Shenara',
    nickname: 'Shenara',
    color: '#e11d48',
    bgClass: 'bg-rose-100',
    textClass: 'text-rose-800',
    ringClass: 'ring-rose-300',
  },
];

export const TEAM_B_MEMBERS: TeamMember[] = [
  {
    name: 'Nishadi',
    nickname: 'Mum',
    color: '#7c3aed',
    bgClass: 'bg-violet-100',
    textClass: 'text-violet-800',
    ringClass: 'ring-violet-300',
  },
  {
    name: 'Senuk',
    nickname: 'Senuk',
    color: '#2563eb',
    bgClass: 'bg-blue-100',
    textClass: 'text-blue-800',
    ringClass: 'ring-blue-300',
  },
  {
    name: 'Yeshara',
    nickname: 'Yeshara',
    color: '#0891b2',
    bgClass: 'bg-cyan-100',
    textClass: 'text-cyan-800',
    ringClass: 'ring-cyan-300',
  },
];

export type Team = 'A' | 'B';
