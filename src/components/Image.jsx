import { IKImage } from "imagekitio-react";

const Image = ({ src, alt, className, W, H }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      width={W}
      height={H}
      transformation={[
        {
          height: H,
          width: W,
          quality: "auto",
          crop: "lanczos:fill",
        },
      ]}
    />
  );
};
export default Image;
