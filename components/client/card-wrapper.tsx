"use client";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>{/* <Header label={headerLabel}></Header> */}</CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        {/* <BackButton label={backButtonLabel} href={backButtonHref}></BackButton> */}
      </CardFooter>
    </Card>
  );
};
