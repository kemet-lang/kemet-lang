import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig, type NavbarLogo} from '@docusaurus/theme-common';
import ThemedImage from '@theme/ThemedImage';
import type {Props} from '@theme/Logo';

export default function Logo(props: Props): ReactNode {
  const {
    siteConfig: {title},
  } = useDocusaurusContext();
  const {
    navbar: {title: navbarTitle, logo},
  } = useThemeConfig();

  const {imageClassName, titleClassName, ...propsRest} = props;
  const logoLink = useBaseUrl(logo?.href || '/');

  // If logo is not defined in config, use title as fallback
  const logoImageUrl = useBaseUrl(logo?.src || '');
  const logoImageUrlDark = useBaseUrl(logo?.srcDark || logoImageUrl);

  const renderLogoImage = () => {
    if (!logoImageUrl) {
      return null;
    }
    return (
      <ThemedImage
        sources={{
          light: logoImageUrl,
          dark: logoImageUrlDark || logoImageUrl,
        }}
        alt={logo?.alt || navbarTitle || title}
        className={imageClassName}
        {...(logo?.style && {style: logo.style})}
        {...(logo?.width && {width: logo.width})}
        {...(logo?.height && {height: logo.height})}
      />
    );
  };

  return (
    <Link
      to={logoLink}
      {...propsRest}
      {...(logo?.target && {target: logo.target})}>
      {renderLogoImage()}
      {navbarTitle != null && <b className={titleClassName}>{navbarTitle}</b>}
    </Link>
  );
}