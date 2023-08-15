interface CardProps {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  category,
  price,
}) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <img src={image} alt={title} className="object-contain h-40 mb-4" />
      <div>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-sm text-gray-400 mb-2">{category}</p>
        <p className="text-lg font-semibold text-indigo-600">${price}</p>
      </div>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-md mt-4">
        Buy
      </button>
    </div>

  );
};

export default Card;
