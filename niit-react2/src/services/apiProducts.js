import { BASE_URL } from "./config";

export async function createProduct(formData) {
  try {
    const res = await fetch(BASE_URL + "/products", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      const data = await res.json();

      return data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getAllProduct(page, size) {
  try {
    const res = await fetch(BASE_URL + `/products?page=${page}&size=${size}`);

    if (res.ok) {
      const data = await res.json();

      return data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getProductById(id) {
  try {
    const res = await fetch(BASE_URL + `/products/${id}`);

    if (res.ok) {
      const data = await res.json();

      return data;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}