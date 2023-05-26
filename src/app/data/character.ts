import { Asset } from "./asset";
import { Experience } from "./experience";
import { Momentum } from "./momentum";
import { Progress } from "./progress";
import { Stat } from "./stat";
import { Status } from "./status";
import { Vow } from "./vow";

export interface Character {
    name: string;
    experience: Experience;
    momentum: Momentum;
    stats:  {
        edge: Stat,
        heart: Stat,
        iron: Stat,
        shadow: Stat,
        wits: Stat
    },
    bonds: Progress;
    vows: Vow[];
    debilities: {
        wounded: boolean,
        shaken: boolean,
        unprepared: boolean,
        encumbered: boolean,
        maimed: boolean,
        corrupted: boolean,
        cursed: boolean,
        tormented: boolean
    },
    statuses: {
        health: Status,
        spirit: Status,
        supply: Status
    },
    assets: Asset[]
}