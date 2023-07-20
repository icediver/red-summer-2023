import { Parcel, PrismaClient, Truck } from "@prisma/client";
import { faker, fakerES } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding ...");
  await createParcels(200);
  // await createTrucks(50);
}
const createParcels = async (length: number) => {
  const parcels: Parcel[] = [];

  for (let i = 0; i < length; i++) {
    await prisma.parcel.create({
      data: {
        parcelNumber: `CN${faker.datatype.number({ precision: 6 })}ES`,
        volumeWeight: faker.datatype.number({ min: 1, max: 100 }),
        admissionDate: String(
          faker.date.soon({ refDate: "2023-17-07T00:00:00.000Z" }),
        ),
      },
    });
  }
  console.log(`Created ${parcels.length} products`);
};

function createTruck() {
  return {
    number: `V${faker.datatype.number({ precision: 6 })}`,
    model: faker.helpers.arrayElement([
      "Iveco 89E14",
      "Iveco 79E15",
      "Iveco 79E18",
      "iveco 89E14",
      "Iveco 79E21",
      "Iveco 80E18",
      "Iveco 80E21",
      "Iveco 90E14",
    ]),
    status: faker.helpers.arrayElement([
      "Arrived",
      "Available",
      "Delayed",
      "On way",
      "Departure",
    ]),
    arrivalDate: faker.date.soon({ refDate: "2023-19-07T00:00:00.000Z" }),
    departureDate: faker.date.between({
      from: "2023-16-07T00:00:00.000Z",
      to: "2023-17-07T00:00:00.000Z",
    }),
    department: faker.number.int({ min: 1, max: 6 }),
    capacity: faker.helpers.arrayElement([200, 300, 400]),
    destination: `${fakerES.location.city()} - ${fakerES.location.city()}`,
    categoryId: 3,
  };
}

const createTrucks = async (length: number) => {
  for (let i = 0; i < length; i++) {
    console.log(i);
    await prisma.truck.create({
      data: createTruck(),
    });
  }
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
