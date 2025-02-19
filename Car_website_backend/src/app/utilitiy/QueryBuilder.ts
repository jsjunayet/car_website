import { Query } from 'mongoose';
class QueryBuilder<T> {
  public QueryModel: Query<T[], T>;
  public Query: Record<string, unknown>;
  constructor(QueryModel: Query<T[], T>, Query: Record<string, unknown>) {
    this.QueryModel = QueryModel;
    this.Query = Query;
  }

  search(searchArray: string[]) {
    const search = this.Query.search || '';
    this.QueryModel = this.QueryModel.find({
      $or: searchArray.map((field) => ({
        [field]: { $regex: search, $options: 'i' },
      })),
    });
    return this;
  }
  sort() {
    const sortBy = (this.Query.sortBy as string) || 'createdAt';
    const sortOrder = this.Query.sortOrder === 'asc' ? 1 : -1;
    this.QueryModel = this.QueryModel.sort({ [sortBy]: sortOrder });
    return this;
  }
  filter() {
    const objquery = { ...this.Query };
    const ExculsiveFeild = ['search', 'sortBy', 'sortOrder', 'priceRange'];
    ExculsiveFeild.forEach((el) => delete objquery[el]);
  
    if (this.Query.priceRange) {
      const [min, max] = (this.Query.priceRange as string).split('-').map(Number);
      objquery['price'] = { $gte: min, $lte: max };
    }
  
    this.QueryModel = this.QueryModel.find(objquery);
    return this;
  }
  
}
export default QueryBuilder;
