const debug = process.env.NODE_ENV !== 'production';
const prefix = !debug ? '/flowers' : ''; /* This is prefix for github.pages.io */

const ROUTES = {
  ROOT: `${prefix}`,
  WREATHS: `${prefix}/wreaths`,
  BASKETS: `${prefix}/baskets`,
  MOUNDS: `${prefix}/mounds`,
  FLOWERS: `${prefix}/flowers`,
  COMPOSITIONS: `${prefix}/compositions`
};

export default ROUTES;
