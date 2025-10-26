// src/theme/Navbar/index.tsx
import React, { JSX } from 'react';
import Navbar from '@theme-original/Navbar';
import type NavbarType from '@theme/Navbar';
import type {WrapperProps} from '@docusaurus/types';
import { useLocation } from '@docusaurus/router';

type Props = WrapperProps<typeof NavbarType>;

export default function NavbarWrapper(props: Props): JSX.Element {
  const location = useLocation();
  const isDocsPath = location.pathname.startsWith('/docs') || location.pathname.startsWith('/ar/docs') || location.pathname.startsWith('/en/docs');
  const isHomePage = location.pathname === '/' || location.pathname === '/ar' || location.pathname === '/en';

  return (
    <>
      <style>
        {`
          ${!isDocsPath ? `
            .navbar__item[class*="docsVersion"] {
              display: none !important;
            }
          ` : ''}

          ${!isHomePage ? `
            .main-wrapper {
              padding-top: 60px !important;
            }
            main.col {
              padding-top: 0 !important;
            }
          ` : ''}
        `}
      </style>
      <Navbar {...props} />
    </>
  );
}