import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createCategoryApi } from "../services/apiCategories";
import toast from "react-hot-toast";
import ErrorInput from "../components/ErrorInput";
import { createProduct } from "../services/apiProducts";

export default function AdminPage() {
  const [categoryName, setCategoryName] = useState("");

  async function handleCreateCategory(e) {
    e.preventDefault();

    try {
      await createCategoryApi(categoryName);

      toast.success("Category created successfully!");
    } catch (error) {
      toast.error("An unknown error occured!");
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function submitData(data) {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("file", data.file[0]);

    console.log();

    try {
      await createProduct(formData);
      toast.success("Product created successfully 👍");
    } catch (error) {
      toast.error("Cound not create product 💀");
      console.log(error.message);
    }
  }

  return (
    <div className="space-y-8 p-6">
      <div className="rounded bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-bold">Create Product</h2>
        <form onSubmit={handleSubmit(submitData)} className="space-y-3">
          <input
            type="text"
            placeholder="Product Name"
            {...register("name", {
              required: "The product name is required",
              maxLength: {
                value: 15,
                message: "Product name must not exceed 15 chars",
              },
            })}
            className="w-full rounded border p-2"
          />
          {<ErrorInput message={errors.name?.message} />}
          <input
            type="text"
            placeholder="Description"
            className="w-full rounded border p-2"
            {...register("description", {
              required: "Product description is required!",
            })}
          />
          {<ErrorInput message={errors.description?.message} />}
          <input
            type="number"
            placeholder="Price"
            className="w-full rounded border p-2"
            {...register("price", {
              required: "Product price is required!",
            })}
          />
          {<ErrorInput message={errors.price?.message} />}
          <input
            type="number"
            placeholder="Discount"
            className="w-full rounded border p-2"
            {...register("discount")}
          />
          {<ErrorInput message={errors.discount?.message} />}
          <input
            type="number"
            placeholder="Quantity"
            className="w-full rounded border p-2"
            {...register("quantity", {
              required: "Product quantity is required!",
            })}
          />
          {<ErrorInput message={errors.quantity?.message} />}
          <input
            type="file"
            placeholder="Image File"
            className="w-full rounded border p-2"
            {...register("file", { value: (value) => value.target })}
          />
          {<ErrorInput message={errors.image?.message} />}
          <button className="rounded bg-blue-600 px-4 py-2 text-white">
            Save
          </button>
        </form>
      </div>

      {/* Category create */}
      <div className="rounded bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-bold">Create Category</h2>
        <form onSubmit={handleCreateCategory} className="space-y-3">
          <input
            type="text"
            placeholder="Category Name"
            className="w-full rounded border p-2"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <button className="rounded bg-green-600 px-4 py-2 text-white">
            Add
          </button>
        </form>
      </div>

      <div className="rounded bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-bold">Product List</h2>
        <table className="w-full border-collapse border text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Sample Product</td>
              <td className="border p-2">₦5000</td>
              <td className="border p-2">Edit | Delete</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="rounded bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-bold">Category List</h2>
        <table className="w-full border-collapse border text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Electronics</td>
              <td className="border p-2">Edit | Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
