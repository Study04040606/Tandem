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

export default function ResponsivePicture ({sources, imgSrc, imgAlt, className}: ResponsivePictureProps) {
    return (
        <picture className="block w-full h-full">
             {sources.map((source, index) => (
                <source
                    key={index}
                    media={source.media}
                    srcSet={source.src}
                    type={source.type}
                />
                ))}

            <img src={imgSrc} alt={imgAlt} className={className ?? "w-full h-full object-cover object-center rounded-3xl mb-8"} loading="lazy" decoding="async" />
        </picture>
    )
}