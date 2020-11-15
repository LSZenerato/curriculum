const size = {
    xs: '600px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
};
  
const breakpoints = {
    mobile: `(min-width: ${size.xs})`,
    tablet: `(min-width: ${size.sm})`,
    laptop: `(min-width: ${size.md})`,
    desktop: `(min-width: ${size.lg})`,
    mobileMax: `(max-width: ${size.xs})`,
    tabletMax: `(max-width: ${size.sm})`,
    laptopMax: `(max-width: ${size.md})`,
    desktopMax: `(max-width: ${size.lg})`,
};
  
export default breakpoints;