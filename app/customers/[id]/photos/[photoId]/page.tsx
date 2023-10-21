import prisma from "@/prisma/client";
import React from "react";

interface Props {
  params: { id: string; photoId: string };
}

const PhotoPage = (props: Props) => {
  console.log(props);

  return <div>{props.params.photoId}</div>;
};

export default PhotoPage;
