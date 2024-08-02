export interface RowDashboardProps {
    id: number,
    name: string,
    region: string,
    phone?: string,
    service: string,
    description?: string
    social?: {
        telegram: string,
        instagram: string,
        whatsapp: string
    }
}
