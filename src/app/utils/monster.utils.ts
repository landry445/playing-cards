export enum MonsterType {
    PLANT = "plant",
    ELECTRIC = "electric",
    FIRE = "fire",
    WATER = "water",
}

export interface IMonsterProperties {
    imageUrl: string;
    color: string;
}

export const MonsterTypeProperties: {[key: string]: IMonsterProperties} = {
    [MonsterType.PLANT]: {
        imageUrl: "assets/img/monster-deer.png",
        color: "rgba(135, 255, 124)"
    },
    [MonsterType.ELECTRIC]: {
        imageUrl: "assets/img/monster-rabbit.png",
        color: "rgba(255, 255, 104)"
    },
    [MonsterType.FIRE]: {
        imageUrl: "assets/img/monster-dog.png",
        color: "rgba(255, 104, 124)"
    },
    [MonsterType.WATER]: {
        imageUrl: "assets/img/monster-frog.png",
        color: "rgba(118, 235, 124)"
    }
}