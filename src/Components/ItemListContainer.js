import ItemList from "./ItemList"

const ItemListContainer = ({greeting}) => {
  return (
    <div data-theme="emerald" className=" h-screen">
          <h1 className="flex justify-center flex-1 px-2 mx-2 text-lg font-bold">
            {greeting}
          </h1>
          <ItemList/>
    </div>
  )
}

export default ItemListContainer