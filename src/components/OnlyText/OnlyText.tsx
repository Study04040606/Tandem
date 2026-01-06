import Container from "@/components/Container/Container.tsx";
import Button from "@/components/Button/Button";

type OnlyTextProps = {
    title: string;
    text: Array<string>;
}   

export default function OnlyText({title, text}: OnlyTextProps) {
    return (
        <section className="bg-neutral-200">
            <Container>
                <div className="flex flex-col p-4 lg:p-8 lg:m-8">
                    <h2 className='text-2xl font-bold text-primary mb-4'>
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