import React from 'react';
import { Headline, Body, Figure } from '../design-system';

const ContentNode = ({ node }) => {
  const type = Array.isArray(node) ? node[0] : null;
  const children = Array.isArray(node) ? node[1] : node;
  const attributes = Array.isArray(node) ? node[2] : null;

  const nodeChildren = Array.isArray(children) ? (
    <React.Fragment>
      {children.map((node, index) => (
        <ContentNode key={index} node={node} />
      ))}
    </React.Fragment>
  ) : (
    children
  );

  if (!type) {
    return <React.Fragment>{nodeChildren}</React.Fragment>;
  }

  switch (type) {
    case 'h1':
      return <Headline as="h1">{nodeChildren}</Headline>;
    case 'h2':
      return <Headline as="h2">{nodeChildren}</Headline>;
    case 'h3':
      return <Headline as="h3">{nodeChildren}</Headline>;
    case 'h4':
      return <Headline as="h4">{nodeChildren}</Headline>;
    case 'h5':
      return <Headline as="h5">{nodeChildren}</Headline>;
    case 'h6':
      return <Headline as="h6">{nodeChildren}</Headline>;
    case 'p':
      return <Body>{nodeChildren}</Body>;
    case 'a':
      return attributes ? <a href={attributes.href}>{nodeChildren}</a> : null;
    case 'img':
      return attributes ? (
        <Figure
          src={attributes.src}
          alt={attributes.alt}
          caption={attributes.caption}
          ratio={attributes.ratio}
        />
      ) : null;
    default:
      return null;
  }
};

export default ContentNode;
