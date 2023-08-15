import Card from "../../components/Card";
import { useGetAllProductsQuery } from "../../service/product/index";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

const Product = () => {
  const { data } = useGetAllProductsQuery();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 dark:bg-gray-900">
      {data?.map((product: IProduct) => (
        <div
          key={product.id}
          className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-800"
        >
          <Card
            image={product.image}
            title={product.title}
            description={product.description}
            category={product.category}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
};

export default Product;
