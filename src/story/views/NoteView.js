import { SaveOutlined, DeleteOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { useForm } from "../../hooks/useForm";
import { setActiveTask } from "../../store/task/taskSlice";
import { startDeletingTask, startSaveTask } from "../../store/task/thunks";

export const NoteView = () => {
  const dispatch = useDispatch();

  const {
    active: task,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.task);

  const { title, body, date, onInputChange, formState } = useForm(task);

  const dateString = useMemo(() => {
    const newDate = new Date(date);

    return newDate.toLocaleString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveTask(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  const onSaveTask = () => {
    dispatch(startSaveTask());
  };

  const onDelete = () => {
    dispatch(startDeletingTask());
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={28} fontWeight="ligth">
          {" "}
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          disabled={isSaving}
          onClick={onSaveTask}
          color="primary"
          sx={{ padding: 2 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese nombre de la Tarea"
          label="Título"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Descripción de la Tarea"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      <Grid container justifyContent="end">
        <Button onClick={onDelete} sx={{ mt: 2 }} color="error">
          <DeleteOutlined />
          Borrar
        </Button>
      </Grid>
    </Grid>
  );
};
