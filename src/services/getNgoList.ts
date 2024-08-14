import { supabase } from "@/lib/supabase";
import type {NgoProps} from "@/interfaces/ngo.interface.ts";

export const getNgoList = async (
    type: string | null
): Promise<NgoProps[]> => {
  const contact_query = type
    ? await supabase.from("Donation").select(`*`).eq("type", type)
    : await supabase.from("Donation").select(`*`);
  return contact_query["data"] ?? [];
};
