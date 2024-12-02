import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { TRow } from "./table";
import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { TStatus } from "../types";

type IModalProps = {
  data: TRow;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function Modal({ data, open, setOpen }: IModalProps) {
  const { company, note, salary, status, vacancy } = data;
  console.log({ data });
  const handleClose = () => {
    setOpen(false);
  };
  const vacancyData = React.useRef(data);

  const handleSelectStatus = (event: SelectChangeEvent) => {
    vacancyData.current.status = event.target.value as TStatus;
  };

  const onChangeTextField = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    vacancyData.current[event.target.name] = event.target.value;
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            console.log(vacancyData.current);
            handleClose();
          },
        }}>
        <DialogContent>
          <TextField
            autoFocus
            required
            onChange={onChangeTextField}
            margin="dense"
            id="company"
            name="company"
            defaultValue={company}
            type="text"
            fullWidth
            label="Company"
            variant="outlined"
            placeholder="Company"
          />
          <TextField
            autoFocus
            required
            variant="outlined"
            label="Vacancy"
            margin="dense"
            onChange={onChangeTextField}
            id="vacancy"
            name="vacancy"
            defaultValue={vacancy}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="salary"
            variant="outlined"
            label="Salary"
            onChange={onChangeTextField}
            name="salary"
            defaultValue={salary}
            type="text"
            fullWidth
          />
          <FormControl sx={{ minWidth: 120 }}>
            <FormHelperText>Status</FormHelperText>
            <Select
              labelId="demo-simple-select-variant"
              id="demo-simple-select"
              variant="outlined"
              label="Status"
              defaultValue={status}
              onChange={handleSelectStatus}>
              <MenuItem value={"Accept"}>Accept</MenuItem>
              <MenuItem value={"Decline"}>Decline</MenuItem>
              <MenuItem value={"Expectation"}>Expectation</MenuItem>
            </Select>
          </FormControl>
          <TextField
            autoFocus
            required
            variant="outlined"
            margin="dense"
            id="note"
            onChange={onChangeTextField}
            label="Note"
            name="note"
            defaultValue={note}
            type="text"
            fullWidth
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Accept</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
