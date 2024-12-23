'use client';

import { ThemeProvider } from "@/components/theme/theme-provider";
import { HTTPError } from "@/lib/exception";
import { UserDto } from "@/module/user/dto/user.dto";
import { CurrentUserContext } from "@/module/user/hooks/use-current-user";
import { defaultUser, fetchCurrentUser, getUserFromLocal } from "@/module/user/services";
import { ReactNode, useEffect, useState } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<UserDto | null>(defaultUser());
  useEffect(() => {
    const user = getUserFromLocal();
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
      return;
    }
    fetchCurrentUser().then((user) => {
      setCurrentUser(user);
    }).catch((error: HTTPError) => {
      console.error('fetch current user error ', error);
      if (error.statusCode === 401) {
        setCurrentUser(null);
        return;
      }
    });
  }, []);
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CurrentUserContext.Provider value={{user: currentUser, setUser: setCurrentUser}}>
        {children}
      </CurrentUserContext.Provider>
    </ThemeProvider>
  );
}
