import {Actor, Vector} from "excalibur";
import {Resources as resources} from "../resources.js";

export class Table extends Actor {
    onInitialize(engine) {
        this.graphics.use(resources.Table.toSprite());
        this.pos = new Vector(-120, -200)
        this.scale = new Vector(1.2 , 1.2)
    }
}