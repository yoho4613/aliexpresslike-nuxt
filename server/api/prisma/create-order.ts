import { PrismaClient, Products } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (e) => {
  const body = await readBody(e);
  const { userId, stripeId, name, address, zipcode, city, country } = body;
  let order = await prisma.orders.create({
    data: {
      userId,
      stripeId,
      name,
      address,
      zipcode,
      city,
      country,
    },
  });

  body.products.forEach(async (prod: Products) => {
    await prisma.orderItem.create({
      data: {
        orderId: order.id,
        productId: Number(prod.id),
      },
    });
  });

  return order;
});
