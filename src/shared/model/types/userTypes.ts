interface IUser {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
  is_active: boolean;
  active_until_date?: string;
  user_permissions: string[];
}

export type UserApiResponse = IUser;
