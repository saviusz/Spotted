import { prisma } from ".";
async function main() {
  prisma.author.create({
    data: {
      displayName: "Anon",
      id: Date.now(),
    },
  });
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
