import {Color, Font, FontUnit, Keys, Label, Rectangle, ScreenElement, Vector} from "excalibur";
import {Resources} from "../resources.js";

export class DateUI extends ScreenElement {

    onInitialize(engine) {

        // Main text
        this.mainTextLabel = new Label({
            text: ``,
            pos: new Vector(100, 550),
            font: Resources.Font.toFont({
                unit: FontUnit.Px,
                size: 30,
                color: Color.Black
            })
        });

        this.addChild(this.mainTextLabel);
        this.loadText();
    }

    // Put the character's data (text) from json in the labels and choices
    loadText() {
        console.log("mainTextLabel =", this.mainTextLabel);

        this.mainTextLabel.text =
            `${this.scene.branch.name}: ${this.scene.branch.dialog}`;
    }
}