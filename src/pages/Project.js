import React, { useEffect } from 'react';
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
import { useTheme } from '../components/ActiveTheme';
import ContentNode from '../components/ContentNode';
import RelatedProjects from '../components/RelatedProjects';

const ProjectContent = styled(Grid)`
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

function Project() {
  const {
    slug,
    title,
    intro,
    date,
    roles,
    link,
    cover,
    content,
    relatedProjects,
  } = useRouteData();

  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(slug);
  }, [slug]);

  const textGridColumn = [
    '1 / span 8',
    '2 / span 7',
    '2 / span 6',
    '2 / span 5',
    '3 / span 4',
  ];

  return (
    <Box
      as="main"
      role="main"
      px={[1, 2]}
      py={[5, 6]}
      maxWidth="70em"
      mx="auto"
    >
      <Grid as="article" gridTemplateColumns="repeat(8, 1fr)">
        <Box as="hgroup" gridColumn={textGridColumn} mb={5}>
          <Title mb={2}>{title}</Title>
          <Body mb={3}>{intro}</Body>
          <Caption as="p" color="textAlt">
            <Box display={['block', null, 'inline-block']} mr={3}>
              {date}
            </Box>
            <Box display={['block', null, 'inline-block']} mr={3}>
              {roles.map(role => `${role}`).join(', ')}
            </Box>
            {link && (
              <Box display={['block', null, 'inline-block']}>
                <Link to={link.url}>{link.text}</Link>
              </Box>
            )}
          </Caption>
        </Box>

        <Figure
          src={cover.src}
          alt={cover.alt}
          ratio={cover.ratio}
          gridColumn={['1 / span 8', null, '2 / span 7']}
          mr={[-1, -2]}
          ml={[-1, -2, 0]}
          mb={5}
        />

        <ProjectContent
          gridColumn="1 / span 8"
          gridTemplateColumns="repeat(8, 1fr)"
        >
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
        </ProjectContent>

        <RelatedProjects
          projects={relatedProjects}
          as="footer"
          gridColumn="1 / span 8"
          mt={5}
        />
      </Grid>
    </Box>
  );
}

export default Project;
