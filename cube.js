const { colorize, hexToRgb } = require('@jscad/modeling').colors;
const { cube, sphere } = require('@jscad/modeling').primitives;
const { translate } = require('@jscad/modeling').transforms;

const color = (obj, hex) => colorize(hexToRgb(hex), obj);

const q = color(translate([6, 6, 6], cube()), '#00ccff');

const main = () => [q];

module.exports = { main };
