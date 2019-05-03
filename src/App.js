import React from 'react';
import { Router } from '@reach/router';
import { Root, Routes, Head } from 'react-static';
import { ThemeProvider } from 'emotion-theming';
import {
  ActiveThemeProvider,
  useActiveThemeContext,
} from './components/ActiveTheme';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
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
  const title = 'Sam King—Designer';
  const { theme } = useActiveThemeContext();

  return (
    <Root>
      <Head titleTemplate={`%s | ${title}`} defaultTitle={title}>
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Sam King" />
        <meta name="twitter:site" content="@samkingco" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle {...theme.colors} />
        <GlobalFonts />

        <Flex flexDirection="column" minHeight="100vh">
          <SiteHeader />
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
