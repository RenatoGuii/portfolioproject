import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

interface FooterProps {
    fixedStyle?: string;
}

export const Footer: React.FC<FooterProps> = ({fixedStyle}: FooterProps) => {
    return (
        <>
            <footer>
                <div className={`flex flex-col justify-center items-center p-5 bg-DarkCyan ${fixedStyle}`}>

                    <img src="img/logo.png" alt="logo" className="w-14 mb-5"/>

                    <ul className="flex gap-4">
                        <li>
                            <a href="https://www.linkedin.com/in/renato-guimaraes-quirino/" target="_blank">
                                <FaLinkedinIn className="border-2 p-2 rounded-full text-white hover:bg-white hover:text-DarkCyan duration-300" size="36px"/>
                            </a>
                        </li>

                        <li>
                            <a href="https://github.com/RenatoGuii" target="_blank">
                                <FaGithub className="border-2 p-2 rounded-full text-white hover:bg-white hover:text-DarkCyan duration-300" size="36px"/>
                            </a>
                        </li>

                        <li>
                            <a href="https://wa.me/+558588492584" target="_blank">
                                <FaWhatsapp className="border-2 p-2 rounded-full text-white hover:bg-white hover:text-DarkCyan duration-300" size="36px"/>
                            </a>
                        </li>

                        <li>
                            <a href="mailto:renatoguimaraesquirino@gmail.com?subject=Mensagem para Renato Guimarães&body=Escreva uma mensagem">
                                <MdEmail className="border-2 p-2 rounded-full text-white hover:bg-white hover:text-DarkCyan duration-300" size="36px"/>
                            </a>
                        </li>

                    </ul>

                    <p className="mt-5 font-rationale text-white tracking-wider">
                        Portfólio feito por Renato Guimarães
                    </p>

                </div>
            </footer>
        </>
    )
}