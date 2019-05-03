import React from 'react';
import { Router } from '@reach/router';
import { Root, Routes, Head } from 'react-static';
import { ThemeProvider } from 'emotion-theming';
import { GlobalStyle, GlobalFonts, Flex } from './design-system';
import {
  ActiveThemeProvider,
  useActiveThemeContext,
} from './components/ActiveTheme';
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
      <Head titleTemplate={`%s | ${title}`} defaultTitle={title}>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta property="og:image" content="https://samking.design/logo.png" />
        <meta property="og:site_name" content="Sam King" />
        <meta name="twitter:site" content="@samkingco" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle {...theme.colors} />
        <GlobalFonts />
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
    <ActiveThemeProvider>
      <AppContent />
    </ActiveThemeProvider>
  );
}

export default App;
