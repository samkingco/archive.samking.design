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
    [
      { url: '/fonts/Text.woff', format: 'woff' },
      { url: '/fonts/Text.woff2', format: 'woff2' },
    ],
    'normal',
  )}
  
  ${generateFontFace(
    'Text',
    [
      { url: '/fonts/TextBold.woff', format: 'woff' },
      { url: '/fonts/TextBold.woff2', format: 'woff2' },
    ],
    'bold',
  )}
  
  ${generateFontFace(
    'TextAlt',
    [
      { url: '/fonts/TextAlt.woff', format: 'woff' },
      { url: '/fonts/TextAlt.woff2', format: 'woff2' },
    ],
    'bold',
  )}
`;

export default fontFace;
