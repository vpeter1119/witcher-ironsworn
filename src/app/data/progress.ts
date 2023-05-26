export interface Progress {
    rank: PROGRESS_RANK;
    value: number;
}

export enum PROGRESS_RANK {
    "Troublesome",
    "Dangerous",
    "Formidable",
    "Extreme",
    "Epic"
}
