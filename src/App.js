import React from 'react';
import { Router } from '@reach/router';
import { Root, Routes } from 'react-static';
import { ThemeProvider } from 'emotion-theming';
import { ActiveThemeProvider, useActiveTheme } from './components/ActiveTheme';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  GlobalStyle,
  GlobalFonts,
  LoadingIndicator,
  Flex,
} from './design-system';
import scrollHandler from './utils/scrollHandler';

scrollHandler();

function AppContent() {
  const { activeTheme } = useActiveTheme();

  return (
    <Root>
      <ThemeProvider theme={activeTheme}>
        <GlobalStyle />
        <GlobalFonts />
        <Flex flexDirection="column" minHeight="100vh">
          <Header />
          <React.Suspense
            maxDuration={250}
            fallback={
              <Flex
                flex="1"
                width="100%"
                justifyContent="center"
                alignItems="center"
              >
                <LoadingIndicator />
              </Flex>
            }
          >
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
          <Footer />
        </Flex>
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
