// pages/index.js
import Image from "next/image";

const HomeWithNextImages = () => {
  const data = [
    "/sample1.webp",
    "/sample2.webp",
    "/sample3.webp",
    "/sample4.webp",
    "/sample5.webp",
    "/sample6.webp",
    "/sample7.webp",
  ];

  return (
    <div>
      <h1>Homepage with Next.js Optimized Images</h1>
      {data.map((imgSrc, index) => (
        <div key={index} style={{ margin: "50px 0" }}>
          <h2>Row {index + 1}</h2>
          <Image
            src={imgSrc}
            alt={`Image ${index + 1}`}
            width={800}
            height={400}
            priority={index === 0 ? true : false}
            loading={index === 0 ? "eager" : "lazy"}
            quality={25}
          />
          <p>
            This is an example text block for row {index + 1}. Each row has an
            image and some text.
          </p>
        </div>
      ))}
    </div>
  );
};

export default HomeWithNextImages;
