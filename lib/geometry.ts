// module

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