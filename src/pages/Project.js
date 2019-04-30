import React from 'react';
import { useRouteData } from 'react-static';
import styled from '@emotion/styled';
import {
  Box,
  Title,
  Body,
  Figure,
  Headline,
  Link,
  Grid,
  Caption,
} from '../design-system';
import ContentNode from '../components/ContentNode';

const Wrapper = styled(Box)`
  ${Headline} + ${Body},
  ${Body} + ${Body} {
    margin-top: ${props => props.theme.space[2]}px
  }

  ${Body} + ${Headline} {
    margin-top: ${props => props.theme.space[4]}px
  }

  ${Figure} + ${Headline},
  ${Figure} + ${Body},
  ${Headline} + ${Figure},
  ${Body} + ${Figure} {
    margin-top: ${props => props.theme.space[5]}px
  }
`;

function Project() {
  const { title, intro, date, myRole, cover, content } = useRouteData();

  const textGridColumn = [
    '1 / span 8',
    '2 / span 7',
    '2 / span 6',
    '2 / span 5',
    '3 / span 4',
  ];

  return (
    <Wrapper as="main" role="main" px={[1, 2]} maxWidth="70em" mx="auto">
      <Grid as="article" gridTemplateColumns="repeat(8, 1fr)">
        <Box as="hgroup" gridColumn={textGridColumn} mb={5}>
          <Title mb={3}>{title}</Title>
          <Body mb={1}>{intro}</Body>
          <Caption color="textAlt">
            {date} • {myRole}
          </Caption>
        </Box>

        <Figure
          src={cover.src}
          alt={cover.alt}
          ratio={cover.ratio}
          gridColumn={['1 / span 8', null, '2 / span 7']}
          mr={[-1, -2]}
          ml={[-1, -2, 0]}
        />

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
      </Grid>
    </Wrapper>
  );
}

export default Project;
