import { ArrowRight, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { mockProducts } from "../../lib/product";

const FeaturedProduct = () => {
  return (
    <div>
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        <div className="max-w-7xl mx-auto  relative">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
              Featured Collection
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Premium Vehicles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked premium cars for discerning customers who demand
              excellence in every detail
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockProducts.map((product, index) => (
              <Card
                key={product.id}
                className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-lg transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {product.originalPrice && (
                    <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600 transform hover:scale-105 transition-all duration-300">
                      Save $
                      {(product.originalPrice - product.price).toLocaleString()}
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="backdrop-blur-sm bg-white/90"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-yellow-700 ml-1">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">
                    {product.brand} • {product.year}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-green-600">
                        ${product.price.toLocaleString()}
                      </span>
                    </div>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                    >
                      <Link to={`/products/${product.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
            >
              <Link to="/products" className="flex items-center">
                View All Cars <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProduct;
