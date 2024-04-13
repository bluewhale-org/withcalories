"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "~/components/ui/button";
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons";
import { Restaurant } from "~/data/restaurants";
import Link from "next/link";

export function getRestaurantColumns(
  pathname: string,
): ColumnDef<Restaurant>[] {
  return [
    {
      accessorKey: "id",
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
        <div>
          <Link href={`${pathname}/${row.getValue("id")}`}>
            <Button variant="link" size="sm">
              {row.getValue("name")}
            </Button>
          </Link>
        </div>
      ),
    },
    {
      accessorKey: "street_address",
      header: ({ column }) => {
        return <div>Address</div>;
      },
      cell: ({ row }) => <div>{row.getValue("street_address")}</div>,
    },
  ];
}
