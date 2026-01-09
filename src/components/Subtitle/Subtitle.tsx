type SubtitlesProps = {
  subtitles: Array<{
    subtitleTitle: string;
    subtitleText: Array<string>;
  }>;
};

export default function Subtitle({ subtitles }: SubtitlesProps) {
  return (
    <>
      {subtitles.map(({ subtitleTitle, subtitleText }, index) => (
        <div className="pb-4 " key={index}>
          <h3 className="text-lg font-bold mb-4">
            {subtitleTitle}
          </h3>
          {subtitleText.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </>
  );
}
