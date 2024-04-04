import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "a1252029-d294-4f99-b81d-a0675e1a23cf",
      title: "Event 1",
      slug: "event-1",
      details: "Details 1",
      maximumAttendees: 10,
    },
  });
}

seed().then(() => {
  console.log("seed");

  prisma.$disconnect();
});
