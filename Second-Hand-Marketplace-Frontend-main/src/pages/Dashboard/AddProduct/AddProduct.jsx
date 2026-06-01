import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../context/UserContext';
import { BASE_URL } from '../../../config';
import toast from 'react-hot-toast';

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  
  const isVerified = user?.verified; 

  const onSubmit = async (data) => {
    if (!isVerified) {
      toast.error('You must be verified as a seller to add products.');
      return;
    }

    setLoading(true);
    const product = {
      name: data.name,
      image: data.image,
      location: data.location,
      price: parseFloat(data.price),
      originalPrice: parseFloat(data.originalPrice),
      yearOfPurchase: parseInt(data.yearOfPurchase),
      condition: data.condition,
      status: 'available', 
      sellerName: user.displayName,
      sellerEmail: user.email,
      verified: isVerified,
      createdAt: new Date().toISOString(),
      category: data.category
    };

    try {
      const res = await fetch(`${BASE_URL}/products`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(product)
      });

      const result = await res.json();
      if (result.acknowledged) {
        toast.success('Product added successfully!');
        reset();
        // Redirect to My Products page
        window.location.href = '/dashboard/my-products';
      } else {
        toast.error('Failed to add product.');
      }
    } catch (error) {
      toast.error('An error occurred while adding the product.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">Add a New Product</h2>
      {!isVerified && (
        <div className="alert alert-warning mb-4">
          <span>You need to be verified as a seller to add products. Please contact admin for verification.</span>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
        <div>
          <input
            type="text"
            {...register("name", { required: "Product name is required" })}
            placeholder="Product Name"
            className="input w-full"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>

        <div>
          <input
            type="text"
            {...register("image", { required: "Image URL is required" })}
            placeholder="Image URL"
            className="input w-full"
            defaultValue="/src/assets/images/product preview.webp"
          />
          {errors.image && <span className="text-red-500 text-sm">{errors.image.message}</span>}
        </div>

        <div>
          <select
            {...register("location", { required: "Location is required" })}
            className="select select-primary w-full"
          >
            <option value="">Select Location</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Khulna">Khulna</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Barisal">Barisal</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Mymensingh">Mymensingh</option>
          </select>
          {errors.location && <span className="text-red-500 text-sm">{errors.location.message}</span>}
        </div>

        <div>
          <input
            type="number"
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^(\+88)?01[3-9]\d{8}$/,
                message: "Please enter a valid Bangladeshi mobile number"
              }
            })}
            placeholder="Mobile Number"
            className="input w-full"
          />
          {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile.message}</span>}
        </div>

        <div>
          <textarea
            {...register("description", { required: "Description is required" })}
            placeholder="Product Description"
            className="textarea textarea-primary w-full"
            rows="4"
          />
          {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
        </div>

        <div>
          <input
            type="number"
            {...register("price", {
              required: "Selling price is required",
              min: { value: 1, message: "Price must be greater than 0" }
            })}
            placeholder="Selling Price"
            className="input w-full"
          />
          {errors.price && <span className="text-red-500 text-sm">{errors.price.message}</span>}
        </div>

        <div>
          <input
            type="number"
            {...register("originalPrice", {
              required: "Original price is required",
              min: { value: 1, message: "Price must be greater than 0" }
            })}
            placeholder="Original Price"
            className="input w-full"
          />
          {errors.originalPrice && <span className="text-red-500 text-sm">{errors.originalPrice.message}</span>}
        </div>

        <div>
          <input
            type="number"
            {...register("yearOfPurchase", {
              required: "Year of purchase is required",
              min: { value: 1900, message: "Year must be valid" },
              max: { value: new Date().getFullYear(), message: "Year cannot be in the future" }
            })}
            placeholder="Year of Purchase"
            className="input w-full"
          />
          {errors.yearOfPurchase && <span className="text-red-500 text-sm">{errors.yearOfPurchase.message}</span>}
        </div>

        <div>
          <select
            {...register("condition", { required: "Condition is required" })}
            className="select select-primary w-full"
          >
            <option value="">Select Condition</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
          </select>
          {errors.condition && <span className="text-red-500 text-sm">{errors.condition.message}</span>}
        </div>

        <div>
          <select
            {...register("category", { required: "Category is required" })}
            className="select select-primary w-full"
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Vehicles">Vehicles</option>
            <option value="Clothing">Clothing</option>
          </select>
          {errors.category && <span className="text-red-500 text-sm">{errors.category.message}</span>}
        </div>

        <button
          type="submit"
          className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
          disabled={!isVerified}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
