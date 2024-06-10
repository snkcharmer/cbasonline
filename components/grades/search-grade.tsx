"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { revalidatePath } from "next/cache";
import { searchCode } from "@/actions/grades";
import { useRouter } from "next/navigation";

const SearchGrade = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleKeyEnter = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") searchCode(search);
  };

  const handleOnClick = async () => {
    searchCode(search);
  };

  const searchCode = (search: string = "") => {
    let code = 0;
    let submodid = 0;
    // console.log("Entered Key: ", scheduleCode);
    const [var1, var2] = search.split("-");
    code = parseInt(var1, 10);
    submodid = var2 === undefined ? 0 : parseInt(var2, 10);
    if (!code) {
      router.push(`/admin/grades`);
      return;
    }

    router.push(`/admin/grades?code=${code}&submodid=${submodid}`);

    // revalidatePath("/admin/grades");
  };

  return (
    <>
      <div className="flex flex-row w-3/4 space-x-4 lg:w-1/3">
        <Input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          onKeyDown={handleKeyEnter}
          className="w-full"
        />
        <Button onClick={handleOnClick} className="w-1/3 p-2">
          Search
        </Button>
      </div>
    </>
  );
};

export default SearchGrade;
