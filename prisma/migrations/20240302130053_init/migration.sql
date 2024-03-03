-- CreateTable
CREATE TABLE "SoilSample" (
    "id" SERIAL NOT NULL,
    "coordinate" DOUBLE PRECISION[],
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SoilSample_pkey" PRIMARY KEY ("id")
);
