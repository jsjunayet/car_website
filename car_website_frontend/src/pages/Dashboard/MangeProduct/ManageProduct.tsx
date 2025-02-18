import { useGetAllProductQuery } from "../../../redux/features/product/ProductApi";
import ManageTable from "../ManageOrder/ManageTable";

const ManageProduct = () => {
    const{data, isLoading}=useGetAllProductQuery(undefined)
    const handleDelete = (id:string) => {
        console.log(id);
      };
    
      // Handle Update
      const handleUpdate = (id:string) => {
        console.log(id);
      };
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
            <ManageTable data={data?.data} columns={columns} loading={isLoading} isvalue={true} onDelete={handleDelete} onUpdate={handleUpdate}/>
            </div>
    );
};

export default ManageProduct;