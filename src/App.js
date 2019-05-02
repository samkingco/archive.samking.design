import React from 'react';
import { Router } from '@reach/router';
import { Root, Routes } from 'react-static';
import { ThemeProvider } from 'emotion-theming';
import { ActiveThemeProvider, useTheme } from './components/ActiveTheme';
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

const PageContent = ({ children }) => (
  <Flex flex="1" width="100%" justifyContent="center" alignItems="center">
    {children}
  </Flex>
);

function AppContent() {
  const { theme } = useTheme();

  return (
    <Root>
      <ThemeProvider theme={theme}>
        <GlobalStyle {...theme.colors} />
        <GlobalFonts />

        <Flex flexDirection="column" minHeight="100vh">
          <Header />
          <React.Suspense
            maxDuration={250}
            fallback={
              <PageContent>
                <LoadingIndicator />
              </PageContent>
            }
          >
            <PageContent>
              <Router primary={false}>
                <Routes path="*" />
              </Router>
            </PageContent>
            <Footer />
          </React.Suspense>
        </Flex>
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
