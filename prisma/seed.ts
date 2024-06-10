import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("qwepoi123098", 10);
  const alice = await prisma.login.upsert({
    where: { username: "jarydd" },
    update: {},
    create: {
      username: "jarydd",
      name: "Jarydd Cinco",
      password: hashedPassword,
      position: "Admin",
    },
  });
  console.log({ alice });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
