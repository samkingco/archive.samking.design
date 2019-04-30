import React from 'react';
import { Router } from '@reach/router';
import { Root, Routes } from 'react-static';
import { ThemeProvider } from 'emotion-theming';
import { ActiveThemeProvider, useActiveTheme } from './components/ActiveTheme';
import Header from './components/Header';
import Footer from './components/Footer';
import { GlobalStyle, GlobalFonts } from './design-system';
import scrollHandler from './utils/scrollHandler';

scrollHandler();

function AppContent() {
  const { activeTheme } = useActiveTheme();

  return (
    <Root>
      <ThemeProvider theme={activeTheme}>
        <GlobalStyle />
        <GlobalFonts />
        <Header />
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
        <Footer />
      </ThemeProvider>
    </Root>
  );
}

function App() {
  return (
    <ActiveThemeProvider defaultThemeName="dark">
      <AppContent />
    </ActiveThemeProvider>
  );
}

export default App;
