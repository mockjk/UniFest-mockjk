export default interface User{
    id?: string;
    email: string;
    password: string;
    fullName: string;
    age?: number;
    phone: number;
    cpf: string;
    token?: string;
}