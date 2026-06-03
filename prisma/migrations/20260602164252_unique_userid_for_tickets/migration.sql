-- CreateTable
CREATE TABLE "brukere" (
    "id" SERIAL NOT NULL,
    "navn" TEXT NOT NULL,
    "epost" TEXT NOT NULL,
    "tlf" TEXT,
    "passord_hash" TEXT NOT NULL,
    "rolle" TEXT NOT NULL DEFAULT 'bruker',

    CONSTRAINT "brukere_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tickets" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "bruker_id" INTEGER NOT NULL,

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "brukere_epost_key" ON "brukere"("epost");

-- CreateIndex
CREATE UNIQUE INDEX "tickets_bruker_id_key" ON "tickets"("bruker_id");

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "bruker_tickets" FOREIGN KEY ("bruker_id") REFERENCES "brukere"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
