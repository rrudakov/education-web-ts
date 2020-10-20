import { UserState } from '../reducer';

const adminRole = 'admin';
const moderatorRole = 'moderator';

export const isAdmin = (user: UserState): boolean =>
  user.roles.indexOf(adminRole) >= 0;

export const isModerator = (user: UserState): boolean =>
  user.roles.indexOf(moderatorRole) >= 0;
