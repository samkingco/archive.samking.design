import React from 'react';
import { Routes } from 'react-static';
import { ThemeProvider } from 'emotion-theming';
import Router from './components/Router';
import { GlobalStyle, GlobalFonts, Flex } from './design-system';
import {
  ActiveThemeProvider,
  useActiveThemeContext,
} from './components/ActiveTheme';
import Head from './components/Head';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import SiteContentFallback from './components/SiteContentFallback';
import scrollHandler from './utils/scrollHandler';

scrollHandler();

function AppContent() {
  const { theme } = useActiveThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle {...theme.colors} />
      <Flex flexDirection="column" minHeight="100vh">
        <SiteHeader />
        <React.Suspense maxDuration={250} fallback={<SiteContentFallback />}>
          <Router primary={false}>
            <Routes path="*" />
          </Router>
          <SiteFooter />
        </React.Suspense>
      </Flex>
    </ThemeProvider>
  );
}

function App() {
  const title = 'Sam King—Designer';

  return (
    <React.Fragment>
      <Head
        titleTemplate={`%s | ${title}`}
        defaultTitle={title}
        socialTitle={title}
        socialImage="https://samking.design/logo.png"
        socialUrl="https://samking.design"
        siteName="Sam King"
        handle="@samkingco"
        favicon="/favicon.ico"
      />

      <GlobalFonts />
      <ActiveThemeProvider>
        <AppContent />
      </ActiveThemeProvider>
    </React.Fragment>
  );
}

export default App;
