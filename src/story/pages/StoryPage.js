import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { StoryLayout } from "../layout/StoryLayout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { useDispatch, useSelector } from "react-redux";
import { startNewTask } from "../../store/task/thunks";

export const StoryPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.task);

  const onClickNewTask = () => {
    dispatch(startNewTask());
  };

  return (
    <StoryLayout>
      {!!active ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        onClick={onClickNewTask}
        size="large"
        disabled={isSaving}
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </StoryLayout>
  );
};
