
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";

const GitIcon = ({ href }: { href: string }) => {
    return (
        <div className="hover:-rotate-30 
            transition-colors transition-transform duration-300 ease-out">
            <Link href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl theme-text text-white light:text-gray-300 ">
                <FaGithub />
            </Link>
        </div>

    );
};

const Arrow = ({ href }: { href: string }) => {
    return (
        <Link href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="g">
            <div className="p-1 text-2xl theme-text text-white light:text-gray-300 rounded-full
             hover:bg-gray-300 default:hover:bg-gray-600  hover:-rotate-12 
            transition-colors transition-transform duration-300 ease-out">
                <BsArrowRight />
            </div>
        </Link>
    );
};

type Props = {
    index: number;
    project: {
        title: string;
        type: string;
        image: string;
        desc: string;
        tags: string[];
        liveUrl: string;
        codeUrl: string;
        bgColor: string;
        githubApi: string;
    };
    style?: React.CSSProperties;
};

export default function ProjectCard({ index, project, style, }: Props) {

    return (
        <div className="flex flex-col w-full gap-4 md:basis-1/2 md:px-4 py-4 group "
            style={style}>

            <div className="
  relative w-full h-[250px]
  overflow-hidden rounded-xl
  shadow-md border border-gray-100
  transform transition-transform duration-300
  hover:-translate-y-2 hover:-translate-x-2 hover:shadow-xl hover:border-gray-300
">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover  transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="flex items-center justify-between px-1">
                <h3 className={`text-xl font-bold tracking-tight ${project.title.includes('Next') ? 'text-blue-600 dark:text-blue-400' : 'text-green-700 dark:text-green-400'}`}>
                    {project.title}
                </h3>

                <div className="flex items-center gap-3">
                    <GitIcon href={project.codeUrl} />
                    <Arrow href={project.liveUrl} />
                </div>
            </div>

            <div className="px-1">
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                    {project.desc}
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto px-1">
                {project.tags.map((tag, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}