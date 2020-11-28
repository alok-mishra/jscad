const { colorize, hexToRgb } = require('@jscad/modeling').colors;
const { cuboid, roundedCuboid, cylinder } = require('@jscad/modeling').primitives;
const { translate } = require('@jscad/modeling').transforms;
const { intersect, subtract, union } = require('@jscad/modeling').booleans;

const color = (obj, hex) => colorize(hexToRgb(hex), obj);
const setOrigin = dim => dim.map(x => x / 2);

const length1 = 150.1;
const length2 = 98.15;
const length3 = 84.75;

const width = 22;
const depth = length1 + length2 + length3; // 333mm
const height = 14;

const gutter_width = 9.2;
const gutter_wall = 2.2;

console.log(depth);

const traytrack = [];

const blockDim = [width, depth, height];
let block = roundedCuboid({
    center: setOrigin(blockDim),
    size: blockDim,
    roundRadius: 1,
});

const gutterDim = [gutter_width, depth, height - gutter_wall];
let gutter = cuboid({
    center: setOrigin(gutterDim),
    size: gutterDim,
});
// gutter = translate([blockDim[0] - gutterDim[0] - gutter_wall, 0, gutter_wall], gutter);
gutter = translate([gutter_wall, 0, gutter_wall], gutter);

const model = subtract(block, gutter);

// const q = color(translate([6, 6, 6], cuboid()), '#00ccff');

traytrack.push(model);
// traytrack.push(color(gutter, '#ff6666'));

const main = () => traytrack;
module.exports = { main };
