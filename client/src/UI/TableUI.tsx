import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { TVacancy } from "../types";
import { useEffect, useState } from "react";
import { useErrorProvider } from "../components/ErrorProvider/hooks";

type TTableUIProps = {
  onClickCreateVacancy: () => void;
  isLoadingVacancy: boolean;
  onClickVacancy: (data: TVacancy) => void;
  vacancies: TVacancy[] | undefined;
};

export const TableUI = ({
  onClickCreateVacancy,
  isLoadingVacancy,
  onClickVacancy,
  vacancies,
}: TTableUIProps) => {
  const [page, setPage] = useState<number>(0);
  const [visibleRows, setVisibleRows] = useState(vacancies?.slice(10) || []);

  useEffect(() => {
    setPage(0);
    if (vacancies?.length)
      setVisibleRows(
        vacancies.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      );
  }, [vacancies]);

  const rowsPerPage = 10;

  const onPageChange = (_: unknown, newPage: number) => {
    const newVisibleRows =
      vacancies?.slice(
        newPage * rowsPerPage,
        newPage * rowsPerPage + rowsPerPage
      ) || [];

    setVisibleRows(newVisibleRows);
    setPage(newPage);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "1080px", margin: "0 auto" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <caption>
            <Button
              variant="outlined"
              startIcon={<AddIcon color="success" />}
              onClick={onClickCreateVacancy}>
              Create
            </Button>
          </caption>
          <TableHead>
            <TableRow>
              <TableCell align="left">Компания</TableCell>
              <TableCell align="center">Вакансия</TableCell>
              <TableCell align="center" sx={{ minWidth: "150px" }}>
                Зарплатная вилка
              </TableCell>
              <TableCell align="center" sx={{ minWidth: "150px" }}>
                Статус отклика
              </TableCell>
              <TableCell align="right">Заметка</TableCell>
            </TableRow>
          </TableHead>
          {isLoadingVacancy ? (
            <caption>"Loading..."</caption>
          ) : (
            <TableBody>
              {visibleRows?.map((row) => (
                <TableRow key={row._id} onClick={() => onClickVacancy(row)}>
                  <TableCell align="left">{row.company}</TableCell>
                  <TableCell align="center">{row.vacancy}</TableCell>
                  <TableCell align="center">{row.salary}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                  <TableCell align="left">{row.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
        component="div"
        count={vacancies?.length || 0}
        page={page}
        onPageChange={onPageChange}
      />
    </Box>
  );
};
