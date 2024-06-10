import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Trainee } from "@/types";

const Welcome = ({ trainee }: { trainee: Trainee }) => {
  return (
    <Card className="">
      <CardHeader>Welcome to CBAS!</CardHeader>

      <CardContent>
        <div>ID: {JSON.parse(trainee.trid)}</div>
        <div>Last Name: {trainee.lastname}</div>
        <div>First Name: {trainee.firstname}</div>
        <div>Middle Name: {trainee.middlename}</div>
        <div>Ext: {trainee.extension}</div>
        <div>Date of Birth: {trainee.bdate}</div>
        <div>License: {trainee.license}</div>
        <div>Rank: {trainee.rank}</div>
      </CardContent>
    </Card>
  );
};

export default Welcome;
