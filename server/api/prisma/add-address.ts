import { PrismaClient, Products } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (e) => {
  const body = await readBody(e);
  const { userId, name, address, zipCode, city, country } = body;
  let order = await prisma.addresses.create({
    data: {
      userId,
      name,
      address,
      zipcode: zipCode,
      city,
      country,
    },
  });

  return order;
});
