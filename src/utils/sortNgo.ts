import type { ActivityProps} from "@/interfaces/activity.interface.ts";

export const sortNgo = (activities: ActivityProps[]) => {
  return activities.sort((a, b) => {
    if (a.type < b.type) return -1;
    if (a.type > b.type) return 1;
    return 0;
  });
};
