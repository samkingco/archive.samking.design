import React from 'react';

const ContentNode = ({ node, ...props }) => {
  const type = Array.isArray(node) ? node[0] : null;
  const children = Array.isArray(node) ? node[1] : node;
  const attributes = Array.isArray(node) ? node[2] : null;

  const nodeChildren = Array.isArray(children) ? (
    <React.Fragment>
      {children.map((node, index) => (
        <ContentNode key={index} node={node} {...props} />
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
      return props.h1 ? props.h1({ children: nodeChildren }) : null;
    case 'h2':
      return props.h2 ? props.h2({ children: nodeChildren }) : null;
    case 'h3':
      return props.h3 ? props.h3({ children: nodeChildren }) : null;
    case 'h4':
      return props.h4 ? props.h4({ children: nodeChildren }) : null;
    case 'h5':
      return props.h5 ? props.h5({ children: nodeChildren }) : null;
    case 'h6':
      return props.h6 ? props.h6({ children: nodeChildren }) : null;
    case 'p':
      return props.p ? props.p({ children: nodeChildren }) : null;
    case 'a':
      return attributes && props.a
        ? props.a({
            children: nodeChildren,
            href: attributes.href,
            title: attributes.title,
          })
        : null;
    case 'img':
      return attributes && props.img
        ? props.img({
            src: attributes.src,
            alt: attributes.alt,
            caption: attributes.caption,
            width: attributes.width,
            height: attributes.height,
            ratio: attributes.ratio,
          })
        : null;
    default:
      return null;
  }
};

export default ContentNode;
