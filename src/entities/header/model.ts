import { Friend } from '@entities/friend';

export interface Person extends Friend {
  friends: string[];
}
