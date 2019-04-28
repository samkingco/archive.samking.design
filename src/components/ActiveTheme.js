import React, { useState, useEffect, useContext } from 'react';
import themes from '../design-system/theme';

const ActiveThemeContext = React.createContext();
export const useActiveTheme = () => useContext(ActiveThemeContext);

export const ActiveThemeProvider = ({ defaultThemeName, ...props }) => {
  const themeNames = Object.keys(themes);
  const [themeName, setThemeName] = useState(defaultThemeName);
  const theme = themes[themeName];

  const setActiveTheme = themeName => {
    if (themeNames.includes(themeName)) {
      setThemeName(themeName);
    } else {
      console.error('Invalid theme to switch to.');
    }
  };

  useEffect(() => {
    if (theme.colors && theme.colors.bg) {
      document.body.style.backgroundColor = theme.colors.bg;
    }
  }, [theme]);

  const value = {
    themes,
    themeNames,
    activeTheme: theme,
    activeThemeName: themeName,
    setActiveTheme,
  };

  return <ActiveThemeContext.Provider {...props} value={value} />;
};

ActiveThemeProvider.defaultProps = {
  defaultThemeName: 'light',
};
