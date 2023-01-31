const prefix = document.URL.startsWith('https://dudkoserhei.github.io/flowers/') ? '/flowers' : ''; /* This is prefix for github.pages.io */

const ROUTES = {
  ROOT: `${prefix}`,
  WREATHS: `${prefix}/wreaths`,
  BASKETS: `${prefix}/baskets`,
  MOUNDS: `${prefix}/mounds`,
  FLOWERS: `${prefix}/flowers`,
  COMPOSITIONS: `${prefix}/compositions`
};

export default ROUTES;
