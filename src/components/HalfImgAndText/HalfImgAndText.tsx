import Container from '@/components/Container/Container.tsx';
import Button from '@/components/Button/Button.tsx';
import ResponsivePicture from '@/components/ResponsivePicture/ResponsivePicture.tsx';
import Subtitle from '@/components/Subtitle/Subtitle';

type ResponsivePictureProps = {
  sources: Array<{
    media: string;
    src: string;
    type: string;
  }>;
  imgSrc: string;
  imgAlt: string;
  className?: string;
};

type SubtitleProps = {
  subtitleTitle: string;
  subtitleText: Array<string>;
};

type HalfImgAndTextProps = {
  title: string;
  lead?: string;
  text: Array<string>;
  picture: ResponsivePictureProps;
  subtitles: SubtitleProps[];
  isReverse: boolean;
  isButtonVisible?: boolean;
};

export default function HalfImgAndText({
  title,
  lead,
  text,
  picture,
  subtitles,
  isReverse,
  isButtonVisible = false,
}: HalfImgAndTextProps) {
  return (
    <section>
      <Container>
        <div className="py-4 lg:py-8 lg:px-8 lg:mx-8">
          <div
            className={`flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-4 lg:gap-8 `}
          >
            <div className="flex-1 w-full max-h-[220px] lg:max-h-[400px] overflow-hidden rounded-3xl mb-4">
              <ResponsivePicture
                sources={picture.sources}
                imgSrc={picture.imgSrc}
                imgAlt={picture.imgAlt}
              />
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p className="text-lg italic mb-4">{lead}</p>

              {text.map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}

            <Subtitle subtitles={subtitles} />
            </div>
          </div>
          
          {isButtonVisible && <Button />}
        </div>
      </Container>
    </section>
  );
}
