/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UploadCloud, X } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Card, CardContent } from "../../../components/ui/card";
import { useCreateProductMutation, useUpdateProductMutation } from "../../../redux/features/product/ProductApi";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
import { useNavigate } from "react-router-dom";

interface ProductFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialData?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit?: (data: any) => void;
}

const CreateProduct: React.FC<ProductFormProps> = ({ initialData }) => {
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, reset, watch } = useForm({
    defaultValues: initialData || {
      name: "",
      brand: "",
      model: "",
      year: "",
      price: "",
      category: "",
      description: "",
      quantity: "",
      images: [],
    },
  });
  useEffect(() => {
    if (initialData) {
      setValue("name", initialData.name);
      setValue("brand", initialData.brand);
      setValue("model", initialData.model);
      setValue("year", initialData.year);
      setValue("price", initialData.price);
      setValue("category", initialData.category);
      setValue("description", initialData.description);
      setValue("quantity", initialData.quantity);
      setPreviewImages(initialData.images || []);
    }
  }, [initialData, setValue]);

  const [createProduct, { isLoading }] = useCreateProductMutation();
  const [updateProduct, { isLoading: updateLoading }] = useUpdateProductMutation();  // Assuming you have this mutation
  const [previewImages, setPreviewImages] = useState<string[]>(initialData?.images || []);
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    setIsUploading(true);
    const uploadedImages: string[] = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "Clooud_Gen");

      try {
        const response = await fetch("https://api.cloudinary.com/v1_1/dztxlecbe/image/upload", { method: "POST", body: formData });
        const data = await response.json();
        uploadedImages.push(data.secure_url);
      } catch (error) {
        toast.error("Image upload failed!");
      }
    }

    setPreviewImages([...previewImages, ...uploadedImages]);
    setValue("images", [...previewImages, ...uploadedImages]);
    setIsUploading(false);
  };

  const removeImage = (url: string) => {
    const updatedImages = previewImages.filter((img) => img !== url);
    setPreviewImages(updatedImages);
    setValue("images", updatedImages);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const toastId = "createProduct";
    if (isLoading) toast.loading("Processing ...", { id: toastId });
    if (updateLoading) toast.loading("Processing ...", { id: toastId });

    try {
      if (initialData?._id) {
        // Prepare updated data
        const updatedData = {
          name: data.name,
          brand: data.brand,
          model: data.model,
          year: data.year,
          price: data.price,
          category: data.category,
          description: data.description,
          quantity: data.quantity,
          images: data.images,
        };
  
        // Update product
        const response = await updateProduct({ id: initialData._id, updatedData }).unwrap();
        navigate('/dashboard/manageProduct');
        toast.success(response.message || "Product updated successfully!");
      } else {
        // Create new product
        const response = await createProduct(data).unwrap();
        toast.success(response.message || "Product added successfully!");
      }
      reset();
      setPreviewImages([]);
    } catch (error) {
      toast.error(error?.data?.message || "Failed to submit product.");
    }
  };

  return (
    <div className="m-6">
      <Card className="md:p-4 px-0 py-4">
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="md:grid grid-cols-2 gap-4 md:space-y-0 space-y-3">
            <div>
              <Label>Car Name</Label>
              <Input placeholder="Enter car name" {...register("name", { required: "Enter product name" })} />
            </div>
            <div>
              <Label>Brand</Label>
              <Input placeholder="Enter brand name" {...register("brand", { required: "Enter brand name" })} />
            </div>
            <div>
              <Label>Model</Label>
              <Input placeholder="Enter model" {...register("model", { required: "Enter model" })} />
            </div>
            <div>
              <Label>Year</Label>
              <Input placeholder="Enter manufacturing year" type="number" {...register("year", { required: "Enter year" })} />
            </div>
            <div>
              <Label>Price</Label>
              <Input placeholder="Enter price" type="number" {...register("price", { required: "Enter price" })} />
            </div>
            <div>
              <Label>Category</Label>
              <Select
                onValueChange={(value) => setValue("category", value)}
                value={watch("category")} // ✅ Show selected value
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Sedan">Sedan</SelectItem>
                  <SelectItem value="SUV">SUV</SelectItem>
                  <SelectItem value="Truck">Truck</SelectItem>
                  <SelectItem value="Coupe">Coupe</SelectItem>
                  <SelectItem value="Convertible">Convertible</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Quantity</Label>
              <Input placeholder="Enter stock quantity" type="number" {...register("quantity", { required: "Enter quantity" })} />
            </div>
            <div>
              <Label>Description</Label>
              <Input placeholder="Enter description" {...register("description", { required: "Enter description" })} />
            </div>

            {/* ✅ Image Upload with Skeleton Loader */}
            <div className="col-span-2 border p-4 rounded-lg my-5 md:my-0">
              <Label>Upload Images</Label>
              <label className="flex items-center gap-2 cursor-pointer">
                <UploadCloud />
                <input type="file" multiple onChange={handleImageUpload} className="hidden" />
              </label>

              <div className="grid grid-cols-2 gap-2 mt-3">
                {/* ✅ Show Skeleton while Uploading */}
                {isUploading &&
                  Array(2)
                    .fill(0)
                    .map((_, index) => (
                      <div key={index} className="w-full h-32 bg-gray-200 animate-pulse rounded"></div>
                    ))}

                {/* ✅ Show Preview Images */}
                {previewImages.map((img, index) => (
                  <div key={index} className="relative w-full h-32 border rounded">
                    <img src={img} alt="Preview" className="w-full h-full object-cover rounded" />
                    <button
                      type="button"
                      className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                      onClick={() => removeImage(img)}
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ Submit Button */}
            <div className="col-span-2">
            <Button type="submit" className="w-full cursor-pointer" disabled={isLoading || updateLoading}>
                {isLoading || updateLoading ? "Processing..." : initialData ? "Update Product" : "Add Product"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateProduct;
