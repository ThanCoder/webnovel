'use client'


export enum TImageBoxFit {
  fill = "object-fill",
  contain = "object-contain",
  cover = "object-cover",
}
type TImageProps = {
  src: string | undefined;
  alt?: string;
  width?: number;
  height?: number;
  defaultSrc?: string;
  fit?: TImageBoxFit;
};

function TImage({
  alt = "img",
  width = 150,
  height = 150,
  defaultSrc = "/cover.png",
  src = "",
  fit = TImageBoxFit.cover,
}: TImageProps) {
  // url ရှိနေရင်
  if (src && src !== "") {
    
    return (
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          overflow: "hidden",
        }}
      >
        <img
          alt={alt}
          src={src}
          className={`w-full h-full ${fit}`}
          onError={e =>{
            e.currentTarget.onerror = null;
            e.currentTarget.src = defaultSrc;
            
          }}
        />
      </div>
    );
  }

  //default
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px`, overflow: "hidden" }}
    >
      <img alt={alt} src={defaultSrc} className={`w-full h-full ${fit}`} />
    </div>
  );
}

export default TImage;
