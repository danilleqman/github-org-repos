import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.github.com",
});

export const orgAPI = {
  getRepos({ org, page }) {
    return instance.get(`/orgs/${org}/repos?per_page=10&page=${page}`);
  },
  getOrgInfo({ org }) {
    return instance.get(`/orgs/${org}`);
  },
};
