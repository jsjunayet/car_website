import { useGetAllOrderQuery } from "../../../redux/features/Order/OrderApi";
import ManageTable from "./ManageTable";

const ManageOrder = () => {
    const {data, isLoading}= useGetAllOrderQuery(undefined)
    console.log(data);
    const handleDelete = (id:string) => {
        console.log(id);
      };
    
      // Handle Update
      const handleUpdate = (id:string) => {
        console.log(id);
      };
    const columns = [
        { label: "Order ID", value: "_id" },
        { label: "Product Brand", value: "car.brand" },
        { label: "User Email", value: "email" },
        { label: "Phone", value: "phone" },
        { label: "Price", value: "totalPrice" },
        { label: "Status", value: "status" },
        { label: "Transaction ID", value: "transaction.id" },
      ];
      
    return (
        <div className=" m-6">
            <ManageTable data={data?.data} columns={columns} loading={isLoading} isvalue={false} onDelete={handleDelete} onUpdate={handleUpdate}/>
        </div>
    );
};

export default ManageOrder;