import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import Link from "next/link";

const BBSCard = () => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque expedita voluptatum odit, hic voluptatibus, soluta autem modi necessitatibus recusandae beatae ad in ea rem iste facilis labore! Culpa, voluptates praesentium.</CardContent>
      <CardFooter className="flex justify-between">
        <Link href={"/bbs-post/1"} className="text-blue-500">
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BBSCard;
