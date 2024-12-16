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

const reservations = [
  {
    sl: 1,
    customerName: "John Doe",
    tableNo: 5,
    noOfPeople: 4,
    startTime: "6:00 PM",
    endTime: "8:00 PM",
    date: "2024-12-16",
    status: "Confirmed",
    action: "View Details",
  },
  {
    sl: 2,
    customerName: "Jane Smith",
    tableNo: 3,
    noOfPeople: 2,
    startTime: "7:00 PM",
    endTime: "9:00 PM",
    date: "2024-12-16",
    status: "Pending",
    action: "View Details",
  },
  {
    sl: 3,
    customerName: "Alice Brown",
    tableNo: 1,
    noOfPeople: 6,
    startTime: "5:30 PM",
    endTime: "7:30 PM",
    date: "2024-12-16",
    status: "Cancelled",
    action: "View Details",
  },
];

export default function ReservationTable() {
  return (
    <div>
      <div>
        <div>
          <div className="py-4">
            <p className="text-xl font-semibold">Reservation</p>
          </div>
          <div>
            <Table>
              <TableCaption>A list of your recent reservations.</TableCaption>
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead className="w-[50px]">Sl</TableHead>
                  <TableHead>Customer Name</TableHead>
                  <TableHead>Table No</TableHead>
                  <TableHead>No. of People</TableHead>
                  <TableHead>Start Time</TableHead>
                  <TableHead>End Time</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reservations.map((reservation) => (
                  <TableRow key={reservation.sl}>
                    <TableCell className="font-medium">{reservation.sl}</TableCell>
                    <TableCell>{reservation.customerName}</TableCell>
                    <TableCell>{reservation.tableNo}</TableCell>
                    <TableCell>{reservation.noOfPeople}</TableCell>
                    <TableCell>{reservation.startTime}</TableCell>
                    <TableCell>{reservation.endTime}</TableCell>
                    <TableCell>{reservation.date}</TableCell>
                    <TableCell>{reservation.status}</TableCell>
                    <TableCell className="text-blue-500 cursor-pointer">{reservation.action}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={9} className="text-right font-semibold">
                    Total Reservations: {reservations.length}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
