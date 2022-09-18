export const globalStyles = {
  primaryColor: '#1312C9',
  textColor: '#323B4B',
  secondaryColor: '#061173',
  goldenColor: '#FFC700',
  whiteColor: '#FFF',
  smallTextFontSize: '14px',
  headerFontSize: { base: 24, xl: 36 },
  textFontSize: { base: 14, xl: 16 },
  headerFontWeight: 600,
  width: '100%',
  px: { base: 3, xl: 10, '2xl': 0 },
  blackColor: '#110F0F',
  fontFamily: " 'Poppins', sans-serif",
  containerWidth: {
    base: '100%',
    xl: '1200px',
    '2xl': '1450px',
  },
  sectionStyle: {
    width: '100%',
    px: { base: 3, xl: 10, '2xl': 0 },
    align: 'center',
    justifyContent: 'center',
  },
  alt: 'DYSERF',
};

export const bodyTextStyle = {
  color: globalStyles.textColor,
  fontSize: globalStyles.textFontSize,
};

export const bodyHeaderStyle = {
  fontWeight: globalStyles.headerFontWeight,
  fontFamily: globalStyles.fontFamily,
  fontSize: globalStyles.headerFontSize,
  color: globalStyles.textColor,
};
