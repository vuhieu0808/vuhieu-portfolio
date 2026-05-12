import { useState } from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
}

export function ProjectImage({ src, alt }: ProjectImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  return (
    <div
      className={`project-image-wrap ${isLoading && !imageError ? "image-loading" : ""}`}
    >
      {!imageError && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={imageError ? "image-error" : ""}
        />
      )}
      <div className="project-image-overlay" />
    </div>
  );
}
