import styled from '@emotion/styled';
import {
  shouldForwardProp,
  BASE_ELEMENT_PROPS,
  FLEX_CONTAINER_PROPS,
  GRID_CONTAINER_PROPS,
} from './props';

export const Box = styled('div', { shouldForwardProp })(BASE_ELEMENT_PROPS);

Box.displayName = 'Box';

export const Flex = styled('div', { shouldForwardProp })(
  BASE_ELEMENT_PROPS,
  FLEX_CONTAINER_PROPS,
  {
    display: 'flex',
  },
);

Flex.displayName = 'Flex';

export const Grid = styled('div', { shouldForwardProp })(
  BASE_ELEMENT_PROPS,
  GRID_CONTAINER_PROPS,
  {
    display: 'grid',
  },
);

Grid.displayName = 'Grid';
