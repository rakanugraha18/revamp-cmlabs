// import { Link } from "react-router-dom";

// export default function Card(props) {
//   const {
//     img,
//     title,
//     beforeDiscount,
//     priceAfterDiscount,
//     freeDelivery,
//     id,
//     description,
//     date,
//     classname,
//     redirect,
//     currency,
//     borderRadius = "10px", // Default border radius
//   } = props;

//   return (
//     <Link to={`${redirect}/${id}`}>
//       <div
//         className={`flex flex-col gap-[10px] p-2 hover:border-2 hover:border-[#16697A] ${classname}`}
//         style={{
//           borderRadius: borderRadius,
//         }}
//       >
//         <div style={{ flexGrow: 1 }}>
//           <img
//             className="w-full h-full object-cover rounded-lg"
//             src={img}
//             alt={title}
//           />
//         </div>
//         <div>
//           <p className="text-sm font-semibold text-[#16697A]">{title}</p>
//         </div>
//         <div>
//           <p className="text-[14px]">{description}</p>
//         </div>
//         <div>
//           <p className="text-[12px]">{date}</p>
//         </div>
//         <div className="text-[10px] text-wrap">
//           {currency} {beforeDiscount}
//         </div>
//         <div className="inline-block text-[12px] bg-[#D9D9D9]">
//           {currency} {priceAfterDiscount}
//         </div>
//         <div>
//           <p className="text-[10px]">{freeDelivery}</p>
//         </div>
//       </div>
//     </Link>
//   );
// }

import { Link } from "react-router-dom";

export default function Card(props) {
  const {
    img,
    title,
    beforeDiscount,
    priceAfterDiscount,
    freeDelivery,
    id,
    description,
    date,
    classname,
    redirect,
    currency,
    borderRadius = "10px", // Default border radius
  } = props;

  return (
    <Link to={`${redirect}/${id}`}>
      <div
        className={`flex flex-col gap-[10px] p-2 hover:border-2 hover:border-[#16697A] ${classname}`}
        style={{
          borderRadius: borderRadius,
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <img
            className="w-full h-full object-cover rounded-lg"
            src={img}
            alt={title}
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-[#16697A]">{title}</p>
        </div>
        {description && (
          <div>
            <p className="text-[14px]">{description}</p>
          </div>
        )}
        {date && (
          <div>
            <p className="text-[12px]">{date}</p>
          </div>
        )}
        {beforeDiscount && (
          <div className="text-[10px] text-wrap">
            {currency} {beforeDiscount}
          </div>
        )}
        {priceAfterDiscount && (
          <div className="inline-block text-[12px] bg-[#D9D9D9]">
            {currency} {priceAfterDiscount}
          </div>
        )}
        {freeDelivery && (
          <div>
            <p className="text-[10px]">{freeDelivery}</p>
          </div>
        )}
      </div>
    </Link>
  );
}
