import type { RegionProps } from "@/interfaces/region.interface";
import { supabase } from "@/lib/supabase";

export const getRegionList = async (): Promise<RegionProps[]> => {
  return (await supabase.from("Contact").select("region"))["data"] ?? [];
};
