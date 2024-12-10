import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { TStatus } from "../types";
import { MouseEventHandler } from "react";

export type TOnChangeTextField = (
  event:
    | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    | SelectChangeEvent<TStatus | string>
) => void;

type ModalUIProps = {
  open: boolean;
  handleClose: MouseEventHandler<HTMLButtonElement>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChangeTextField: TOnChangeTextField;
  company: string;
  vacancy: string;
  salary: number;
  note: string;
  status: TStatus;
  _id: string;
  onClickDeleteVacancy: () => void;
};

export const ModalUI = ({
  open,
  handleClose,
  onSubmit,
  onChangeTextField,
  company,
  vacancy,
  salary,
  note,
  status,
  _id,
  onClickDeleteVacancy,
}: ModalUIProps) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: onSubmit,
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
            onChange={onChangeTextField}>
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
        {_id ? (
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={onClickDeleteVacancy}>
            Delete
          </Button>
        ) : null}
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Accept</Button>
      </DialogActions>
    </Dialog>
  );
};
