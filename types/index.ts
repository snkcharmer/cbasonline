import { Icons } from "@/components/icons";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export type Grades = {
  gradeid: number;
  fullname: string;
  trainingid: string;
  submodid: string;
  code: string;
  trid: string;
  bplace: string;
  sex: string;
  bdate: string;
  rank: string | null;
};

export interface ApiResponse {
  records: Grades[];
}

export type importGrades = {
  bdate: string;
  bplace: string;
  code: number;
  fullname: string;
  gradeid: number;
  rank: string | null;
  sex: string;
  submodid: number;
  trainingid: number;
  trid: number;
};

export interface Trainee {
  trid: string;
  lastname: string;
  firstname: string;
  middlename: string;
  extension: string;
  bdate: string;
  sex: string;
  license: string;
  rank: string;
}

export interface TrainingRecord {
  id: number;
  code: number;
  trid: number;
  trainingid: number;
  submodid: number;
  exam1: number;
  item1: number;
  rate1: number;
  date1: string;
  exam2: number;
  item2: number;
  rate2: number;
  date2: string;
  exam3: number;
  item3: number;
  rate3: number;
  date3: string;
  fgrade: number;
  count: number;
  locked: number;
  created_at: string;
  modified_at: string;
  trainee: Trainee;
}

export interface ApiTrainee {
  trainee: Trainee[];
}

export type TExamCode = {
  code: number;
  submodid: number;
};

export type Questions = {
  id: number;
  item: string;
  opt1: string;
  opt2: string;
  opt3: string;
  opt4: string;
  banner: string;
  module_id: number;
};

export type Module = {
  dscrptn: string;
  modcode: number;
  module: string;
  id: number;
  duration: number;
};

export type Assessment = {
  module: Module;
  questions: Questions[];
};

export type CorrectAnswer = {
  id: number;
  answer: string;
};
