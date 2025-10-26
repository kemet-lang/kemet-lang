import React, {type ReactNode} from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {ErrorCauseBoundary} from '@docusaurus/theme-common/internal';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type {JSX} from 'react';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import Logo from '@theme/Logo';
import NavbarItem from '@theme/NavbarItem';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import styles from './styles.module.css';
import clsx from 'clsx';

const labels = {
  ar: {
    docs: 'الوثائق',
    blog: 'المُدونة',
    sponsors: 'الرُعاة',
    about: 'من أنا ؟',
  },
  en: {
    docs: 'Docs',
    blog: 'Blog',
    sponsors: 'Sponsors',
    about: 'About',
  },
};

function useNavbarItems() {
  const {i18n} = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;

  // Get navbar items from theme config
  const {navbar: {items}} = useThemeConfig();
  return items;
  // Map the items and replace labels based on current locale
  const localizedItems = items.map((item: any) => {
    if (item.label) {
      if (item.label === 'theme.navbar.docs') {
        return {...item, label: labels[currentLocale].docs};
      }
      if (item.label === 'theme.navbar.blog') {
        return {...item, label: labels[currentLocale].blog};
      }
      if (item.label === 'theme.navbar.sponsors') {
        return {...item, label: labels[currentLocale].sponsors};
      }
      if (item.label === 'theme.navbar.about') {
        return {...item, label: labels[currentLocale].about};
      }
    }
    return item;
  });

  return localizedItems;
}

function NavbarContent(): JSX.Element {
  const mobileSidebar = useNavbarMobileSidebar();

  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);

  return (
    <div className="navbar__inner">
      <div className="navbar__items">
        <div className="navbar__brand">
          <Logo />
        </div>
        {leftItems.map((item, i) => (
          <ErrorCauseBoundary
            key={i}
            onError={(error) =>
              new Error(
                `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) is correct:
${JSON.stringify(item, null, 2)}`,
                {cause: error},
              )
            }>
            <NavbarItem {...item} />
          </ErrorCauseBoundary>
        ))}
      </div>
      <div className="navbar__items navbar__items--right">
        {rightItems.map((item, i) => (
          <ErrorCauseBoundary
            key={i}
            onError={(error) =>
              new Error(
                `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) is correct:
${JSON.stringify(item, null, 2)}`,
                {cause: error},
              )
            }>
            <NavbarItem {...item} />
          </ErrorCauseBoundary>
        ))}
        {!mobileSidebar.disabled && (
          <div className="navbar__item">
            <NavbarMobileSidebarToggle />
          </div>
        )}
      </div>
    </div>
  );
}

export default NavbarContent;