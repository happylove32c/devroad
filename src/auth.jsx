import { createClient } from '@supabase/supabase-js';
import { UserContext } from './UserContext';

// Supabase Config

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jrbdjqslhqvgbweymfcz.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const Login = () => {
  const { setUser, setSettings } = useContext(UserContext);

  const handleGoogleLogin = async () => {
    const { user, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    if (user) {
      // Update context with user info
      setUser({
        name: user.user_metadata.full_name,
        email: user.email,
      });

      // Fetch or initialize settings
      const { data: settingsData } = await supabase
        .from('settings')
        .select('*')
        .eq('user_id', user.id)
        .single();

      setSettings(settingsData || { theme: 'light' }); // Default settings
    }

    if (error) console.error('Login Error:', error);
  };

  return <button onClick={handleGoogleLogin}>Login with Google</button>;
};