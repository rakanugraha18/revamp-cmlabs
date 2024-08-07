import { Link } from "react-router-dom";

export default function Card(props) {
  const {
    img,
    title,
    beforeDiscount,
    priceAfterDiscount,
    freeDelivery,
    id,
    redirect,
  } = props;
  return (
    <>
      <Link to={`${redirect}/${id}`}>
        <div className="flex flex-col align-start gap-[10px] p-2 md:h-[327px] md:w-44 hover:border-2 hover:border-[#16697A] hover:rounded-[10px]">
          <div>
            <img
              className="w-full h-full object-cover rounded-lg"
              src={img}
              alt={title}
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#16697A]">{title}</p>
          </div>
          <div className="text-[10px] text-wrap">Rp. {beforeDiscount}</div>
          <div className="inline-block text-[12px] bg-[#D9D9D9]">
            Rp.{priceAfterDiscount}
          </div>
          <div>
            <p className="text-[10px]">{freeDelivery}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
