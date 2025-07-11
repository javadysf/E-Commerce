import Interceptor from "./Interceptor";

export const getProducts = async () => {
  const res = await Interceptor.get("/products");
  return res.data;
};

export const getProductById = async (id: string | number) => {
  const res = await Interceptor.get(`/products/${id}`);
  return res.data;
}; 