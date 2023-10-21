import Link from "next/link";
import React from "react";

const LeftPanel = () => {
  return (
    <div className="flex flex-col gap-3 border-2 h-screen bg-gray-300 px-4">
      <Link href="/">Home</Link>
      <Link href="/customers">Customers</Link>
    </div>
  );
};

export default LeftPanel;
