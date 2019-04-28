import TextWoff from './Text.woff';
import TextWoff2 from './Text.woff2';
import TextBoldWoff from './TextBold.woff';
import TextBoldWoff2 from './TextBold.woff2';
import TextAltWoff from './TextAlt.woff';
import TextAltWoff2 from './TextAlt.woff2';

const generateFontFace = (
  name,
  srcs,
  fontWeight = 'normal',
  fontStyle = 'normal',
) => `
  @font-face {
    font-family: "${name}";
    src: ${srcs
      .map(src => `url('${src.url}') format('${src.format}')`)
      .join(',')};
    font-style: ${fontStyle};
    font-weight: ${fontWeight};
  }
`;

const fontFace = `
  ${generateFontFace(
    'Text',
    [{ url: TextWoff, format: 'woff' }, { url: TextWoff2, format: 'woff2' }],
    'normal',
  )}
  
  ${generateFontFace(
    'Text',
    [
      { url: TextBoldWoff, format: 'woff' },
      { url: TextBoldWoff2, format: 'woff2' },
    ],
    'bold',
  )}
  
  ${generateFontFace(
    'TextAlt',
    [
      { url: TextAltWoff, format: 'woff' },
      { url: TextAltWoff2, format: 'woff2' },
    ],
    'bold',
  )}
`;

export default fontFace;
