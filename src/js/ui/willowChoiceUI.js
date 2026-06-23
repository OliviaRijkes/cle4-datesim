import {Color, FontUnit, Label, ScreenElement, Vector} from "excalibur";
import {Resources} from "../resources.js";

export class ChoiceUI extends ScreenElement {

    constructor() {
        super();

        this.choiceLabels = [];
    }
    
    showChoices(responses) {

        // clear old buttons
        for (const label of this.choiceLabels) {
            label.kill();
        }

        this.choiceLabels = [];

        responses.forEach((response, index) => {

            if (!response.response) return;

            const label = new Label({
                text: response.response,
                pos: new Vector(900, 500 + index * 50),
                font: Resources.Font.toFont({
                    unit: FontUnit.Px,
                    size: 24,
                    color: Color.Black
                })
            });

            label.on("pointerdown", () => {
                this.choiceClick(response);
            });

            this.choiceLabels.push(label);
            this.addChild(label);
        });
    }

    choiceClick(responseData) {
        this.scene.selectResponse(responseData);
    }
}