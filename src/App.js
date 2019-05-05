import React from 'react';
import { Router } from '@reach/router';
import { Root, Routes } from 'react-static';
import { ThemeProvider } from 'emotion-theming';
import { GlobalStyle, GlobalFonts, Flex } from './design-system';
import {
  ActiveThemeProvider,
  useActiveThemeContext,
} from './components/ActiveTheme';
import Head from './components/Head';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import SiteContentFallback from './components/SiteContentFallback';
import RouterContainer from './components/RouterContainer';
import scrollHandler from './utils/scrollHandler';

scrollHandler();

function AppContent() {
  const title = 'Sam King—Designer';
  const { theme } = useActiveThemeContext();

  return (
    <Root>
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
      <ThemeProvider theme={theme}>
        <GlobalStyle {...theme.colors} />
        <Flex flexDirection="column" minHeight="100vh">
          <SiteHeader />
          <React.Suspense maxDuration={250} fallback={<SiteContentFallback />}>
            <RouterContainer>
              <Router primary={false}>
                <Routes path="*" />
              </Router>
            </RouterContainer>
            <SiteFooter />
          </React.Suspense>
        </Flex>
      </ThemeProvider>
    </Root>
  );
}

function App() {
  return (
    <React.Fragment>
      <GlobalFonts />
      <ActiveThemeProvider>
        <AppContent />
      </ActiveThemeProvider>
    </React.Fragment>
  );
}

export default App;
