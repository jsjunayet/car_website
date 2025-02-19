// import QueryBuilder from '../../utilitiy/QueryBuilder';
import { CarInterface } from './Car.Interface';
import { CarModel } from './Car.Model';

const CreateCarService = async (Car: CarInterface) => {
  const result = await CarModel.create(Car);
  return result;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetCarService = async (query: Record<string, unknown>) => {
  // const filters = {};

  // if (query?.categories) {
  //   filters.category = { $in: query.categories.split(",") };
  // }

  // if (query?.priceRange) {
  //   const [minPrice, maxPrice] = query.priceRange.split(",").map((price) => 
  //     parseFloat(price.replace("$", "").replace("-", "").trim())
  //   );
  //   filters.price = { $gte: minPrice, $lte: maxPrice };
  // }

  // if (query?.search) {
  //   filters.name = { $regex: query.search, $options: "i" };
  // }

  // if (query?.models) {
  //   filters.model = { $in: query.models.split(",") };
  // }

  // if (query?.brands) {
  //   filters.brand = { $in: query.brands.split(",") };
  // }

  // if (query?.availability !== undefined) {
  //   filters.availability = query.availability === "true";
  // }

  const result = await CarModel.find();

  return result
};

const GetSingleCarService = async (id: string) => {
  const result = await CarModel.findOne({ _id: id });
  return result;
};
const DeletedCarService = async (id: string) => {
  const result = await CarModel.findByIdAndDelete({ _id: id });
  return result;
};
const updateCarService = async (id: string, updatedData: object) => {
  console.log(id, updatedData);
  const result = await CarModel.findByIdAndUpdate(
    id,
    { $set: updatedData },
    { new: true },
  );
  return result;
};

export const CarServices = {
  CreateCarService,
  GetCarService,
  GetSingleCarService,
  updateCarService,
  DeletedCarService,
};
