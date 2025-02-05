import Link from "next/link"

export const Header: React.FC = () => {
    return (
     <>
        <header>
            <div className="flex bg-DarkCyan p-7 justify-between items-center lg:px-40">
                <div className="border-2 border-white p-1">
                    <a href="/"><img src="/img/logo.png" alt="icone" className="w-12" /></a>
                </div>

                <div>
                    <Link href="/contact">
                        <button 
                        className="font-rationale text-DarkCyan bg-white px-4 py-2 tracking-widest font-semibold rounded-2xl hover:text-white hover:bg-DarkCyan outline hover:outline-white duration-700"
                        >
                            Fale Comigo
                        </button>
                    </Link>
                </div>
            </div>
        </header>
     </>   
    )
}