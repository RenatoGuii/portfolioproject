interface FieldErrorProps {
    error: any | null;
    touched: boolean | undefined;
}

export const FieldError: React.FC<FieldErrorProps> = ({ error, touched }: FieldErrorProps) => {
    if (touched && error) { 
        return (
            <span className="font-rationale tracking-wide text-red-500 mt-1 text-md">{error}</span>
        );
    }

    return null; 
};