import { AxiosError } from "axios";
import axiosInstance from "../config/axiosInstance";

export const restFullAPI = {
  addProduct: async (data) => {
    try {
      const response = await axiosInstance.post("/product", data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) throw new Error(AxiosError);
      throw new Error(error);
    }
  },

  getPost: async () => {
    try {
      const response = await axiosInstance.get(`/product/`);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) throw new Error(AxiosError);
      throw new Error(error);
    }
  },
  editProduct: async (id, data) => {
    try {
      const response = await axiosInstance.put(`/product/${id}`, data);
      console.log("response edit =>", response);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) throw new Error(AxiosError);
      throw new Error(error);
    }
  },
  deleteProduct: async (id) => {
    try {
      const response = await axiosInstance.delete(`/product/${id}`);
      console.log("response delete =>", response);
    } catch (error) {
      if (error instanceof AxiosError) throw new Error(AxiosError);
      throw new Error(error);
    }
  },
};
