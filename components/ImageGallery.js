// components/ImageGallery.js
import Image from 'next/image';

const ImageGallery = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      ))}
    </div>
  );
};

export default ImageGallery;