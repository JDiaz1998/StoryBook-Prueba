import { Grid, Typography } from "@mui/material";
import { AutoStories } from "@mui/icons-material";
import React from "react";

export const AuthLayout = ({
  children,
  header = "",
  title = "",
  footer = "",
}) => {
  return (
    <Grid container>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="start"
        justifyContent="start"
        sx={{ padding: 2 }}
        fullWidth
      >
        <Typography variant="h2" sx={{ fontWeight: 700 }}>
          {header}
        </Typography>
      </Grid>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
      >
        <Grid
          item
          className="box-shadow"
          xs={3}
          sx={{
            width: { sm: 450 },
            backgroundColor: "white",
            padding: 3,
            borderRadius: 2,
          }}
        >
          <Typography variant="h5">{title}</Typography>

          {children}
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="end"
          justifyContent="end"
          sx={{ padding: 1 }}
          fullWidth
        >
          <AutoStories fontSize="large" sx={{ mr: 1 }} />
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            {footer}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
