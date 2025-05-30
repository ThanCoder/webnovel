
type TImageProps = {
  src: string | undefined;
  alt?: string;
  width?: number;
  height?: number;
  defaultSrc?: string;
};

function TImage({
  alt = "img",
  width = 150,
  height = 150,
  defaultSrc = "/cover.png",
  src = "",
}: TImageProps) {
  if (src && src !== "") {
    return (
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          overflow: "hidden",
        }}
      >
        <img alt={alt} src={src} className="w-full h-full object-cover" />
      </div>
    );
  }

  //default
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px`, overflow: "hidden" }}
    >
      <img alt={alt} src={defaultSrc} className="w-full h-full object-cover" />
    </div>
  );
}

export default TImage;
