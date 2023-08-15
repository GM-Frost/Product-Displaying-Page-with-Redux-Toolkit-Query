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
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={category} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>{price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Product Page</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
