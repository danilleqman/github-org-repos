import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrgInfoSelector,
  getPageSelector,
  getReposSelector,
} from "../../redux/org/selectors";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import LinearProgress from "@material-ui/core/LinearProgress";
import Pagination from "@material-ui/lab/Pagination";
import {
  isErrorSelector,
  isLoaderSelector,
} from "../../redux/loading/selectors";
import { fetchRepos, setPage } from "../../redux/org";

export const CardRepos = () => {
  const dispatch = useDispatch();
  const repos = useSelector(getReposSelector);
  const loading = useSelector(isLoaderSelector);
  const page = useSelector(getPageSelector);
  const orgInfo = useSelector(getOrgInfoSelector);
  const error = useSelector(isErrorSelector);

  if (loading) {
    return <LinearProgress />;
  }
  if (error) {
    return <></>;
  }

  if (repos.length) {
    return (
      <div>
        {repos.map((value: any) => {
          return (
            <Card key={value.id} style={{ margin: "10px" }}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {value.name}
                </Typography>
                <Typography>
                  Url:
                  <a href={value.html_url}>{value.html_url}</a>
                </Typography>
                <Typography>
                  <Icon>call_split</Icon>
                  {value.forks}
                  <Icon>visibility</Icon>
                  {value.watchers}
                  <Icon>star_rate</Icon>
                  {value.stargazers_count}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
        {orgInfo.public_repos > 10 ? (
          <Pagination
            count={Math.ceil(orgInfo.public_repos / 10)}
            defaultPage={page}
            boundaryCount={2}
            onChange={(e, n) => {
              dispatch(setPage(n));
              dispatch(fetchRepos());
            }}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
  return <></>;
};
