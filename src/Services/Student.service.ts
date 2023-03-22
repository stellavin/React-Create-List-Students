import http from "./Axios.service";

type student = {
  firstName: string;
  lastName: string;
  age: number;
  nationality: string;
};

export const create = (data: student) => {
  console.log(data);
  return http.post("/", { params: data });
};

export const getAll = () => {
  return http.get("/");
};

export const getByNationality = (data: any) => {
  return http.get("/", { params: data });
};

export const getNationalities = () => {
  return http.get("/nationality");
};
