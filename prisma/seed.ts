import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// const customerData: Prisma.CustomerCreateInput[] = [
//   {
//     firstName: "Mia",
//     LastName: "Aoun",
//     displayName: "Maymoush",
//     email: "mayaoun@gmail.com",
//     prefix: "MISS",
//   },
//   {
//     firstName: "Alice",
//     LastName: "Aoun",
//     email: "aliceaoun@gmail.com",
//     prefix: "MRS",
//   },
//   {
//     firstName: "Kay",
//     LastName: "Aoun",
//     email: "Kayaoun@gmail.com",
//     prefix: "STUDENT",
//   },
//   {
//     firstName: "Karl",
//     LastName: "Aoun",
//     email: "karlaoun@gmail.com",
//     prefix: "DR",
//   },
// ];
// const employeeData: Prisma.EmployeeCreateInput[] = [
//   {
//     firstName: "Claude",
//     LastName: "Aoun",
//     email: "claudeaoun@gmail.com",
//     position: "RECEPTION",
//     role: "ADMIN",
//   },
//   {
//     firstName: "Manal",
//     LastName: "Hamad",
//     email: "manalhamad@gmail.com",
//     position: "RECEPTION",
//     role: "BASIC",
//   },
// ];

const user: Prisma.UserCreateInput[] = [
  {
    email: "claude@test.com",
    name: "claude",
  },
];

async function main() {
  // await prisma.user.deleteMany();
  // await prisma.employee.deleteMany();
  //   const customer = await prisma.customer.create({
  //     data: {
  //       firstName: "claude",
  //       LastName: "Aoun",
  //       displayName: "UnclePacky",
  //       email: "claudeaoun@gmail.com",
  //     },
  //   });
  //   const customer = await prisma.customer.findMany();
  //   console.log(customer);

  for (const u of user) {
    const newUser = await prisma.user.create({
      data: u,
    });
    console.log(`user with id: ${newUser.id} was created.`);
  }

  // for (const u of customerData) {
  //   const customer = await prisma.customer.create({
  //     data: u,
  //   });
  //   console.log(`Customer with id: ${customer.id} was created.`);
  // }
  // for (const emp of employeeData) {
  //   const employee = await prisma.employee.create({
  //     data: emp,
  //   });
  //   console.log(`Employee with id: ${employee.id} was created.`);
  // }
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
