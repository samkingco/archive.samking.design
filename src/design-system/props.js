import * as system from 'styled-system';
export { default as css } from '@styled-system/css';
export {
  default as shouldForwardProp,
} from '@styled-system/should-forward-prop';

export const COMMON_PROPS = composeList(['color', 'space']);

export const BORDER_PROPS = composeList(['borders', 'borderColor']);

export const TYPOGRAPHY_PROPS = composeList([
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'lineHeight',
  'textAlign',
]);

export const LAYOUT_PROPS = composeList([
  'display',
  'size',
  'width',
  'height',
  'minWidth',
  'minHeight',
  'maxWidth',
  'maxHeight',
  'overflow',
  'verticalAlign',
  'opacity',
]);

export const POSITION_PROPS = composeList([
  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',
]);

export const FLEX_CONTAINER_PROPS = composeList([
  'flexBasis',
  'flexDirection',
  'flexWrap',
  'alignContent',
  'alignItems',
  'justifyContent',
  'justifyItems',
]);

export const FLEX_ITEM_PROPS = composeList([
  'flex',
  'justifySelf',
  'alignSelf',
  'order',
]);

export const GRID_CONTAINER_PROPS = composeList([
  'gridGap',
  'gridRowGap',
  'gridColumnGap',
  'gridAutoFlow',
  'gridAutoRows',
  'gridAutoColumns',
  'gridTemplateRows',
  'gridTemplateColumns',
  'gridTemplateAreas',
]);

export const GRID_ITEM_PROPS = composeList([
  'gridColumn',
  'gridRow',
  'gridArea',
]);

export const BASE_ELEMENT_PROPS = system.compose(
  COMMON_PROPS,
  BORDER_PROPS,
  LAYOUT_PROPS,
  POSITION_PROPS,
  FLEX_ITEM_PROPS,
  GRID_ITEM_PROPS,
);

function composeList(list) {
  return system.compose(...list.map(name => system[name]));
}
