import React, { useState } from "react";
import FilterComponent from "./FilterComponent"; // Filter component for categories and price ranges
import { useGetAllProductQuery } from "../../redux/features/product/ProductApi";
import ProductCardSkeleton from "../../AllSkeleton/ProductCardSkeleton";
import ProductCard from "../../share/Cards/ProductCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger } from "../../components/ui/drawer";
import { FaFilter } from "react-icons/fa6";
import { Input } from "../../components/ui/input";
import { IoIosSearch } from "react-icons/io";
import { Cross } from "lucide-react";
import { DynamicSelect } from "./DynamicSelect";

const AllProduct: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(""); 
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>(""); 
  const [searchQuery, setSearchQuery] = useState<string>(""); 
  const [isStock, setIsStock] = useState<string | undefined>(undefined); 
  const [searchParams] = useSearchParams();
  const searchQueryFormNavbar = searchParams.get("search") || "";
  const navigate = useNavigate();
 const [sortBy, setSortBy] = useState<string>("asc"); 
  const { data,  isFetching, isError } = useGetAllProductQuery({
    category: selectedCategory,
    priceRange: selectedPriceRange,
    search: searchQuery || searchQueryFormNavbar,
    inStock: isStock,
  });
  console.log(selectedCategory, selectedPriceRange);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category); 
  };

  const handlePriceRangeChange = (priceRange: string) => {
    setSelectedPriceRange(priceRange); 
  };

  const handleSortChange = (value: string) => {
    setSortBy(value); 
  };

  const handleStockChange = () => {
    setIsStock((prev) => (prev === undefined ? "true" : prev === "true" ? "false" : undefined));
  }; 

  const handleResetFilters = () => {
    setSelectedCategory("");
    setSelectedPriceRange("");
    setSearchQuery("");
    setIsStock(undefined);
    setSortBy("asc");
    navigate("/allproduct", { replace: true });
  };

  const categories = [
    { label: "Sedan", value: "Sedan" },
    { label: "SUV", value: "SUV" },
    { label: "Truck", value: "Truck" },
    { label: "Coupe", value: "Coupe" },
  ];

  const priceRanges = ["0-50", "50-100", "100-200", "200 - 1000", "1000 - 10000", "10000-100000"];

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
                      placeholder="Search by name or brand"
                      onChange={e => setSearchQuery(e.target.value)}
                      value={searchQuery}
                    />
                    <IoIosSearch className="absolute right-2 text-2xl text-gray-500 bottom-[6px] pointer-events-none z-10" />
                  </div>
                </DrawerHeader>
                <FilterComponent
            title="Categories"
            options={categories}
            selectedOptions={selectedCategory}
            onChange={handleCategoryChange}
            filterType="category"
          />
          <FilterComponent
            title="Price Range"
            options={priceRanges}
            selectedOptions={selectedPriceRange}
            onChange={handlePriceRangeChange}
            filterType="price"
          />
             <div className="flex gap-2 my-2">
            <input
              type="checkbox"
              checked={isStock}
              onChange={handleStockChange}
            />
            <label>In Stock</label>
          </div>
                <DrawerFooter>
                  <button
                    onClick={handleResetFilters}
                    className="relative px-5 bg-slate-50 border rounded-md group"
                  >
                    Reset
                    <Cross className="absolute invisible font-bold text-red-500 -top-1.5 -right-1.5 bg-white rounded-full p-0.5 group-hover:visible size-3" />
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
        <div className="sticky top-0 hidden h-full p-5 overflow-y-auto rounded-lg md:block w-52 border shadow-md">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-semibold">Filters</h4>
            <button
              onClick={handleResetFilters}
              className="relative h-5 px-2 text-xs bg-white border rounded-md group"
            >
              Reset
              <Cross className="absolute invisible font-bold text-red-500 -top-1.5 -right-1.5 bg-white rounded-full p-0.5 group-hover:visible size-3" />
            </button>
          </div>
          <FilterComponent
            title="Categories"
            options={categories}
            selectedOptions={selectedCategory}
            onChange={handleCategoryChange}
            filterType="category"
          />
          <FilterComponent
            title="Price Range"
            options={priceRanges}
            selectedOptions={selectedPriceRange}
            onChange={handlePriceRangeChange}
            filterType="price"
          />
             <div className="flex gap-2 my-2">
            <input
              type="checkbox"
              checked={isStock}
              onChange={handleStockChange}
            />
            <label>In Stock</label>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid items-start justify-between w-full grid-cols-1 gap-5 pb-10 md:ml-5 justify-items-center lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
  {isFetching ? (
    // Skeleton loader while loading products
    Array.from({ length: 8 }).map((_, index) => (
      <ProductCardSkeleton key={index} />
    ))
  ) : isError || !data || !data.data ? (
    <h3 className="flex items-center font-semibold col-span-3 justify-center min-h-[50vh] w-full">
      No products available.
    </h3>
  ) : data.data.length === 0 ? (
    <h3 className="flex items-center font-semibold col-span-3 justify-center min-h-[50vh] w-full">
      No products found for the selected filters.
    </h3>
  ) : (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data.data.map((product: any) => (
      <ProductCard key={product._id} product={product} />
    ))
  )}
</div>
      </div>
    </section>
  );
};

export default AllProduct;
