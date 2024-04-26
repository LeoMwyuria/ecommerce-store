import React from 'react';

interface ProductModalProps {
  images: string[];
  currentImageIndex: number;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  images,
  currentImageIndex,
  onClose,
}) => {
  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal">
        <img  src={images[currentImageIndex]} alt="Product" className="active" />
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
                filter: currentImageIndex !== index ? 'blur(1px)' : 'none',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
