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
    <div className="grid grid-cols-3">
      {data?.map((product: IProduct) => (
        <div key={product.id}>
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
