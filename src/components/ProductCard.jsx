import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="w-[45%] sm:w-[200px] md:w-[300px] lg:w-[350px] flex-shrink-0 bg-[#fafafa] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300  relative">

      
      <div onClick={handleNavigate} className="relative w-full h-[200px] sm:h-[280px] group md:h-[300px] lg:h-[400px] overflow-hidden cursor-pointer">
        
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:-translate-x-full transition-transform duration-1000"
          onClick={handleNavigate}
        />
        
        <img
          src={product.hoverImage || product.image} // Fallback if hoverImage not provided
          alt="hover"
          className="w-full h-full object-cover absolute top-0 left-0 transition-transform duration-1000 translate-x-full group-hover:translate-x-0 "
          onClick={handleNavigate}
        />
      </div>

      
      <div className="p-4 flex flex-col gap-2">
        <h2
          onClick={handleNavigate}
          className="text-md md:text-xl font-semibold text-gray-800 hover:text-black cursor-pointer whitespace-nowrap line-clamp-2"
        >
          {product.name}
        </h2>

        <p className="text-sm text-gray-600">
          Rs. {product.price.toLocaleString()}.00
        </p>

        <button
          onClick={handleNavigate}
          className="mt-2 w-full bg-black text-white py-2 cursor-pointer rounded-full text-sm hover:bg-gray-800 transition-all duration-300"
        >
          Select Options
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
