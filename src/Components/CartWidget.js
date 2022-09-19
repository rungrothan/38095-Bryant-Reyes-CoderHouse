const CartWidget = () => {
    return (
      <>
    <div className="flex-none">
        <button className="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        </button>
    </div>
    <div className="flex-col">
    <h3 className="text-10 font-bold px-4">Total </h3>
    <p>0.00$</p>
  </div>
  </>
    );
  }
  
  export default CartWidget;