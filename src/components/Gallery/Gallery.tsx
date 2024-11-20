import { FC } from 'react';

interface GalleryProps {
  images: string[];
}

const Gallery: FC<GalleryProps> = ({ images }) => {
  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.length > 0 && (
          <>
            <div className="gallery-image main-image">
              <img src={images[0]} alt="Main property view" />
            </div>
            <div className="side-images">
              {images.slice(1, 3).map((image, index) => (
                <div key={index} className="gallery-image">
                  <img src={image} alt={`Property view ${index + 2}`} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="action-buttons">
        <button className="btn save">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 12v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8m-4-4l-4-4-4 4"/>
          </svg>
          Share
        </button>
        <button className="btn" style={{ color: 'red' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 8h-1v3h-3v2h3v3h1v-3h3v-2h-3v-3zM2 12v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2z"/>
          </svg>
          Save
        </button>
      </div>
      
      <div className="photo-count">
        &#128444; {images.length}+
      </div>
    </div>
  );
};

export default Gallery;
