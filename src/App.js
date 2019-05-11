import React from 'react';
import { Routes } from 'react-static';
import Router from './components/Router';
import { ActiveThemeProvider } from './components/ActiveTheme';
import Head from './components/Head';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import SiteContentFallback from './components/SiteContentFallback';
import { GlobalStyle, GlobalFonts, Flex } from './design-system';
import scrollHandler from './utils/scrollHandler';

scrollHandler();

function AppContent() {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <GlobalStyle />
      <SiteHeader />
      <React.Suspense maxDuration={250} fallback={<SiteContentFallback />}>
        <Router primary={false}>
          <Routes path="*" />
        </Router>
        <SiteFooter />
      </React.Suspense>
    </Flex>
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
