import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import { ErrorBoundary } from './ErrorBoundary';
import { CookieBanner } from '../Components/CookieBanner/CookieBanner';

import './styles/layout.css';
import { AppAside } from './AppAside';

function getLayoutClassName(withSidebar) {
  return withSidebar ? 'layout with-sidebar' : 'layout';
}
export const Layout = ({ withSidebar }) => {
  const [isAsideVisible, setIsAsideVisible] = useState(false);
  return (
    <ErrorBoundary>
      <div className={getLayoutClassName(withSidebar)}>
        <AppHeader handleVisible={() => setIsAsideVisible(!isAsideVisible)} />
        {withSidebar && <AppAside visible={isAsideVisible} />}
        <main>
          <Outlet />
        </main>
        <AppFooter />
        <CookieBanner />
      </div>
    </ErrorBoundary>
  );
};
