import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  getNationalities,
  getByNationality,
  create,
} from "../../Services/Student.service";

const initialState = {
  nationalities: [],
  createRes: [],
  isSuccess: false,
  message: "",
  loading: false,
  data: [],
  loadingFetch: false,
  isFetchSuccess: false,
  fetchMessage: "",
};

type nationality = {
  nationality: String;
};

type student = {
  firstName: string;
  lastName: string;
  age: number;
  nationality: string;
};

export const createStudent = createAsyncThunk(
  "students/create",
  async (data: student, { rejectWithValue }) => {
    try {
      const res = await create(data);
      return res.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getAllNationalities = createAsyncThunk(
  "students/getAllNationalities",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await getNationalities();
      return res;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getStudentsByNationality = createAsyncThunk(
  "students/getByNationality",
  async (data: nationality, { rejectWithValue }) => {
    try {
      const res = await getByNationality(data);
      return res;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getStudentsData = createAsyncThunk(
  "/",
  async (arg, { rejectWithValue }) => {
    try {
      const data = await axios.get("http://localhost:8081/init");
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const StudentSlice = createSlice({
  name: "students",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStudentsByNationality.pending, (state, { payload }) => {
      state.loadingFetch = true;
    });

    builder.addCase(
      getStudentsByNationality.fulfilled,
      (state, { payload }) => {
        state.loadingFetch = false;
        state.data = payload?.data["students"];
        state.isFetchSuccess = true;
      }
    );

    builder.addCase(getStudentsByNationality.rejected, (state, { payload }) => {
      state.loadingFetch = false;
      state.fetchMessage = "Failed to get response from server";
      state.isFetchSuccess = false;
    });

    builder.addCase(getAllNationalities.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(getAllNationalities.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.nationalities = payload?.data;
      state.isSuccess = true;
    });

    builder.addCase(getAllNationalities.rejected, (state, { payload }) => {
      state.loading = false;
      state.message = "Failed to get response from server";
      state.isSuccess = false;
    });

    builder.addCase(createStudent.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.createRes = payload?.data;
      state.isSuccess = true;
    });
  },
});

export default StudentSlice;
