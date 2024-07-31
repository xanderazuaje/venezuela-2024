import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config

const Contact = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    name: column.text(),
    type: column.text(),
    description: column.text({optional: true}),
    phoneNum: column.text({default: ""}),
    region: column.text(),
    telegram: column.text({optional: true}),
    instagram: column.text({optional: true}),
    whatsapp: column.text({optional: true}),
    twitter: column.text({optional: true})
  },
  indexes: [{on: ["region", "type"]}]
})

export default defineDb({
  tables: {Contact}
});
