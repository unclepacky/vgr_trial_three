import prisma from "@/prisma/client";
import Link from "next/link";

const Customers = async () => {
  const customers = await prisma.customer.findMany();
  return (
    <div className="border-2">
      <h1 className="text-3xl font-semibold text-orange-500">CUSTOMERS</h1>
      <ul>
        {customers &&
          customers.map((customer) => (
            <Link href={`/customers/${customer.id}`} key={customer.id}>
              <li>
                {customer.id} {customer.name} {customer.status}
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default Customers;
