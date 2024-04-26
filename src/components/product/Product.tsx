import React, { useState, useEffect } from 'react';
import product1 from '../../assets/product.png';
import product2 from '../../assets/product2.jpg';
import product3 from '../../assets/product3.jpg';
import product4 from '../../assets/product4.jpg';

interface ProductProps {
  discount: number;
  price: number;
  productManufacturer: string;
  productName: string;
  productDescription: string;
  offPrice: number;
}

const Product: React.FC<ProductProps> = ({
  discount,
  price,
  productManufacturer,
  productName,
  productDescription,
  offPrice,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const images = [product1, product2, product3, product4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleProductImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleLittleImageClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      <div className="product-container">
        <div
          className="arrow left-arrow"
          onClick={() =>
            setCurrentImageIndex(
              (prevIndex) => (prevIndex - 1 + images.length) % images.length
            )
          }
        >
          &#60;
        </div>
        <div className="product-img" onClick={handleProductImageClick}>
          <img
            src={images[currentImageIndex]}
            alt="Product"
            className="active"
            
          />
        </div>
        <div
          className="arrow right-arrow"
          onClick={() =>
            setCurrentImageIndex(
              (prevIndex) => (prevIndex + 1) % images.length
            )
          }
        >
          &#62;
        </div>
      </div>
      {!modalOpen && (
        <div className="little-images">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Little Product"
              className="little-image"
              style={{
                width: '80px',
                height: '80px',
                cursor: 'pointer',
                border: currentImageIndex == index ? '2px solid orange' : 'none',

                
                filter:
                  currentImageIndex !== index ? 'blur(1.2px)' : 'none',
                  
              }}
              onClick={() => handleLittleImageClick(index)}
            />
          ))}
        </div>
      )}
      <div className="productP">
        <p className="p1">{productManufacturer}</p>
        <p className="p2">{productName}</p>
        <p className="p3">{productDescription}</p>
      </div>
      <div className="priceDiv">
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span className="price">${offPrice}.00</span>
          <span className="discount">{discount}%</span>
        </div>
        <p className="sale">${price}.00</p>
      </div>
      {modalOpen && (
        <div className="product-modal-overlay">
          <div className="product-modal">
            <div className="exit-button" onClick={handleCloseModal}>
              X
            </div>
            <img
              src={images[currentImageIndex]}
              alt="Product"
              className="active"
              style={{ width: '550px', height: '550px', objectFit: 'cover' }}
            />
            <div style={{left:'100px'}} className="little-images">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Little Product"
                  className="little-image"
                  style={{
                    width: '80px',
                    height: '80px',
                    cursor: 'pointer',
                    filter:
                      currentImageIndex !== index ? 'blur(2px)' : 'none',
                  }}
                  onClick={() => handleLittleImageClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
