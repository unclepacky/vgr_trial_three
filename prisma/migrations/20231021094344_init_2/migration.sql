-- CreateTable
CREATE TABLE "Lease" (
    "id" SERIAL NOT NULL,
    "customerId" INTEGER,

    CONSTRAINT "Lease_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lease_id_key" ON "Lease"("id");

-- AddForeignKey
ALTER TABLE "Lease" ADD CONSTRAINT "Lease_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
