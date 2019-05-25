import { api } from "./index";

export const Read = async url => {
  const data = await api.get(`${url}`);
  console.log(data);
  return data;
};

export const Create = async (url, params) => {
  const data = await api.post(`${url}`, params);

  return data;
};

export const Delete = async (url, id) => {
  const data = await api.delete(`${url}`, { id: id });

  return data;
};

export const Update = async (url, data) => {
  const resp = await api.update(url, data);

  return resp;
};
