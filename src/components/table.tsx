import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, Table as TableMUI, TablePagination } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  createData("Miro", "developer", 1200, "Accept", "Lorem13"),
  createData("Miro", "developer", 1200, "Accept", "Lorem13"),
  createData("Miro", "developer", 1200, "Accept", "Lorem13"),
  createData("Miro", "developer", 1200, "Accept", "Lorem13"),
  createData("Miro", "developer", 1200, "Accept", "Lorem13"),
  createData("Miro", "developer", 1200, "Accept", "Lorem13"),
  createData("Miro", "developer", 1200, "Accept", "Lorem13"),
  createData("Miro", "developer", 1200, "Accept", "Lorem13"),
  createData("Miro", "developer", 1200, "Accept", "Lorem13"),
  createData("Miro", "developer", 1200, "Accept", "Lorem13"),
  createData("Miro", "developer", 1200, "Accept", "Lorem13"),
  createData("Miro", "developer", 1200, "Accept", "Lorem13"),
  createData("Miro", "developer", 1200, "Accept", "Lorem13"),
];

function createData(
  company: string,
  vacancy: string,
  salary: number,
  status: "Accept" | "Decline" | "Expectation",
  note: string
) {
  const id = uuidv4();
  return { id, company, vacancy, salary, status, note };
}

const onPageChange = () => {};
const onRowsPerPageChange = () => {};
export default function Table() {
  return (
    <Box sx={{ width: "100%", maxWidth: "1080px", margin: "0 auto" }}>
      <TableContainer component={Paper}>
        <TableMUI aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Company</TableCell>
              <TableCell align="right">Vacancy</TableCell>
              <TableCell align="right">Salary</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Note</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.company}</TableCell>
                <TableCell align="right">{row.vacancy}</TableCell>
                <TableCell align="right">{row.salary}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.note}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableMUI>
      </TableContainer>
      <TablePagination
        rowsPerPage={5}
        component="div"
        count={5}
        page={2}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </Box>
  );
}
