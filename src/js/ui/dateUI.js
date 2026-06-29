import {Actor, Color, Font, FontUnit, Keys, Label, Rectangle, ScreenElement, Vector} from "excalibur";
import {Resources as resources, Resources} from "../resources.js";

export class DateUI extends ScreenElement {

    onInitialize(engine) {

        // Main text
        this.mainTextLabel = new Label({
            text: ``,
            pos: new Vector(170, 560),
            font: Resources.Font.toFont({
                unit: FontUnit.Px,
                size: 25,
                color: Color.Black
            })
        });
        let main = new Actor();
        main.graphics.use(resources.Maintext.toSprite());
        main.z = 0;
        main.pos = new Vector(500, 600);
        main.scale = new Vector(1.1, 1.1)
        this.addChild(main);
        this.addChild(this.mainTextLabel);
        this.loadText();

    }

    // Put the character's data (text) from json in the text label
    loadText() {
        console.log("mainTextLabel =", this.mainTextLabel);

        this.mainTextLabel.text =
            `${this.scene.branch.name}: ${this.scene.branch.dialog}`;
    }
}