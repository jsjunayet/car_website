
import { Star } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Avatar } from "../../components/ui/avatar";



const testimonials = [
  {
    name: "John Doe",
    avatar: "../../../src/assets/3d-car-with-vibrant-colors.jpg",
    review: "Amazing platform! I found my dream car at the best price.",
    rating: 5,
  },
  {
    name: "Emma Watson",
    avatar: "../../../src/assets/3d-car-with-vibrant-colors.jpg",
    review: "Great experience! The filter options made it so easy.",
    rating: 4.5,
  },
  {
    name: "Michael Smith",
    avatar: "../../../src/assets/3d-car-with-vibrant-colors.jpg",
    review: "Top-notch service and reliable listings. Highly recommended!",
    rating: 5,
  },
];

const blogs = [
  {
    title: "Top 5 Cars to Buy in 2024",
    image: "../../../src/assets/3d-car-with-vibrant-colors.jpg",
    link: "/blogs/top-5-cars",
  },
  {
    title: "How to Maintain Your Car Like a Pro",
    image: "../../../src/assets/3d-car-with-vibrant-colors.jpg",
    link: "/blogs/car-maintenance",
  },
];

export default function ExtraSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        {/* Testimonials */}
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-4 shadow-md rounded-2xl bg-white">
              <CardContent className="flex flex-col items-center text-center">
              <Avatar image={testimonial.avatar} className="size-16 mb-4" />
              <p className="text-lg font-medium">{testimonial.name}</p>
                <p className="text-gray-600 mt-2">{testimonial.review}</p>
                <div className="flex mt-2">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <Star key={i} className="text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Blog Section */}
      <div className="container mx-auto px-4 mt-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <Card key={index} className="overflow-hidden shadow-md rounded-2xl">
              <img
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <CardContent className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <Button variant="outline" asChild>
                  <a href={blog.link}>Read More</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
