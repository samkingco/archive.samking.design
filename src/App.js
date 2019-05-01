import React from 'react';
import { Router } from '@reach/router';
import { Root, Routes } from 'react-static';
import { ThemeProvider } from 'emotion-theming';
import AutoScrollTop from './components/AutoScrollTop';
import { ActiveThemeProvider, useTheme } from './components/ActiveTheme';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  GlobalStyle,
  GlobalFonts,
  LoadingIndicator,
  Flex,
} from './design-system';

function AppContent() {
  const { theme } = useTheme();

  return (
    <Root>
      <AutoScrollTop />
      <ThemeProvider theme={theme}>
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
            <Footer />
          </React.Suspense>
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
