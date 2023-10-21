import prisma from "@/prisma/client";
import React from "react";

interface Props {
  params: { id: string };
}

const CustomerPage = async (props: Props) => {
  console.log(props);
  const customer = await prisma.customer.findUnique({
    where: {
      id: parseInt(props.params.id),
    },
  });

  return <div>{customer?.name}</div>;
};

export default CustomerPage;
