import Card from "../components/card/card"

export const metadata = {
  title: 'Catalogue page',
  description: 'Catalogue page to see the list of products available'
}

const productList = [
  {
    id: 1,
    title: 'Novex My Curls',
    type: 'Conditioner',
    size: '300mL',
    amount: 2,
    price: 1000,
    description: 'Novex My Curls conditioner',
    pictures: [
      '/NOVEX-MY-CURLS-Acondicionador-300ML.png'
    ]
  },
  {
    id: 2,
    title: 'Novex My Curls',
    type: 'Shampoo',
    size: '300mL',
    amount: 4,
    price: 1500,
    description: 'Novex My Curls shampoo',
    pictures: [
      '/NOVEX-MY-CURLS-shampoo-300M.png'
    ]
  },
  {
    id: 3,
    title: 'Novex Meus Cachos de Cinema',
    type: 'Hair mask',
    size: '400mL',
    amount: 2,
    price: 2000,
    description: 'Novex Meus Cachos de Cinema hair mask',
    pictures: [
      '/NOVEX-MEUS-CACHOS-DE-CINEMA-Mascarilla-400g.jpg'
    ]
  },
]

const Catalogue = () => {
  return (
    <div>
      <h1 className="text-4xl text-gray-700 mb-5">Product List</h1>
      <div className="grid grid-cols-3 gap-4 auto-rows-max md:auto-rows-min justify-between items-center">
        {productList.map(product => {
          return <Card key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}

export default Catalogue
