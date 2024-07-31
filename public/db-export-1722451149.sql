PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Contact" ("id" integer PRIMARY KEY, "name" text NOT NULL, "type" text NOT NULL, "description" text, "phone" integer NOT NULL, "region" text NOT NULL, "telegram" text, "instagram" text, "whatsapp" text, "twitter" text);
INSERT INTO Contact VALUES(1,'Oswaldo Blanco','asistencia legal','Abogado penal atendiendo casos de detenciones políticas',4144898654,'distrito capital',NULL,NULL,NULL,NULL);
INSERT INTO Contact VALUES(2,'Maria Gabriella Troccoli','psicólogo','Asistencia psicológica de emergencia para ciudadanos',4242936116,'distrito capital',NULL,NULL,NULL,NULL);
INSERT INTO Contact VALUES(3,'Federación de Psicólogos de Venezuela','psicólogo','Atención psicológica toda la semana. de 08:00 am a 08:00 pm',4242907338,'nacional',NULL,'fpv_ve',NULL,NULL);
INSERT INTO Contact VALUES(4,'Foro Penal','asistencia legal','Proceso de denuncias para detenidos y apoyo jurídico',4125568211,'nacional',NULL,NULL,NULL,NULL);
CREATE INDEX "Contact_region_type_idx" ON "Contact" ("region", "type");
COMMIT;
