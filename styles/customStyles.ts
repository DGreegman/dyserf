export const globalStyles = {
  primaryColor: '#1312C9',
  textColor: '#323B4B',
  secondaryColor: '#061173',
  goldenColor: '#FFC700',
  whiteColor: '#FFF',
  smallTextFontSize: '0.8rem',
  headerFontSize: { base: '1.5rem', xl: '2rem' },
  textFontSize: { base: '0.8rem', xl: '1rem' },
  semibold: 500,
  mediumbold: 600,
  headerFontWeight: 700,
  width: '100%',
  fullHeight: '100vh',
  px: { base: 4, xl: 10, '2xl': 0 },
  blackColor: '#110F0F',
  fontFamily: " 'Poppins', sans-serif",
  containerWidth: {
    base: '100%',
    xl: '1200px',
    '2xl': '1450px',
  },
  sectionStyle: {
    width: '100%',
    px: { base: 4, xl: 10, '2xl': 0 },
    align: 'center',
    justifyContent: 'center',
  },
  alt: 'DYSERF',
  lineHeight: 1.5,
};

export const bodyTextStyle = {
  color: globalStyles.textColor,
  fontSize: globalStyles.textFontSize,
};

export const bodyHeaderStyle = {
  fontWeight: globalStyles.mediumbold,
  fontFamily: globalStyles.fontFamily,
  fontSize: globalStyles.headerFontSize,
  color: globalStyles.textColor,
};
