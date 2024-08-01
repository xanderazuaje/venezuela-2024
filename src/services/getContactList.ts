import type { ContactProps } from "@/interfaces/contact.interface";
import { supabase } from "@/lib/supabase";

export const getContactList = async (
  reg: string | null
): Promise<ContactProps[]> => {
  const contact_query = reg
    ? await supabase.from("Contact").select(`*`).eq("region", reg)
    : await supabase.from("Contact").select(`*`);
  return contact_query["data"] ?? [];
};
