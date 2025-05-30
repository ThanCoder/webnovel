import Image from "next/image";

type TImageProps = {
  src: string  | undefined;
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
  src='',
}: TImageProps) {
  if (!src && defaultSrc) {
    // return <Image alt={alt} width={width} height={height} src={defaultSrc} />;
    return <img alt={alt} width={width} height={height} src={defaultSrc} />
  }
  // return <Image alt={alt} width={width} height={height} src={src} />;
  return <img alt={alt} width={width} height={height} src={src} />
}

export default TImage;
