import type {ActivityProps} from "@/interfaces/activity.interface.ts";
import { supabase } from "@/lib/supabase";

export const getActivityList = async (): Promise<ActivityProps[]> => {
  return (await supabase.from("Donation").select("type"))["data"] ?? [];
};
