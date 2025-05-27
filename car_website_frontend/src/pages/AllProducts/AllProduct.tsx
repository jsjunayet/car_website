import { Cross } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProductCardSkeleton from "../../AllSkeleton/ProductCardSkeleton";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "../../components/ui/drawer";
import { Input } from "../../components/ui/input";
import { useGetAllProductQuery } from "../../redux/features/product/ProductApi";
import ProductCard from "../../share/Cards/ProductCard";
import { DynamicSelect } from "./DynamicSelect";
import FilterComponent from "./FilterComponent";

const AllProduct: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isStock, setIsStock] = useState<string | undefined>(undefined);
  const [sortOrder, setSortOrder] = useState<string>("");

  const [searchParams] = useSearchParams();
  const searchQueryFormNavbar = searchParams.get("search") || "";
  const navigate = useNavigate();

  const { data, isFetching, isError } = useGetAllProductQuery({
    category: selectedCategory,
    priceRange: selectedPriceRange,
    search: searchQuery || searchQueryFormNavbar,
    inStock: isStock,
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedCategory,
    selectedPriceRange,
    isStock,
    searchQuery,
    searchQueryFormNavbar,
  ]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePriceRangeChange = (priceRange: string) => {
    setSelectedPriceRange(priceRange);
  };

  const handleStockChange = () => {
    setIsStock((prev) =>
      prev === undefined ? "true" : prev === "true" ? "false" : undefined
    );
  };

  const handleResetFilters = () => {
    setSelectedCategory("");
    setSelectedPriceRange("");
    setSearchQuery("");
    setIsStock(undefined);
    setSortOrder("");
    navigate("/allproduct", { replace: true });
  };

  const categories = [
    { label: "Sedan", value: "Sedan" },
    { label: "SUV", value: "SUV" },
    { label: "Truck", value: "Truck" },
    { label: "Coupe", value: "Coupe" },
  ];

  const priceRanges = [
    "0-50",
    "50-100",
    "100-200",
    "200 - 1000",
    "1000 - 10000",
    "10000-100000",
  ];

  const allProducts = data?.data || [];

  const sortedProducts = [...allProducts].sort((a, b) => {
    if (sortOrder === "low-to-high") return a.price - b.price;
    if (sortOrder === "high-to-low") return b.price - a.price;
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="max-w-7xl mx-auto my-5 md:my-10 pt-36">
      <div className="relative items-center justify-between gap-2 mb-5 rounded-lg md:flex md:border md:gap-10 md:p-5">
        <div className="flex items-center gap-5">
          <h3 className="hidden md:block text-xl font-semibold">
            Our Products
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <div className="block md:hidden">
            <DynamicSelect
              className="w-[220px]"
              options={["Low to high", "High to low"]}
              placeholder="Sort by price"
              onChange={(value: string) => {
                if (value === "Low to high") setSortOrder("low-to-high");
                else if (value === "High to low") setSortOrder("high-to-low");
                else setSortOrder("");
              }}
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
                      onChange={(e) => setSearchQuery(e.target.value)}
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
                    checked={isStock === "true"}
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
              options={["Low to high", "High to low"]}
              placeholder="Sort by price"
              onChange={(value: string) => {
                if (value === "Low to high") setSortOrder("low-to-high");
                else if (value === "High to low") setSortOrder("high-to-low");
                else setSortOrder("");
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="sticky top-36 hidden h-full p-5 overflow-y-auto rounded-lg md:block w-52 border shadow-md">
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
              checked={isStock === "true"}
              onChange={handleStockChange}
            />
            <label>In Stock</label>
          </div>
        </div>

        <div className="grid items-start justify-between w-full grid-cols-1 gap-5 pb-10 md:ml-5 justify-items-center lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
          {isFetching ? (
            Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          ) : isError || !allProducts ? (
            <h3 className="flex items-center font-semibold col-span-3 justify-center min-h-[50vh] w-full">
              No products available.
            </h3>
          ) : paginatedProducts.length === 0 ? (
            <h3 className="flex items-center font-semibold col-span-3 justify-center min-h-[50vh] w-full">
              No products found for the selected filters.
            </h3>
          ) : (
            paginatedProducts.map((product: any) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </div>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-3">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded border ${
                currentPage === i + 1 ? "bg-black text-white" : "bg-white"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default AllProduct;
