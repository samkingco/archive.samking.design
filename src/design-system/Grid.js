import styled from '@emotion/styled';
import {
  gridGap,
  gridRowGap,
  gridColumnGap,
  gridAutoFlow,
  gridAutoRows,
  gridAutoColumns,
  gridTemplateRows,
  gridTemplateColumns,
  gridTemplateAreas,
} from 'styled-system';
import BaseElement from './BaseElement';

const Grid = styled(BaseElement)(
  {
    display: 'grid',
  },
  gridGap,
  gridRowGap,
  gridColumnGap,
  gridAutoFlow,
  gridAutoRows,
  gridAutoColumns,
  gridTemplateRows,
  gridTemplateColumns,
  gridTemplateAreas,
);

Grid.displayName = 'Grid';

export default Grid;
