import { MonsterType } from "../utils/monster.utils";

export class Monster {

    id: number = -1;
    name: string = "Monster";
    image: string = "assets/img/monster.png";
    type: MonsterType = MonsterType.ELECTRIC;
    hp: number = 60;
    figureCaption: string = "N°001 Monster"

    attackName: string = "Geo Impact";
    attackStrenght: number = 10;
    attackDescription: string = "this is a long description..."

    copy(): Monster {
        return Object.assign(new Monster(), this);
    }
}