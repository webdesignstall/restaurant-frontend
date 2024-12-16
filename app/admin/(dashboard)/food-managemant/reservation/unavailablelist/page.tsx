import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const unavailableDates = [
  { id: 1, date: "2024-12-20", time: "12:00 PM - 4:00 PM" },
  { id: 2, date: "2024-12-21", time: "10:00 AM - 2:00 PM" },
  { id: 3, date: "2024-12-22", time: "All Day" },
];

export default function UnavailableList() {
  return (

    <div>
      <div>
        <div>
          <div>
            <p className="text-xl">
              Reservation
            </p>
          </div>
          <div>
            <Table>
              <TableCaption>A list of unavailable dates and times.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Sl</TableHead>
                  <TableHead>Unavailable Date</TableHead>
                  <TableHead>Available Time</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {unavailableDates.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.time}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={4}>Total Unavailable Dates: {unavailableDates.length}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
      </div>
    </div>

  );
}
