import React, { useState, useEffect } from "react";
import FilterComponent from "./FilterComponent";
import { FaFilter } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { DynamicSelect } from "./DynamicSelect";
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger } from "../../components/ui/drawer";
import { Input } from "../../components/ui/input";
import { Skeleton } from "../../components/ui/skeleton";
import { RxCross2 } from "react-icons/rx";
import ProductCard from "../../share/Cards/ProductCard";
import { useGetAllProductQuery } from "../../redux/features/product/ProductApi";
import ProductCardSkeleton from "../../AllSkeleton/ProductCardSkeleton";

interface Option {
  label: string;
  value: string;
}

const AllProduct: React.FC = () => {
      const {data, isLoading:proudctLoading}=useGetAllProductQuery(undefined)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filters, setFilters] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [products, setProducts] = useState<any[]>([]);  // State to store fetched products
  const [isLoading, setIsLoading] = useState<boolean>(false);  // Loading state
  const [isError, setIsError] = useState<boolean>(false);  // Error state

  const handleCategoryChange = (category: string) => {
    // Toggle category selection
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(item => item !== category) : [...prev, category]
    );
  };

  const handlePriceRangeChange = (priceRange: string) => {
    setSelectedPriceRange(prev => 
      prev.includes(priceRange) ? prev.filter(item => item !== priceRange) : [...prev, priceRange]
    );
  };

  const handleSortChange = (value: string) => {
    console.log(`Sort by: ${value}`);
  };

  const handleResetFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRange([]);
    setSearchQuery("");
    fetchProducts();  // Fetch products without filters
  };

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      setIsError(false);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const params: any = {
        categories: selectedCategories.join(","),  // Send categories as comma-separated values
        priceRange: selectedPriceRange.join(","),
        search: searchQuery,
      };
      console.log(params);

      // Send the request to the backend (example API)
      // const response = await axios.get("your-api-endpoint/products", { params });

      // setProducts(response.data);  // Assuming response contains the filtered products
    } catch (error) {
      setIsError(true);
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Effect to refetch products when filters change
  useEffect(() => {
    fetchProducts();
  }, [selectedCategories, selectedPriceRange, searchQuery]);

  const option: Option[] = [ { label: "Sedan", value: "Sedan" },
    { label: "SUV", value: "SUV" },
    { label: "Truck", value: "Truck" },
    { label: "Coupe", value: "Coupe" },
    { label: "Convertible", value: "Convertible" }];  // Replace with actual options
  const priceRanges: string[] = ["$0 - $50", "$50 - $100", "$100 - $200", "$200 - $1000","$1000 - $10000"];  // Replace with actual price range

  return (
    <section className=" max-w-7xl mx-auto my-5 md:my-10">
      <div className="relative items-center justify-between gap-2 mb-5 rounded-lg md:flex md:border md:gap-10 md:p-5">
        <div className="flex items-center gap-5">
          <h3 className="hidden md:block text-xl font-semibold">Our Products</h3>
          
        </div>
        <div className="flex items-center justify-between">
          <div className="block md:hidden">
            <DynamicSelect
              className="w-[220px]"
              options={['Low to high', 'High to low']}
              value={['asc', 'dsc']}
              defaultValue={'asc'}
              placeholder="Sort by price"
              onValueChange={handleSortChange}
            />
          </div>
          <div className="md:hidden">
            <Drawer direction="left">
              <DrawerTrigger asChild>
                <button className="flex items-end gap-1 p-3 bg-white border rounded-md cursor-pointer right-4 top-2 hover:bg-slate-50">
                  Filters <FaFilter className="ml-1 text-gray-500" />
                </button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <div className="relative w-[270px]">
                    <Input
                      className="z-50 pr-8 shadow-sm"
                      placeholder="Search by name"
                      onChange={e => setSearchQuery(e.target.value)}
                      value={searchQuery}
                    />
                    <IoIosSearch className="absolute right-2 text-2xl text-gray-500 bottom-[6px] pointer-events-none z-10" />
                  </div>
                </DrawerHeader>
                {option.length ? (
                  <FilterComponent
                    title="Categories"
                    options={option}
                    selectedOptions={selectedCategories}
                    onChange={handleCategoryChange}
                    filterType="category"
                  />
                ) : (
                  <Skeleton className="h-5 w-full bg-slate-200" />
                )}
                <FilterComponent
                  title="Price Range"
                  options={priceRanges}
                  selectedOptions={selectedPriceRange}
                  onChange={handlePriceRangeChange}
                  filterType="price"
                />
                <DrawerFooter>
                  <button
                    onClick={handleResetFilters}
                    className="relative px-5 bg-slate-50 border rounded-md group"
                  >
                    Reset
                    <RxCross2 className="absolute invisible font-bold text-red-500 -top-1.5 -right-1.5 bg-white rounded-full p-0.5 group-hover:visible size-3" />
                  </button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
          <div className="hidden md:block">
            <DynamicSelect
              className="w-[220px]"
              options={['Low to high', 'High to low']}
              value={['asc', 'dsc']}
              defaultValue={'asc'}
              placeholder="Sort by price"
              onValueChange={handleSortChange}
            />
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar for larger screens */}
        <div className="sticky top-0 hidden h-full p-5 overflow-y-auto rounded-lg md:block w-52 border shadow-md">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-semibold">Filters</h4>
            <button
              onClick={handleResetFilters}
              className="relative h-5 px-2 text-xs bg-white border rounded-md group"
            >
              Reset
              <RxCross2 className="absolute invisible font-bold text-red-500 -top-1.5 -right-1.5 bg-white rounded-full p-0.5 group-hover:visible size-3" />
            </button>
          </div>
          {option.length ? (
            <FilterComponent
              title="Categories"
              options={option}
              selectedOptions={selectedCategories}
              onChange={handleCategoryChange}
              filterType="category"
            />
          ) : (
            <Skeleton className="h-5 w-full bg-slate-200" />
          )}
          <FilterComponent
            title="Price Range"
            options={priceRanges}
            selectedOptions={selectedPriceRange}
            onChange={handlePriceRangeChange}
            filterType="price"
          />
        </div>

        {/* Product Grid */}
        <div className="grid items-start justify-between w-full grid-cols-1 gap-5 pb-10 md:ml-5 justify-items-center lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
          {proudctLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                // <SkeletonCard key={index} />
                <ProductCardSkeleton/>
              ))
            : isError
            ? (
                <h3 className="flex items-center font-semibold justify-center min-h-[70vh] w-full">
                  Error loading products.
                </h3>
              )
            : data?.data.map((product) => (
                <ProductCard key={product._id} product={product}/>
                // key={product.id} product={product}
              ))}
        </div>
      </div>
    </section>
  );
};

export default AllProduct;
