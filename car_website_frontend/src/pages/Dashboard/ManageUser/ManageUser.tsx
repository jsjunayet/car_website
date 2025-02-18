import { useEffect } from "react";
import { useDeleteUserMutation, useGetAllUserQuery } from "../../../redux/features/auth/authApi";
import ManageTable from "../ManageOrder/ManageTable";
import { toast } from "sonner";

const ManageUser = () => {
    const {data, isLoading}=useGetAllUserQuery(undefined)
    const[deleteUser, { isLoading:deletedLoading, isSuccess, data:deletedData, isError, error }]=useDeleteUserMutation()
    const handleDelete = async(id:string) => {
        console.log(id);
        await deleteUser(id);
      };
      const toastId = "deleteduser";
      useEffect(() => {
        if (deletedLoading) toast.loading("Processing ...", { id: toastId });
    
        if (isSuccess) {
          toast.success(deletedData?.message, { id: toastId });
        }
    
        if (isError) toast.error(JSON.stringify(error), { id: toastId });
      }, [deletedData?.data, deletedData?.message, error, isError, deletedLoading, isSuccess]);
    const columns = [
        { label: "Name", value: "name" },
        { label: "email", value: "email" },
        { label: "role", value: "role" },
      ];
    return (
        <div className="m-6">
            <ManageTable data={data?.data} columns={columns} isvalue={'user'}  loading={isLoading} onDelete={handleDelete}/>
        </div>
    );
};

export default ManageUser;