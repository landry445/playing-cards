import { MonsterType } from "../utils/monster.utils";

export class Monster {

    name: string = "Monster";
    image: string = "assets/img/monster.png";
    type: MonsterType = MonsterType.ELECTRIC;
    hp: number = 60;
    figureCaption: string = "N°001 Monster"

    attackName: string = "Geo Impact";
    attackStrenght: number = 10;
    attackDescription: string = "this is a long description..."

}