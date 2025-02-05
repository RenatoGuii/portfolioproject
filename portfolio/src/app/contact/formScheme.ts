import * as Yup from "yup";

export interface FormProps {
    name: string;
    email: string;
    message: string;
}

export const formScheme: FormProps = { name: '', email: '', message: ''};

export const formValidationScheme = Yup.object().shape({
    name: Yup.string().trim()
        .required("Nome é obrigatório")
        .max(50, "O nome possuí um limite de 50 caracteres"),
    email: Yup.string().trim()
        .required("Email é obrigatório")
        .email("Email inválido"),    
    message: Yup.string().trim()
        .required("Mensagem é obrigatório")
})