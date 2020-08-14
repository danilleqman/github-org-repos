import React from "react";

import { InputOrg } from "../components/orgReposPage/InputOrg";
import { CardRepos } from "../components/orgReposPage/CardRepos";
import Grid from "@material-ui/core/Grid";

export const OrgReposPage = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item md={3} xs={12}>
          <InputOrg />
        </Grid>{" "}
        <Grid item md={6} xs={12}>
          <CardRepos />
        </Grid>
      </Grid>
    </div>
  );
};
