'use client'

import { Footer, Header } from "@/components"
import Link from "next/link"
import { FaUnlink } from "react-icons/fa"


export default function NotFoundPage() {
    return (
        <>
            <Header />

            <main>
                <div className="flex flex-col  items-center my-14 gap-5 h-full">

                    <FaUnlink className="text-DarkCyan text-7xl" />

                    <h1 className="font-rationale font-bold text-3xl text-gray-700">
                        Parece que você está perdido
                    </h1>

                    <p className="font-rationale text-xl text-gray-700">
                        Talvez tente uma página diferente
                    </p>

                    <Link href="/">
                        <button 
                        className="font-rationale text-DarkCyan bg-white px-4 py-2 tracking-widest font-semibold rounded-2xl hover:text-white hover:bg-DarkCyan outline hover:outline-white duration-700"
                        >
                            Voltar para Home
                        </button>
                    </Link>

                </div>
            </main>

            <Footer isFixed="fixed bottom-0 w-full" />
        </>
    )
}