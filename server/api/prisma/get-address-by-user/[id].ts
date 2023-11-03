import { PrismaClient, Products } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (e) => {
  const res = await prisma.addresses.findFirst({
    where: {
      userId: e.context.params?.id,
    },
  });
  return res;
});
