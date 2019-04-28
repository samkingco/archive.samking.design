import React from 'react';
import { Router } from '@reach/router';
import { Root, Routes } from 'react-static';
import { ThemeProvider } from 'emotion-theming';
import { ActiveThemeProvider, useActiveTheme } from './components/ActiveTheme';

function AppContent() {
  const { activeTheme } = useActiveTheme();

  return (
    <Root>
      <ThemeProvider theme={activeTheme}>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </ThemeProvider>
    </Root>
  );
}

function App() {
  return (
    <ActiveThemeProvider defaultThemeName="light">
      <AppContent />
    </ActiveThemeProvider>
  );
}

export default App;
