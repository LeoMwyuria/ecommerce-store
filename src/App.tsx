import { useState } from "react";
import Button from "./components/button/Button";
import Count from "./components/count/Count";
import Header from "./components/header/Header";
import Product from "./components/product/Product";
import productImg from './assets/product.png';
import deleteBtn from './assets/delete.svg'

function App() {
    const [buyCount, setBuyCount] = useState<number>(0);
    const [count, setCount] = useState(0);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const price = 250;
    const discount = 50;
    const offPrice = price - (price * discount) / 100;
    const fullPrice = offPrice * buyCount;

    const handleButtonClick = () => {
        setBuyCount(buyCount + count);
    };

    const addBtn = () => {
        setCount(count + 1);
    };

    const subBtn = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const toggleCart = () => {
        setIsCartVisible(!isCartVisible); 
    };

    const resetBuyCount = () => {
        setBuyCount(0);
    };

    return (
        <div className="main">
            <Header showCart={toggleCart} buyCount={buyCount} />
            {isCartVisible && (
                <div className="cartContent">
                    <h2>Cart</h2>
                    {buyCount > 0 ? (

                        <div className="cartInnerContent">
                            <div><img style={{width: '50px', height:'50px'}} src={productImg} alt="" /></div>
                            <div>
                                <p>"Fall Limited Edition Sneakers"</p>
                                <span style={{color: 'gray'}}>${offPrice}.00 x {buyCount} </span><span style={{fontWeight:'900'}}>{fullPrice}.00$</span>
                                <img style={{marginLeft:'50px'}} src={deleteBtn} alt="" onClick={resetBuyCount} />
                                <Button value="Checkout" classname="checkout" />
                            </div>
                            
                        </div>
                        
                    ) : (
                        <p style={{textAlign: 'center'}}>Your cart is empty.</p>
                    )}
                </div>
            )}
            <Product
                offPrice={offPrice}
                discount={discount}
                price={price}
                productManufacturer="Sneaker Company"
                productName="Fall Limited Edition Sneakers"
                productDescription="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
            />
            <Count
                addBtn={addBtn}
                subBtn={subBtn}
                count={count}
            />
            <br />
            <Button classname="addCart" value="Add To Cart" onButtonClick={handleButtonClick} />
        </div>
    );
}

export default App;
