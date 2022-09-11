export interface HttpResponse {
    code: number;
    type: string;
    message: string;
    data?: string;
    api_token?: string | undefined;
}