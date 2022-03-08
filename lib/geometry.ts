// es6 module

type Stats = {
  length: number,
  breadth: number,
};

/* export function perimeterRectangle(stats: Stats): number {
  return 2 * (stats.length + stats.breadth);
}

export function areaRectangle(stats: Stats): number {
  return stats.length * stats.breadth;
} */

function perimeterRectangle(stats: Stats): number {
  return 2 * (stats.length + stats.breadth);
}

function areaRectangle(stats: Stats): number {
  return stats.length * stats.breadth;
}

export {
  perimeterRectangle,
  areaRectangle,
};

// default export
// there can be only one default export in a file
export default Stats;

// export default areaRectangle; // will not work