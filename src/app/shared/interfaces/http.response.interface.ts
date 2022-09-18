export interface HttpResponse {
    code: number;
    type: string;
    message: string;
    data?: string;
    token?: string | undefined;
}