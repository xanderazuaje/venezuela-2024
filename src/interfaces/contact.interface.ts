export interface ContactProps {
  id: number;
  created_at: string;
  name: string;
  service: string;
  region: string;
  phone: string;
  description: string;
  social: string | null;
  created_by: string;
}
