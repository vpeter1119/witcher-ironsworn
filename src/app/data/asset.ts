export interface Asset {
    type: string;
    name: string;
    abilities: AssetAbility[];
}

export interface AssetAbility {
    name: string;
    hasTracker: boolean;
    trackerMax?: number;
}