import { useEffect, useState } from "react";
import Card from "../../molecules/Cards";
import getApiProduct from "../../api/product";
import { useNavigate } from "react-router-dom";

const Recomendation = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const imgUrl = import.meta.env.VITE_APP_IMGURL;
  const navigate = useNavigate();

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      const data = await getApiProduct();
      setDataProduct(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-screen-xl">
        <div className="flex justify-between flex-wrap p-4">
          {dataProduct.length > 0 ? (
            dataProduct.map((product, i) => (
              <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2">
                <Card
                  redirect="#"
                  id={product.id}
                  title={product.name}
                  beforeDiscount={product.price}
                  img={`${imgUrl}${product.image}`}
                  priceAfterDiscount={product.price}
                  freeDelivery="FREE DELIVERY SERVICES"
                />
              </div>
            ))
          ) : (
            <div className="text-center w-full">Tidak ada data</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recomendation;
