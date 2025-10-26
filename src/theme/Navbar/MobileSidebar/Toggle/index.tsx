import React, { JSX } from 'react';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';

export default function NavbarMobileSidebarToggle(): JSX.Element {
  const mobileSidebar = useNavbarMobileSidebar();

  return (
    <button
      onClick={mobileSidebar.toggle}
      onKeyDown={mobileSidebar.toggle}
      aria-label={translate({
        id: 'theme.docs.sidebar.toggleSidebarButtonAriaLabel',
        message: 'Toggle navigation bar',
        description:
          'The ARIA label for hamburger menu button of mobile navigation',
      })}
      aria-expanded={mobileSidebar.shown}
      className="navbar__toggle"
      type="button">
      <span className="hamburger">
        <span className="hamburger__top"></span>
        <span className="hamburger__middle"></span>
        <span className="hamburger__bottom"></span>
      </span>
    </button>
  );
}