export const sortRegion = (regions: Array<any>) => {
  return regions.sort((a, b) => {
    if (a.region < b.region) return -1;
    if (a.region > b.region) return 1;
    return 0;
  });
};
