/* eslint-disable no-constant-condition */
import { Button } from "../../components/ui/button";

const ProductDetails = () => {
    return (
        <div>
          {/* product name */}
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase text-primary">
              {"category"}
            </p>
            <h1 className="text-2xl font-bold">{"title"}</h1>
          </div>
          {/* price, and rating,*/}
          <div className="space-y-2">
            <div className="flex items-center justify-start gap-3">
              <p className=" text-xs  text-primary border-primary">
                {true ? `In Stock(${"stock"})` : 'Out Stock'}
              </p>
            </div>
            <div className="flex items-end gap-1">
              <h1 className="text-2xl font-bold">${200}</h1>{' '}
              <p className="text-sm font-semibold text-gray-400">
                <span className="line-through">${500}</span>{' '}
                <span className="text-primary "> ({20}% off)</span>
              </p>
            </div>
            <div className="text-sm ">
              <h3 className="text-sm text-gray-500 font-medium max-w-[400px]">
                {"description"}
              </h3>
            </div>
          </div>
  
      
          <div className="">
          
            <Button
              type="submit"
              name="action"
              value="buyNow"
              className="flex justify-center items-center hover:text-white gap-2 px-[40px] py-3 text-sm"
            >
              Buy Now
            </Button>
          </div>
      </div>
    );
};

export default ProductDetails;