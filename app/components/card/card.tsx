import Image from "next/image"

const Card = ({ product }: { product: any }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="relative w-full h-56">
        <Image fill objectFit="contain" src={product.pictures[0]} alt={product.description} />
      </div>
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{product.title}</h3>
        <p className="text-gray-700 text-base">{product.type}</p>
        <p className="text-gray-700 text-base">${product.price}</p>
        <div className="flex gap-2">
          <p className="flex items-center justify-center rounded w-5 h-5 bg-slate-500 text-white">+</p>
          <p>0</p>
          <p className="flex items-center justify-center rounded w-5 h-5 bg-slate-500 text-white">-</p>
        </div>
      </div>
    </div>
  )
}

export default Card