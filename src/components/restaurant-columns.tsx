"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { Button } from "~/components/ui/button";
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons";
import { type Restaurant } from "~/data/restaurants";
import Link from "next/link";

export function getRestaurantColumns(
  pathname: string,
): ColumnDef<Restaurant>[] {
  return [
    {
      accessorKey: "id",
    },
    {
      accessorKey: "description",
    },
    {
      accessorKey: "city",
    },
    {
      accessorKey: "state",
    },
    {
      accessorKey: "zip",
    },
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="px-2"
          >
            Restaurant
            {column.getIsSorted() === "asc" ? (
              <CaretDownIcon className="ml-2 h-4 w-4" />
            ) : (
              <CaretUpIcon className="ml-2 h-4 w-4" />
            )}
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="group ml-2">
          {/*eslint-disable-next-line @typescript-eslint/restrict-template-expressions*/}
          <Link href={`${pathname}/${row.getValue("id")}`}>
            <div className="font-bold group-hover:underline">
              {row.getValue("name")}
            </div>
            <span className="text-muted-foreground">
              {row.getValue("description")}
            </span>
          </Link>
        </div>
      ),
    },
    {
      accessorKey: "street_address",
      header: () => {
        return <div>Address</div>;
      },
      cell: ({ row }) => (
        <div>
          {row.getValue("street_address")}
          <br />
          {row.getValue("city")}, {row.getValue("state")} {row.getValue("zip")}
        </div>
      ),
    },
  ];
}
