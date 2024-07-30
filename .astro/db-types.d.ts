// This file is generated by Astro DB
declare module 'astro:db' {
	export const Contact: import("@astrojs/db/runtime").Table<
		"Contact",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Contact","primaryKey":true}},"name":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"name","collection":"Contact","primaryKey":false,"optional":false}},"type":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"type","collection":"Contact","primaryKey":false,"optional":false}},"description":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"description","collection":"Contact","primaryKey":false,"optional":true}},"phone":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"phone","collection":"Contact","primaryKey":false,"optional":false}},"region":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"region","collection":"Contact","primaryKey":false,"optional":false}},"telegram":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"telegram","collection":"Contact","primaryKey":false,"optional":true}},"instagram":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"instagram","collection":"Contact","primaryKey":false,"optional":true}},"whatsapp":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"whatsapp","collection":"Contact","primaryKey":false,"optional":true}},"twitter":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"twitter","collection":"Contact","primaryKey":false,"optional":true}}}
	>;
}
