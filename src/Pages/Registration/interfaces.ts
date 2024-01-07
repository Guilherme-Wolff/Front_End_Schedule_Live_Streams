export interface ResponseAuth {
    code?: number;
    message?: string;
    register?:boolean;
}

export interface ResponseAuthLogin {
    code?: number;
    message?: string;
    register?:boolean;
    data:any;
}

