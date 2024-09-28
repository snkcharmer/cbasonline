import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import SearchGrade from "../grades/search-grade";

type ModuleProp = {
  module: string;
  id: number;
  dscrptn?: string;
};

const ImportModule = () => {
  const [importModule, setImportModule] = useState<ModuleProp[]>([]);
  const [selectedModule, setSelectedModule] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchModules = async () => {
      fetch(`http://localhost/cbas/api/cbasmodule`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch data");
          }
          return res.json();
        })
        .then((data) => {
          const filteredModules = data.map(
            ({ dscrptn, module, id }: ModuleProp) => ({
              module: dscrptn,
              id: id,
            })
          );
          console.log(filteredModules);
          setImportModule(filteredModules);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchModules();
  }, []);

  const handleImportQuestions = async () => {
    // searchCode(search);
    const searchCode = (search: string = "") => {
      let code = 0;
      let submodid = 0;
      // console.log("Entered Key: ", scheduleCode);
      const [var1, var2] = search.split("-");
      code = parseInt(var1, 10);
      submodid = var2 === undefined ? 0 : parseInt(var2, 10);
      if (!code) {
        router.push(`/admin/questions`);
        return;
      }

      router.push(`/admin/questions?code=${code}&submodid=${submodid}`);

      // revalidatePath("/admin/grades");
    };

    searchCode(selectedModule);
  };

  const handleChange = (value: string) => {
    setSelectedModule(value);
  };

  return (
    <>
      <div className="flex flex-row gap-3">
        <Select onValueChange={handleChange}>
          <SelectTrigger className="w-[300px]">
            <SelectValue placeholder="Please Select a Module to Import" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {importModule.map((module) => (
                <SelectItem key={module.id} value={String(module.id)}>
                  {module.module}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button onClick={handleImportQuestions}>Import</Button>
      </div>
    </>
  );
};

export default ImportModule;
