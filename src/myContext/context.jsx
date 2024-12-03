import { createClient } from '@supabase/supabase-js';
import React, { createContext, useEffect, useState } from 'react';

const supabase = createClient(
  "https://jrbdjqslhqvgbweymfcz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyYmRqcXNsaHF2Z2J3ZXltZmN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxNDE4NTMsImV4cCI6MjA0ODcxNzg1M30.peVTMjA8RH27jJWfeiw63eQcYGWqaLgi3oJdt0nvF-w"
);

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Error fetching session:", error);
        return;
      }

      if (data?.session?.user) {
        const userDetails = data.session.user;

        // Extract the user's name from metadata or other available fields
        const userName =
          userDetails.user_metadata?.full_name || userDetails.email;

        setUser({ name: userName, ...userDetails });
        // console.log("User fetched:", { name: userName, ...userDetails });
      }
    };

    fetchSession();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
