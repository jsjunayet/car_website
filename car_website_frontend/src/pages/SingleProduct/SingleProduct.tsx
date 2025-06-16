/* eslint-disable @typescript-eslint/no-explicit-any */
import { Check, Star } from "lucide-react";
import { useParams } from "react-router-dom";
import ProductDetailsSkeleton from "../../AllSkeleton/ProductDetailsSkeleton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  useGetAllProductQuery,
  useGetSingleProductQuery,
} from "../../redux/features/product/ProductApi";
import ProductCard from "../../share/Cards/ProductCard";
import ProductDetails from "./ProductDetails";
import ProductSlider from "./ProductSlider";
const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id);
  const { data: product } = useGetAllProductQuery({
    category: "",
    priceRange: "",
    search: "",
    inStock: "",
  });
  const products = product?.data?.filter(
    (item: any) => item.category === data?.data?.category
  );
  const features = [
    "Rear-Engine Layout",
    "Sport Chrono Package",
    "PASM",
    "Sport Exhaust",
  ];
  const specifications = {
    Engine: "3.0L Twin-Turbo I6",
    Horsepower: "335 HP",
    Torque: "330 lb-ft",
    "Top Speed": "155 mph",
    Acceleration: "5.3 seconds (0-60mph)",
  };
  const reviews = [
    {
      id: "1",
      userId: "1",
      userName: "John Smith",
      rating: 5,
      comment: "Excellent SUV with amazing performance!",
      date: "2024-01-15",
    },
  ];
  if (isLoading) return <ProductDetailsSkeleton />;

  return (
    <div className=" max-w-7xl mx-auto px-2 md:px-0 pt-44">
      <div className="flex flex-col items-center justify-center w-full my-10 lg:flex-row lg:items-start md:gap-20">
        <div className="w-full lg:w-[50%] overflow-hidden">
          <ProductSlider images={data?.data?.images} />
        </div>
        <div className="w-full  lg:w-[50%]">
          <ProductDetails productDetails={data?.data} />
        </div>
      </div>
      <div className="my-16">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>About {data?.data.model}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {data?.data.description}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(specifications).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between py-2 border-b"
                    >
                      <span className="font-medium text-gray-900">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                {reviews.length > 0 ? (
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b pb-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">
                              {review.userName}
                            </span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">
                            {review.date}
                          </span>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    No reviews yet. Be the first to review this vehicle!
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div>
        <h2 className="md:text-4xl text-2xl font-semibold mb-5">
          You Might Also Like
        </h2>
        <Carousel className="w-full max-w-7xl mx-auto mb-10">
          <CarouselContent>
            {products?.map((review: any) => (
              <CarouselItem
                key={review._id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <ProductCard product={review} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white shadow-lg hover:bg-gray-50 border-0 -left-12" />
          <CarouselNext className="bg-white shadow-lg hover:bg-gray-50 border-0 -right-12" />
        </Carousel>
      </div>
    </div>
  );
};

export default SingleProduct;
