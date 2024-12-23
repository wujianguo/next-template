import { UserDto } from "../dto/user.dto"
import { createContext, useContext } from "react";
import { useRouter } from 'next/navigation'
import { defaultUser } from "../services";

export const CurrentUserContext = createContext<{ user: UserDto | null, setUser: ( user: UserDto | null ) => void }>({user: null, setUser: (user: UserDto | null) => { console.log(user)} });

export function useCurrentUser() {
  return useContext(CurrentUserContext);
}

export function useCurrentUserOrRedirect(): UserDto {
  const { user } = useContext(CurrentUserContext);
  const router = useRouter();
  if (!user) {
    router.push('/auth/login');
    return defaultUser();
  }
  return user;
}

export function useCurrentUserOrThrow(): UserDto {
  const { user } = useContext(CurrentUserContext);
  if (!user) {
    throw new Error('User is not logged in');
  }
  return user;
}

export function useCurrentUserOrNull() {
  const { user } = useContext(CurrentUserContext);
  return user;
}
