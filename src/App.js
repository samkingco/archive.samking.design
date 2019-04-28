import React from 'react';
import { Router } from '@reach/router';
import { Root, Routes } from 'react-static';

function App() {
  return (
    <Root>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  );
}

export default App;
