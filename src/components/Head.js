import React from 'react';
import { Head as StaticHead } from 'react-static';

function Head({
  title,
  socialTitle = title,
  description,
  socialDescription = description,
  socialImage,
  socialUrl,
  twitterCard = 'summary',
  siteName,
  handle,
  favicon,
  ...props
}) {
  return (
    <StaticHead {...props}>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}

      {socialTitle && <meta property="og:title" content={socialTitle} />}
      {socialDescription && (
        <meta property="og:description" content={socialDescription} />
      )}

      {socialImage && <meta property="og:image" content={socialImage} />}
      {socialUrl && <meta property="og:url" content={socialUrl} />}
      {twitterCard && <meta name="twitter:card" content={twitterCard} />}

      {siteName && <meta property="og:site_name" content={siteName} />}
      {handle && <meta name="twitter:site" content={handle} />}

      {favicon && <link rel="icon" type="image/x-icon" href="/favicon.ico" />}
    </StaticHead>
  );
}

export default Head;
