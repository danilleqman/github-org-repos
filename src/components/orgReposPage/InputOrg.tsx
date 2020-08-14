import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrgInfo, fetchRepos, setOrg, setPage } from "../../redux/org";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { getOrgInfoSelector } from "../../redux/org/selectors";

export const InputOrg = () => {
  const dispatch = useDispatch();
  const orgInfo = useSelector(getOrgInfoSelector);

  return (
    <Card>
      <Grid style={{ margin: "10px" }} container spacing={2}>
        <Grid item xs={12}>
          <p> Company name</p>
          <TextField
            required
            label="Required"
            id="org-value"
            defaultValue="github"
            onChange={(e) => dispatch(setOrg(e.target.value))}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch(setPage(1));

              dispatch(fetchRepos());
              dispatch(fetchOrgInfo());
            }}
          >
            Show repos
          </Button>
        </Grid>
        {orgInfo.blog ? (
          <Grid item xs={12}>
            <img
              src={orgInfo.avatar_url}
              style={{ width: "200px" }}
              alt={"img"}
            />
            <p> {orgInfo.description}</p>
            <p>
              Blog: <a href={orgInfo.blog}>{orgInfo.blog}</a>
            </p>
          </Grid>
        ) : (
          <></>
        )}
      </Grid>
    </Card>
  );
};
