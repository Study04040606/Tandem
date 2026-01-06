import Container from '@/components/Container/Container.tsx';
import Button from '@/components/Button/Button.tsx';
import ResponsivePicture from '@/components/ResponsivePicture/ResponsivePicture.tsx';

type ResponsivePictureProps = {
    sources: Array<{
        media: string;
        src: string;
        type: string;
    }>;
    imgSrc: string;
    imgAlt: string;
    className?: string;
}

type HalfImgAndTextProps = {
    title: string;
    text: Array<string>;
    picture: ResponsivePictureProps;
    isReverse: boolean;
    isButtonVisible?: boolean;
}

export default function HalfImgAndText ({title, text, picture, isReverse, isButtonVisible = false}: HalfImgAndTextProps) {

  return (
    <section>
      <Container>
        <div className={`flex flex-col ${isReverse ? "md:flex-row-reverse" : "md:flex-row" }  gap-4 lg:gap-8 lg:m-8`}>
          <div className="flex-1 w-full max-h-[220px] lg:max-h-[400px] overflow-hidden rounded-3xl p-4 lg:p-8">
            <ResponsivePicture
                sources={picture.sources}
                imgSrc={picture.imgSrc}
                imgAlt={picture.imgAlt}
            />
          </div>
          <div className="flex flex-1 flex-col justify-center p-4 lg:p-8">
            <h2 className="text-2xl font-bold mb-4">
              {title}
            </h2>
            {text.map((paragraph, index) => (
                <p key={index} className="mb-4">
                    {paragraph}
                </p>
            ))}

            { isButtonVisible && <Button /> }
          </div>
        </div>
      </Container>
    </section>
  );
}
