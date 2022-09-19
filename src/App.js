import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar.js';

const App = () => {
  return (
    <>
     <NavBar/>
     <ItemListContainer 
     greeting={"Bienvendio a DogShop, la mejor tienda para mascotas del país"}/>
    </>
  );
}

export default App;
