import { useGetSingleOrderQuery } from "../../../redux/features/Order/OrderApi";
import ManageTable from "../../Dashboard/ManageOrder/ManageTable";

const UserOrder = () => {
    const{data, isLoading}=useGetSingleOrderQuery(undefined)
    const handleDelete = async(id:string) => {
      console.log(id);
      };

  
    const columns = [
        { label: "Order ID", value: "_id" },
        { label: "Car Name", value: "car.brand" },
        { label: "User Email", value: "email" },
        { label: "Phone", value: "phone" },
        { label: "Price", value: "totalPrice" },
        { label: "Status", value: "status" },
        { label: "OrderDate", value: "orderDate" },

        { label: "Transaction ID", value: "transaction.id" },
      ];
      
    return (
        <div className=" m-6">
            <ManageTable data={data?.data} isvalue={'userOrder'} columns={columns} loading={isLoading}  onDelete={handleDelete} />
        </div>
    );
};

export default UserOrder;