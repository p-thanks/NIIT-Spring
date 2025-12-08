import { BASE_URL } from "./config";

//Create Category
export async function createCategoryApi(name) {
  try {
    const res = await fetch(BASE_URL + "/categories", {
      method: "POST",
      body: name,
    });

    if (!res.ok) {
      throw new Error("Couldn't connect to server! 💀");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
