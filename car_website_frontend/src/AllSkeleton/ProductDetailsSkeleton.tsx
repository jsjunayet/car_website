
const ProductDetailsSkeleton = () => {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center w-full my-10 lg:flex-row lg:items-start md:gap-20">
          {/* Image Skeleton */}
          <div className="w-full lg:w-[50%] overflow-hidden">
            <div className="h-[350px] sm:h-[480px] max-w-[610px] sm:max-w-[580px] bg-gray-200 animate-pulse rounded-lg" />
            <div className="flex gap-2 mt-2">
              {[...Array(4)].map((_, idx) => (
                <div key={idx} className="w-[140px] h-20 bg-gray-200 animate-pulse rounded-md" />
              ))}
            </div>
          </div>
          
          {/* Product Details Skeleton */}
          <div className="w-full lg:w-[50%] space-y-4">
            <div className="h-6 bg-gray-200 animate-pulse w-32 rounded-md" />
            <div className="h-8 bg-gray-300 animate-pulse w-56 rounded-md" />
            <div className="h-4 bg-gray-200 animate-pulse w-40 rounded-md" />
            <div className="h-8 bg-gray-300 animate-pulse w-24 rounded-md" />
            <div className="h-20 bg-gray-200 animate-pulse w-full rounded-md" />
            <div className="h-12 bg-gray-300 animate-pulse w-full rounded-md" />
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductDetailsSkeleton;