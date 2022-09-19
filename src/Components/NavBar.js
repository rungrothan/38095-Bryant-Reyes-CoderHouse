import logo from '../logo-dogshop.png';
import './CartWidget';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
    <div data-theme="emerald" className="p-6">
        <div className="navbar col-span-1 shadow-lg xl:col-span-3 bg-neutral-focus text-neutral-content rounded-box">
            <div className="flex-none px-2 mx-2">
                <img src={logo}/>
            </div>
            <div className="flex justify-center flex-1 px-2 mx-2">
                <div className="items-stretch hidden lg:flex">
                    <a href='#' className="btn btn-ghost btn-sm rounded-btn">
                    Comederos y Bebederos
                    </a> 
                    <a href='#' className="btn btn-ghost btn-sm rounded-btn">
                    Juguetes y deportes
                    </a> 
                    <a href='#' className="btn btn-ghost btn-sm rounded-btn">
                    Higiene y Salud
                    </a> 
                </div>
            </div>
        <CartWidget/>
        </div>
    </div>
    );
  }
  
  export default NavBar;