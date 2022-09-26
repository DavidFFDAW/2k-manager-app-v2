export interface CurrentChampions {
    brand: string;
    championship_name: string;
    ch_img: string;
    name: string;
    overall?: number;
    image?: string;
    is_tag?: boolean;
    reign_days: number;
    reign_id: number;

    wrestlers?: [{
        name: string;
        overall: number;
        image: string;
    }]
}

export interface TeamInterface {
    id: number;
    name: string;
    overall: number;
    created_at: string;
    updated_at: string;
    members?: [{
        id: number;
        name: string;
        sex: string;
    }]
}