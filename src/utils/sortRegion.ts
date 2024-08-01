import type { RegionProps } from "@/interfaces/region.interface";

export const sortRegion = (regions: RegionProps[]) => {
  return regions.sort((a, b) => {
    if (a.region < b.region) return -1;
    if (a.region > b.region) return 1;
    return 0;
  });
};
