import {ServerCog, MonitorSmartphone} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { CardProject } from "./cardProject";


export const Main: React.FC = () => {
    return (
        <main>
            <div>
                <section>
                    <div className="flex flex-col items-center px-16 pt-16 pb-6">
                        <h1 className="font-rationale font-bold text-5xl lg:text-6xl tracking-wider text-center">
                            Desenvolvedor Full-Stack
                        </h1>

                        <p className="font-rationale mt-3 mb-4 text-xl lg:text-2xl tracking-wider text-center">
                            Desenvolvo aplicações web e amo o que faço. 
                        </p>

                        <div className="w-44">
                            <img src="/img/mf-avatar.svg" alt="avatar"/>
                        </div>

                        <a href="files/CV.pdf" download="cvRenatoGuimaraes.pdf">
                            <button className="font-rationale text-white bg-DarkCyan px-4 py-2 tracking-widest font-semibold rounded-2xl hover:text-DarkCyan hover:bg-white outline hover:outline-DarkCyan duration-700 mt-5">
                                Baixar CV
                            </button>
                        </a>
                    </div>

                    <div>
                        <img src="/img/computer.png" alt="application" className=" w-660px lg:w-760px m-auto" />
                    </div>

                </section>

                <section>
                    <div className="bg-DarkCyan">

                        <div className="flex flex-col items-center px-24px pt-80px pb-224px">

                            <h1 className="font-rationale text-white font-semibold text-2xl mb-5 text-center">Olá, meu nome é Renato. Prazer em conhecê-lo. </h1>

                            <p className="font-rationale text-white text-xl text-center max-w-760px">
                                Desde que concluí minha formação em Análise e Desenvolvimento de Sistemas, após 3 anos de dedicação aos estudos, tenho me dedicado a explorar o vasto mundo da tecnologia, em especial, o desenvolvimento web. Durante esse período, adquiri conhecimentos em desenvolvimento de software e soluções inovadoras para diversos tipos de problema.
                            </p>

                        </div>

                    </div>
                </section>

                <section className="-mt-48">
                    <div className="bg-white mx-6 border border-x-2 border-gray-100 divide-y-2 divide-gray-100 shadow-sm rounded-2xl md:grid md:grid-cols-2  md:divide-x-2">
                        <div className="flex flex-col items-center p-14">
                            <div className="flex items-center justify-center bg-DarkCyan w-20 h-20 rounded-full">
                                <MonitorSmartphone size={35} />
                            </div>

                            <h1 className="font-rationale font-semibold text-2xl my-6">
                                Desenvolvedor Front-end
                            </h1>

                            <p className="font-rationale text-lg text-center">
                                Gosto de codificar coisas do zero e gosto de dar vida às ideias no navegador.
                            </p>

                            <div className="flex flex-col items-center mt-6 px-5">

                                <p  className="font-rationale text-lg tracking-wide font-semibold text-blue-700">
                                    Linguagens que uso:
                                </p>

                                <ul className=" flex space-x-1 font-rationale tracking-wide font-semibold">
                                    <li>HTML,</li>
                                    <li>CSS, </li>
                                    <li>JavaScript,</li>
                                    <li>TypeScript</li>
                                </ul>

                                <p  className="font-rationale text-lg tracking-wide font-semibold text-blue-700 mt-6">
                                    Bibliotecas e Frameworks:
                                </p>

                                <ul className="font-rationale tracking-wide font-semibold w-full text-center">
                                    <li>ReactJS</li>
                                    <li>Next.js</li>
                                    <li>Tailwind CSS</li>
                                    <li>shadcn/ui</li>
                                </ul>

                                <p  className="font-rationale text-lg tracking-wide font-semibold text-blue-700 mt-6">
                                    Outras Ferramentas:
                                </p>

                                <ul className="font-rationale tracking-wide font-semibold w-full text-center">
                                    <li>VS Code</li>
                                    <li>Git e GitHub</li>
                                    <li>ESLint & Prettier</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-14">
                            <div className="flex items-center justify-center bg-DarkCyan w-20 h-20 rounded-full">
                                <ServerCog size={35} />
                            </div>

                            <h1 className="font-rationale font-semibold text-2xl my-6">
                                Desenvolvedor Back-end
                            </h1>

                            <p className="font-rationale text-lg text-center">
                                Tenho paixão por desenvolver APIs eficientes e integrar sistemas de forma segura e performática.
                            </p>

                            <div className="flex flex-col items-center mt-6 px-5">

                                <p  className="font-rationale text-lg tracking-wide font-semibold text-blue-700">
                                    Linguagens que uso:
                                </p>

                                <ul className=" flex space-x-1 font-rationale tracking-wide font-semibold">
                                    <li>Java</li>
                                </ul>

                                <p  className="font-rationale text-lg tracking-wide font-semibold text-blue-700 mt-6">
                                    Bibliotecas e Frameworks:
                                </p>

                                <ul className="font-rationale tracking-wide font-semibold w-full text-center">
                                    <li>Spring Framework</li>
                                    <li>JPA / Hibernate</li>
                                    <li>JUnit e Mockito</li>
                                </ul>

                                <p  className="font-rationale text-lg tracking-wide font-semibold text-blue-700 mt-6">
                                    Bancos de Dados:
                                </p>

                                <ul className="font-rationale tracking-wide font-semibold w-full text-center">
                                    <li>MySQL</li>
                                    <li>PostgreSQL</li>
                                    <li>MongoDB</li>
                                </ul>

                                <p  className="font-rationale text-lg tracking-wide font-semibold text-blue-700 mt-6">
                                    Outras Ferramentas:
                                </p>

                                <ul className="font-rationale tracking-wide font-semibold w-full text-center">
                                    <li>JWT</li>
                                    <li>Docker</li>
                                    <li>Swagger</li>
                                    <li>IntelliJ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex flex-col items-center my-24 mx-10">
                        <h1 className="font-rationale font-semibold text-2xl mb-5">Experiência Profissional</h1>

                        <div className="w-full md:w-660px flex justify-center group">
                            <div className="flex flex-col items-center justify-center bg-sky-900 group-hover:bg-sky-950 w-full h-224px md:h-352px rounded-xl duration-1000 relative">
                                <img 
                                    src="img/youapp.png" 
                                    alt="youapp" 
                                    className="w-80 transition-opacity duration-1000 group-hover:opacity-0"
                                />

                                <div className="font-rationale text-white text-center absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <p>Estagiário de Desenvolvimento</p>
                                    <p className="mb-3">Julho de 2023 - Agosto de 2023</p>
                                    <a className="font-rationale text-DarkCyan bg-white px-4 py-2 tracking-widest font-semibold rounded-2xl hover:text-white hover:bg-DarkCyan outline hover:outline-white duration-700 text-sm"
                                    href="https://www.youapp.com.br/" target="_blank"
                                    >
                                        Website
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section>
                    <div className="bg-DarkCyan">

                        <div className="flex flex-col items-center px-24px pt-80px pb-224px">

                            <h1 className="font-rationale text-white font-semibold text-2xl mb-5 tracking-wider">PROJETOS PESSOAIS </h1>

                            <p className="font-rationale text-white text-xl text-center max-w-760px">
                                Gosto de desenvolver projetos que me desafiem e ampliem meus conhecimentos (tanto no back, como no front-end), sempre buscando aprimorar minhas habilidades e explorar novas tecnologias.
                            </p>

                        </div>

                    </div>
                </section>

                <section className="-mt-48">
                    <div className="mx-6 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3 xl:w-1232px xl:mx-auto ">
                        <CardProject title="FaturaFlow" subtitle="Aplicação Full-Stack de gerencimento de faturas pessoais com dashboards" githubLink="https://github.com/RenatoGuii/faturaflow"/>

                        <CardProject title="Image Lite" subtitle="Aplicação Full-Stack de gerencimento de imagens e autenticação JWT" githubLink="https://github.com/RenatoGuii/imageliteproject"/>

                        <CardProject title="Desafio PicPay" subtitle="Aplicação de API de gerenciamento de transações financeiras entre usuários" githubLink="https://github.com/RenatoGuii/picpaysimplificado"/>

                        <CardProject title="Serviço de Email" subtitle="Aplicação de API de gerenciamento de envios de email" githubLink="https://github.com/RenatoGuii/email-service-challenge"/>
                    </div>

                    <div >
                        <a href="https://github.com/RenatoGuii?tab=repositories" 
                        target="_blank" 
                        className="flex items-center justify-center bg-githubColor max-w-fit mx-auto p-2 rounded gap-1 my-10 text-white font-rationale tracking-wider hover:bg-white hover:text-githubColor border-2 hover:border-githubColor duration-500">
                            <FaGithub /> Acessar todos os projetos
                        </a>
                    </div>

                </section>

            </div>
        </main>
    )
}