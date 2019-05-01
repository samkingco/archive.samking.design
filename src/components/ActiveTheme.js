import React, { useState, useEffect, useContext } from 'react';
import theme from '../design-system/theme';

const ActiveThemeContext = React.createContext();
export const useTheme = () => useContext(ActiveThemeContext);

function getTheme(mode, defaultMode) {
  const colors =
    theme.colors.modes[mode] || theme.colors.modes[defaultMode] || theme.colors;

  return {
    ...theme,
    colors,
  };
}

export const ActiveThemeProvider = ({ defaultMode, ...props }) => {
  const modeNames = Object.keys(theme.colors.modes);
  const [mode, setMode] = useState(defaultMode);
  const activeTheme = getTheme(mode, defaultMode);

  const setTheme = mode => {
    setMode(modeNames.includes(mode) ? mode : defaultMode);
  };

  useEffect(() => {
    if (activeTheme.colors && activeTheme.colors.bg) {
      document.body.style.backgroundColor = activeTheme.colors.bg;
    }
  }, [activeTheme]);

  const value = {
    mode,
    modeNames,
    theme: activeTheme,
    setTheme,
  };

  return <ActiveThemeContext.Provider {...props} value={value} />;
};

ActiveThemeProvider.defaultProps = {
  defaultMode: 'light',
};
