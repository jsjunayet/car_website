const ProductCardSkeleton = () => {
    return (
        <div className="relative w-full xsm:h-min h-min transition-all duration-500 sm:p-3 p-2 mx-auto hover:border-primary shadow-lg xl:max-w-full max-w-xs rounded-lg bg-white border-2 border-transparent animate-pulse">
            {/* Discount Badge Skeleton */}
            <div className="absolute px-2 py-1 text-xs bg-gray-300 rounded-full top-5 left-5 w-16 h-5"></div>
            
            <div className="group">
                {/* Image Skeleton */}
                <div className="object-cover w-full rounded-md h-52  bg-gray-300"></div>
                
                {/* Product Name Skeleton */}
                <div className="w-full mt-2 h-4 bg-gray-300 rounded"></div>
                <div className="w-3/4 mt-1 h-4 bg-gray-300 rounded"></div>
                
                {/* Divider Skeleton */}
                <div className="h-[1.6px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-l from-transparent to-primary"></div>
                
                {/* Pricing Section Skeleton */}
                <div className="flex items-center justify-between sm:mt-2 mt-1 text-sm">
                    <div className="flex items-end gap-2">
                        <div className="w-16 h-6 bg-gray-300 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardSkeleton;
