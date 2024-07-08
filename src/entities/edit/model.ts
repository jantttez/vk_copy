import { User } from '@entities/user';
import { useEffect } from 'react';

export interface EditForm {
  name: string;
  userName: string;
  imageURL: string;
  status: string;
  password?: string;
  email?: string;
}

export function useResetDefaultFormValue(reset: any, currentUser: User | null) {
  useEffect(() => {
    if (currentUser) {
      reset({
        name: currentUser.name,
        userName: currentUser.userName,
        imageURL: currentUser.userPhoto,
        status: currentUser.status,
        password: currentUser.password,
        email: currentUser.email,
      });
    }
  }, [currentUser]);
}
