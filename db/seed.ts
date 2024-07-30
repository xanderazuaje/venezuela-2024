import {Contact, db} from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
    await db.insert(Contact).values([
        {
            id: 1,
            name: "pedro perez",
            type: "asesoria legal",
            description: "lorem ipsum dolor site amet",
            phone: 4249999999,
            region: "distrito federal",
            telegram: "estootro",
            instagram: "estootro",
            whatsapp: "estootro",
            twitter: "estootro",
        },
        {
            id: 2,
            name: "pedro perez",
            type: "asesoria legal",
            description: "lorem ipsum dolor site amet",
            phone: 4249999999,
            region: "distrito federal",
            telegram: "estootro",
            instagram: "estootro",
            whatsapp: "estootro",
            twitter: "estootro",
        },
        {
            id: 3,
            name: "pedro perez",
            type: "asesoria legal",
            description: "lorem ipsum dolor site amet",
            phone: 4249999999,
            region: "distrito federal",
            telegram: "estootro",
            instagram: "estootro",
            whatsapp: "estootro",
            twitter: "estootro",
        },
    ])
}
