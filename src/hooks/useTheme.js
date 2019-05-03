import { useEffect } from 'react';
import { useActiveThemeContext } from '../components/ActiveTheme';

function useTheme(themeMode, deps = []) {
  const { setTheme } = useActiveThemeContext();

  useEffect(() => {
    setTheme(themeMode);
  }, deps);
}

export default useTheme;
