import Container from "@/components/Container/Container";
import Button from "@/components/Button/Button";
import ResponsivePicture from "@/components/ResponsivePicture/ResponsivePicture";

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

type BigImgAndTextProps = {
    title: string;
    text: Array<string>;
    picture: ResponsivePictureProps;
}

export default function BigImgAndText ({title, text, picture}: BigImgAndTextProps) {
    return (
        <section>
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
                    {text.map((paragraph, index) => (
                        <p key={index} className="mb-4">
                            {paragraph}
                        </p>
                    ))}

                    <Button />
                </div>
            </Container>
        </section>
    )
}