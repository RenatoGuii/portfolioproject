import { ExternalLink } from "lucide-react";

interface CardProjectProps {
    title: string;
    subtitle: string;
    githubLink: string;
}

export const CardProject: React.FC<CardProjectProps> = ({title, subtitle, githubLink}: CardProjectProps) => {
    return (
        <>
            <div className="flex flex-col items-center bg-white p-8 border-2 border-gray-100 shadow-md rounded-2xl text-center">
            
                <h1 className="font-rationale font-semibold text-xl text-white bg-sky-900 p-4 rounded">
                    {title}
                </h1>

                <p className="font-rationale text-lg my-4">
                    {subtitle}
                </p>

                <a href={githubLink} target="_blank" className="flex items-center text-sm text-blue-600 bg-gray-100 hover:bg-gray-200 duration-200 p-2 rounded">
                    <ExternalLink size={22} />
                    <span className="font-rationale tracking-wider ml-1">Mais informações</span>
                </a>
                
            </div>
        </>
    )
}