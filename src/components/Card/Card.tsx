import { Link } from 'react-router-dom';

type CardProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    link?: string;
}

export default function Card ({imageSrc, imageAlt, title, description, link}: CardProps) {

    return (
        <div className='border-neutral-200 rounded-lg shadow-md'>
            <div>
                <img className='rounded-t-lg' src={imageSrc} alt={imageAlt} />
            </div>
            <div className='p-4'>
                 <h3 className='text-xl font-bold mb-4'>{title}</h3>
                    <p className='mb-4'>{description}</p>
                    {link && (
                        <Link className="underline underline-offset-8 decoration-neutral-600 hover:underline-offset-2" to={link}>
                            Mehr erfahren →
                        </Link>
                    )} 
            </div>
        </div>
    )
}