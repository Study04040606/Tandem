import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import ResponsivePicture from "@/components/ResponsivePicture/ResponsivePicture";
import Subtitle from "@/components/Subtitle/Subtitle";

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

type SubtitleProps = {
    subtitleTitle: string;
    subtitleText: Array<string>;
}

type BigImgAndTextProps = {
    id?: string;
    title: string;
    lead?: string;
    text: Array<React.ReactNode>;
    picture: ResponsivePictureProps;
    subtitles?: SubtitleProps[];
    isSubtitle: boolean;
}

export default function BigImgAndText ({id, title, lead, text, picture, subtitles, isSubtitle=false}: BigImgAndTextProps) {
    return (
        <section id={id} className='scroll-mt-20'>
            <Container>
                <div className="flex flex-col p-4 lg:p-8 lg:m-8">
                    <div className="w-full max-h-[220px] lg:max-h-[400px] overflow-hidden rounded-3xl">
                        <ResponsivePicture
                            sources={picture.sources}
                            imgSrc={picture.imgSrc}
                            imgAlt={picture.imgAlt}
                        />
                    </div>
                    <h2 className="text-2xl font-bold mt-8 mb-4">
                        {title}
                    </h2>
                    <p className='text-lg italic mb-4'>
                        {lead}
                    </p>

                    {text.map((paragraph, index) => (
                        <p key={index} className="mb-4">
                            {paragraph}
                        </p>
                    ))}

                    { isSubtitle && subtitles && 
                        (
                            <div className="-mb-4">
                                <Subtitle subtitles={subtitles} />
                            </div>
                        )
                    }
                    <Button />
                </div>
            </Container>
        </section>
    )
}