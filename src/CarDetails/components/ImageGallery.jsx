import React from 'react'

function ImageGallery({car}) {
  return (
    <div>
      <img src={car.carImages.imageUrl} alt="" srcset=""  className='w-full h-[200px] sm:h-[400px] object-cover rounded-xl'/>
    </div>
  );
}

export default ImageGallery