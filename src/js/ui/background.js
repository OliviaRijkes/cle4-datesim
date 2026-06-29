import {Actor, Vector} from "excalibur";
import {Resources as resources} from "../resources.js";
import {Table} from "./table.js";

export class Background extends Actor {
    onInitialize(engine) {
        this.graphics.use(resources.Background.toSprite());
        this.pos = new Vector(engine.drawWidth / 2, engine.drawHeight / 2);
        this.scale = new Vector(0.335 , 0.335);
        const table = new Table();
        table.z = 1
        this.addChild(table);
    }
}