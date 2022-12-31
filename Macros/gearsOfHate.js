/**
 * This macro will rotate the tiles, and walls, for
 * the enormous cogs in the Gears of Hate map.
 *
 * Change the LEFT, MIDDLE, RIGHT values to be the IDs of
 * the tiles in your game.
 */

const LEFT = "LN6kmAkANeiJiLrE";
const MIDDLE = "lzFjlJIgQz2wiXEY";
const RIGHT = "1q41BkeHDhY0WBRB";
const tileConfig = [
  {
    left: { rotation: 153, x: 1910, y: 1537 },
    middle: { rotation: 216, x: 2610, y: 1870 },
    right: { rotation: 153, x: 3325, y: 1523 },
  },
  {
    left: { rotation: 213, x: 1910, y: 1534 },
    middle: { rotation: 146, x: 2616, y: 1868 },
    right: { rotation: 213, x: 3325, y: 1523 },
  },
  {
    // Starting position
    left: { rotation: 288, x: 1914, y: 1535 },
    middle: { rotation: 72, x: 2608, y: 1870 },
    right: { rotation: 288, x: 3325, y: 1523 },
  },
  {
    left: { rotation: 3, x: 1914, y: 1536 },
    middle: { rotation: 4, x: 2616, y: 1868 },
    right: { rotation: 3, x: 3323, y: 1525 },
  },
  {
    left: { rotation: 78, x: 1910, y: 1538 },
    middle: { rotation: 288, x: 2616, y: 1868 },
    right: { rotation: 78, x: 3323, y: 1521 },
  },
];

// We'll grab all the walls within these coords
const wallConfig = {
  left: {
    minX: 1960,
    minY: 1583,
    maxX: 2712,
    maxY: 2336,
    coords: [
      [
        [1977, 1872, 2152, 2275],
        [2152, 2275, 2511, 2240],
        [2590, 2187, 2677, 1811],
        [2677, 1811, 2345, 1618],
        [2257, 1636, 1977, 1872],
      ],
      [
        [1977, 1951, 2187, 2248],
        [2257, 2292, 2625, 2178],
        [2625, 2178, 2633, 1785],
        [2572, 1732, 2231, 1618],
        [2231, 1618, 1977, 1951],
      ],
      [
        [2003, 1977, 2205, 2301],
        [2205, 2301, 2581, 2205],
        [2616, 2126, 2642, 1776],
        [2642, 1776, 2248, 1618],
        [2248, 1618, 2021, 1890],
      ],
      [
        [1968, 1916, 2161, 2257],
        [2248, 2275, 2598, 2205],
        [2598, 2205, 2651, 1776],
        [2651, 1776, 2318, 1627],
        [2222, 1636, 1968, 1916],
      ],
      [
        [2003, 1951, 2161, 2283],
        [2161, 2283, 2590, 2213],
        [2590, 2213, 2651, 1863],
        [2616, 1767, 2275, 1592],
        [2275, 1592, 2003, 1863],
      ],
    ],
  },
  middle: {
    minX: 2668,
    minY: 1925,
    maxX: 3430,
    maxY: 2657,
    coords: [
      [
        [2826, 2598, 2695, 2187],
        [2695, 2187, 3001, 1968],
        [3088, 1968, 3325, 2135],
        [3386, 2231, 3263, 2598],
        [3263, 2598, 2826, 2598],
      ],
      [
        [2826, 2590, 2721, 2231],
        [2765, 2152, 2992, 1995],
        [3080, 1968, 3386, 2205],
        [3386, 2205, 3246, 2598],
        [3246, 2598, 2826, 2590],
      ],
      [
        [2817, 2546, 2721, 2275],
        [2730, 2187, 3045, 1951],
        [3045, 1951, 3386, 2205],
        [3386, 2205, 3255, 2598],
        [3255, 2598, 2878, 2598],
      ],
      [
        [2817, 2546, 2721, 2170],
        [2721, 2170, 3080, 1942],
        [3080, 1942, 3412, 2222],
        [3412, 2222, 3272, 2563],
        [3185, 2607, 2905, 2590],
      ],
      [
        [2835, 2590, 2712, 2187],
        [2712, 2187, 3053, 1933],
        [3053, 1933, 3360, 2152],
        [3386, 2248, 3298, 2520],
        [3237, 2590, 2835, 2590],
      ],
    ],
  },
  right: {
    minX: 3386,
    minY: 1583,
    maxX: 4138,
    maxY: 2336,
    coords: [
      [
        [3902, 2301, 3508, 2205],
        [3473, 2100, 3447, 1758],
        [3447, 1758, 3753, 1636],
        [3850, 1618, 4121, 1933],
        [4121, 1933, 3902, 2301],
      ],
      [
        [3963, 2248, 3543, 2248],
        [3543, 2248, 3430, 1863],
        [3491, 1793, 3771, 1601],
        [3771, 1601, 4033, 1802],
        [4095, 1881, 3963, 2248],
      ],
      [
        [3920, 2257, 3526, 2231],
        [3526, 2231, 3421, 1828],
        [3421, 1828, 3771, 1610],
        [3850, 1653, 4112, 1872],
        [4112, 1872, 3981, 2178],
      ],
      [
        [3937, 2283, 3596, 2240],
        [3508, 2205, 3430, 1802],
        [3430, 1802, 3806, 1592],
        [3806, 1592, 4095, 1872],
        [4077, 1977, 3937, 2283],
      ],
      [
        [3823, 2266, 3491, 2213],
        [3491, 2213, 3447, 1872],
        [3456, 1776, 3823, 1601],
        [3823, 1601, 4121, 1907],
        [4121, 1907, 3928, 2257],
      ],
    ],
  },
};

const config = +prompt("What configuration is it set to?", 1) || 1;

// Update the Walls
for (let key in wallConfig) {
    if (wallConfig.hasOwnProperty(key)) {
        const walls = canvas.scene.walls
            .filter(w => isWallWithin(w, wallConfig[key]))
            .map((w, idx) => ({_id: w.id, c: wallConfig[key].coords[config - 1][idx]}));
        await canvas.scene.updateEmbeddedDocuments("Wall", walls);
    }
}


// // Update the Tiles
await canvas.scene.updateEmbeddedDocuments("Tile", [
  { _id: canvas.scene.tiles.get(LEFT).id, ...tileConfig[config - 1].left },
  { _id: canvas.scene.tiles.get(MIDDLE).id, ...tileConfig[config - 1].middle },
  { _id: canvas.scene.tiles.get(RIGHT).id, ...tileConfig[config - 1].right },
]);

function isWallWithin(wall, config) {
    const {minX, minY, maxX, maxY} = config;
    const [leftX, leftY, rightX, rightY] = wall.c;
  
    // Check if both ends of the line are inside the box
    return (leftX >= minX && leftX <= maxX && leftY >= minY && leftY <= maxY) && 
           (rightX >= minX && rightX <= maxX && rightY >= minY && rightY <= maxY);
}
