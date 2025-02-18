import { useParams } from "react-router-dom";
import CreateProduct from "./CreateProduct";
import { useGetSingleProductQuery } from "../../../redux/features/product/ProductApi";


const UpateProduct = () => {
    const { id } = useParams();
    const {data}=useGetSingleProductQuery(id) 
    return (
        <div>
            <CreateProduct initialData={data?.data}/>
        </div>
    );
};

export default UpateProduct;