class EmailService {
    baseURL: string = `${process.env.NEXT_PUBLIC_API_URL}/v1/email`;

    async saveEmail(dados: FormData) : Promise<number | null | undefined> {
        try {
            const response = await fetch(this.baseURL, {
                method: 'POST',
                body: dados
            })

            return response.status;        
        } catch (error) {
            console.error("Error saving email: ", error)
        }
    }

}

export const useEmailService = () => new EmailService();