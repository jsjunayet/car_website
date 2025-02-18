import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table";
import TableSkeleton from "../../../AllSkeleton/DashbordTableSkeleton";
import { toast } from "sonner";

const ManageTable = ({ data, loading, columns, onDelete, onUpdate, isvalue }) => {
  if (loading) {
    return <TableSkeleton />;
  }

  return (
    <div className="bg-white border rounded-md">
      {data?.length > 0 ? (
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              {columns?.map((column, idx) => (
                <TableHead key={idx} className="text-black">
                  {column.label}
                </TableHead>
              ))}
              <TableHead className="text-black">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-gray-500">
            {data?.map((item, index) => (
              <TableRow key={index}>
                {columns?.map((column, idx) => (
                  <TableCell key={idx}>
                    {column.value.split('.').reduce((o, k) => (o?.[k] ? o[k] : ''), item)}
                  </TableCell>
                ))}
                <TableCell className="flex gap-2">
                  {/* Update Button */}
                  <button
                    onClick={() => onUpdate(item._id)}
                    className="px-2 py-1 text-blue-500 transition border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
                  >
                    Update
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => {
                        onDelete(item._id);
                    }}
                    className="px-2 py-1 text-red-500 transition border border-red-500 rounded-md hover:bg-red-500 hover:text-white"
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-center p-4">No Data Available</p>
      )}
    </div>
  );
};

export default ManageTable;
