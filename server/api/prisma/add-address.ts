import { PrismaClient, Products } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (e) => {
  const body = await readBody(e);

  const { userId, name, address, zipcode, city, country } = body;
  let addedAddress = await prisma.addresses.create({
    data: {
      userId,
      name,
      address,
      zipcode,
      city,
      country,
    },
  });

  return addedAddress;
});
