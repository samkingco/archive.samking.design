import React from 'react';
import styled from '@emotion/styled';
import { Grid, Headline, Body, Link, Figure } from '../design-system';
import ContentNode from '../components/ContentNode';

const Container = styled(Grid)`
  ${Headline} + ${Body},
  ${Body} + ${Body} {
    margin-top: ${props => props.theme.space[2]}px
  }

  ${Body} + ${Headline},
  ${Figure} + ${Figure} {
    margin-top: ${props => props.theme.space[4]}px
  }

  ${Figure} + ${Headline},
  ${Figure} + ${Body},
  ${Headline} + ${Figure},
  ${Body} + ${Figure} {
    margin-top: ${props => props.theme.space[5]}px
  }
`;

function ProjectPageContent({ content, ...props }) {
  const textGridColumn = [
    '1 / span 8',
    '2 / span 7',
    '2 / span 6',
    '2 / span 5',
    '3 / span 4',
  ];

  return (
    <Container gridTemplateColumns="repeat(8, 1fr)" {...props}>
      {content.map((node, index) => (
        <ContentNode
          key={`${node.type}.${index}`}
          node={node}
          h1={({ children }) => (
            <Headline as="h1" gridColumn={textGridColumn}>
              {children}
            </Headline>
          )}
          h2={({ children }) => (
            <Headline as="h2" gridColumn={textGridColumn}>
              {children}
            </Headline>
          )}
          h3={({ children }) => (
            <Headline as="h3" gridColumn={textGridColumn}>
              {children}
            </Headline>
          )}
          p={({ children }) => (
            <Body gridColumn={textGridColumn}>{children}</Body>
          )}
          a={({ children, href }) => <Link to={href}>{children}</Link>}
          img={({ src, alt, caption, ratio }) => (
            <Figure
              src={src}
              alt={alt}
              caption={caption}
              ratio={ratio}
              gridColumn={[
                '1 / span 8',
                null,
                '2 / span 7',
                null,
                '2 / span 6',
              ]}
            />
          )}
        />
      ))}
    </Container>
  );
}

export default ProjectPageContent;
