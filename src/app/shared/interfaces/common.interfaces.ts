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