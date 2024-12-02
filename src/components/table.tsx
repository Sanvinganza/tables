import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, Table as TableMUI, TablePagination } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modal from "./modal";
import { TStatus, TVacancy } from "../types";

export type TRow = TVacancy & { id?: string };

type TCreateData = (
  company: string,
  vacancy: string,
  salary: number,
  status: TStatus,
  note: string
) => TRow;

const createData: TCreateData = (company, vacancy, salary, status, note) => {
  const id = uuidv4();
  return { id, company, vacancy, salary, status, note } as TRow;
};

const rows: TRow[] = [
  createData(
    "Miro",
    "developer",
    3100,
    "Accept",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magni beatae nesciunt veritatis laboriosam!"
  ),
  createData(
    "Anderson",
    "developer",
    1200,
    "Decline",
    "Lorem ipsum dolor sit amet conorem13"
  ),
  createData(
    "EPAM",
    "developer",
    2500,
    "Expectation",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit nesciunt veritatis laboriosam!"
  ),
  createData(
    "Miro",
    "developer",
    3100,
    "Accept",
    "Quae magni beatae nesciunt veritatis laboriosam!"
  ),
  createData(
    "Miro",
    "developer",
    1200,
    "Decline",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magni beatae nesciunt veritatis laboriosam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magni beatae nesciunt veritatis laboriosam!"
  ),
  createData(
    "EPAM",
    "developer",
    3100,
    "Accept",
    "Consectetur adipisicing elit. Quae magni beatae nesciunt veritatis laboriosam!"
  ),
  createData(
    "Miro",
    "developer",
    1200,
    "Expectation",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magni beatae nesciunt veritatis laboriosam!"
  ),
  createData(
    "Anderson",
    "developer",
    2500,
    "Accept",
    "Ipsum dolor sit amet consectetur adipisicing  veritatis laboriosam!"
  ),
  createData(
    "Anderson",
    "developer",
    1200,
    "Decline",
    "Korem ipsum  consectetur adipisicing elit. Quae magni veritatis laboriosam!"
  ),
  createData(
    "EPAM",
    "developer",
    3100,
    "Expectation",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magni beatae nesciunt veritatis laboriosam!"
  ),
  createData(
    "Miro",
    "developer",
    2500,
    "Accept",
    "Sit amet consectetur adipisicing elit. Quae magni beatae nesciunt or sit amet consectetur adipisicing elit. Quae magni beatae nesciunt veritatis laboriosam!"
  ),
  createData(
    "Anderson",
    "developer",
    1200,
    "Expectation",
    "Adipisicing elit. Quae magni beatae nesciunt laboriosam! LAST"
  ),
];

export default function Table() {
  const [openModal, setOpenModal] = React.useState(false);
  const [page, setPage] = React.useState<number>(0);

  const currentRow = React.useRef<TRow>(rows[0]);

  const onPageChange = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const onClickRow = (data: TRow) => {
    currentRow.current = data;
    setOpenModal(true);
  };

  return (
    <>
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
                <TableRow key={row.id} onClick={() => onClickRow(row)}>
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
          rowsPerPage={10}
          rowsPerPageOptions={[10]}
          component="div"
          count={rows.length}
          page={page}
          onPageChange={onPageChange}
        />
      </Box>
      <Modal
        data={currentRow.current}
        open={openModal}
        setOpen={setOpenModal}
      />
    </>
  );
}
