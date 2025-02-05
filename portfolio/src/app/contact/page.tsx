"use client"

import Link from "next/link";
import { IoMdExit } from "react-icons/io";
import { IoReload } from "react-icons/io5";
import { useFormik } from "formik";
import { FormProps, formScheme, formValidationScheme } from "./formScheme";
import { FieldError, useNotification, Loading } from "@/components";
import { useEmailService } from "@/resources/emails";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

export default function ContactPage () {
    const [loading, setLoading] = useState<boolean>(false);
    const notification = useNotification();
    const service = useEmailService();

    useEffect(() => {
        notification.notify("Devido ao servidor ser de hospedagem gratuita, é possível que demore cerca de 1 a 2 minutos após apertar o botão de enviar, para o funcionamento rápido e regular do envio de emails", "info");
    }, [])

    const handleSubmit = async (values: FormProps, { resetForm }: any) => {

        setLoading(true);

        const formData = new FormData();

        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("message", values.message);

        if (await service.saveEmail(formData) !== 200) {
            setLoading(false)
            notification.notify("Serviço indisponível no momento", "error");
        } else {
            resetForm();

            setLoading(false)
            notification.notify("Email enviado com sucesso!", "success");
        }

    }

    const formik = useFormik<FormProps>({
        initialValues: formScheme,
        onSubmit: handleSubmit,
        validationSchema: formValidationScheme,
    });

    function reloadForm () {
        formik.resetForm();
    }

    return (
        <>
            <header>

                <Loading loading={loading} />
                
                <div className="flex bg-DarkCyan p-7 justify-between items-center lg:px-40">
                    <div className="border-2 border-white p-1">
                        <a href="/"><img src="/img/logo.png" alt="icone" className="w-12" /></a>
                    </div>
                    
                    <div className="flex gap-7 text-white">
                        <button onClick={reloadForm} className="hover:text-gray-200">
                            <IoReload size="25px" />
                        </button>

                        <Link href="/" className="hover:text-gray-200">
                            <IoMdExit size="25px" />
                        </Link>
                    </div>
                </div>
            </header>

            <main>
                <div className="p-10 px-12 md:w-768px md:mx-auto">
                    <h1 className="font-rationale text-center text-3xl mb-8 md:text-4xl md:mb-14">
                        Obrigado por reservar um tempo para entrar em contato. Como posso ajudá-lo hoje?
                    </h1>

                    <form onSubmit={formik.handleSubmit} className="grid gap-5 md:grid-cols-2">
                        <div className="flex flex-col gap-1">
                            <label className="font-rationale tracking-wide text-gray-700 text-xl">
                                Nome
                            </label>
                            <input 
                            type="text" 
                            className="border border-gray-200 shadow-sm focus:outline-none px-3 font-rationale h-10"
                            id="name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            />
                            <FieldError 
                            error={formik.errors.name} 
                            touched={formik.touched.name} 
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-rationale tracking-wide text-gray-700 text-xl">
                                Email
                            </label>

                            <input 
                            type="text" 
                            className="border border-gray-200 shadow-sm focus:outline-none px-3 font-rationale h-10"
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            />
                            <FieldError 
                            error={formik.errors.email} 
                            touched={formik.touched.email} 
                            />
                        </div>

                        <div className="flex flex-col gap-1 md:col-span-2">
                            <label className="font-rationale tracking-wide text-gray-700 text-xl">
                                Messagem
                            </label>
                            <textarea 
                            rows={5} 
                            className="border border-gray-200 shadow-sm focus:outline-none px-3 py-2 font-rationale"
                            id="message"
                            name="message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            />
                            <FieldError 
                            error={formik.errors.message} 
                            touched={formik.touched.message} 
                            />
                        </div>

                        <div className="md:col-span-2 md:flex md:justify-center mt-8">
                            <button 
                            type="submit"
                            className="w-full font-rationale text-lg text-DarkCyan bg-white px-4 py-2 tracking-widest font-semibold rounded-2xl hover:text-white hover:bg-DarkCyan outline hover:outline-white duration-500 md:w-40"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            <ToastContainer 
            position='top-right' 
            autoClose={10000}
            hideProgressBar={false}
            draggable={false}
            closeOnClick={true}
            pauseOnHover={true}
            />
        </>
    )
}