import { useEffect } from "react";
import { useDeleteProductMutation, useGetAllProductQuery } from "../../../redux/features/product/ProductApi";
import ManageTable from "../ManageOrder/ManageTable";
import { toast } from "sonner";

const ManageProduct = () => {
    const{data, isLoading}=useGetAllProductQuery({})
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    const[deleteProduct, { isLoading:deletedLoading, isSuccess, data:deletedData, isError, error }]=useDeleteProductMutation()
    const handleDelete = async(id:string) => {
        await deleteProduct(id);
      };
      const toastId = "deletedProduct";
      useEffect(() => {
        if (deletedLoading) toast.loading("Processing ...", { id: toastId });
    
        if (isSuccess) {
          toast.success(deletedData?.message, { id: toastId });
        }
    
        if (isError) toast.error(JSON.stringify(error), { id: toastId });
      }, [deletedData?.data, deletedData?.message, error, isError, deletedLoading, isSuccess]);
    
      // Handle Update
    const columns = [
        { label: "Name", value: "name" },
        { label: "brand", value: "brand" },
        { label: "Model", value: "model" },
        { label: "Category", value: "category" },
        { label: "Price", value: "price" },
        { label: "Quantity", value: "quantity" },
      ];
    return (
        <div className=" m-6">
            <ManageTable isvalue={'product'} data={data?.data} columns={columns} loading={isLoading} onDelete={handleDelete}/>
     </div>
    );
};

export default ManageProduct;