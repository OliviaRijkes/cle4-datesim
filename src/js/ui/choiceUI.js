import {Actor, Color, FontUnit, Label, ScreenElement, Vector} from "excalibur";
import {Resources} from "../resources.js";

export class ChoiceUI extends ScreenElement {

    constructor() {
        super();

        this.choiceLabels = [];
    }

    onInitialize(engine) {
        //friendshipbar and lovebar
        let lovebarBackground = new Actor({
            x: 1050,
            y: 40,
            color: Color.fromRGB(255, 255, 255, 0.4),
            width: 200,
            height: 20,
            anchor: Vector.Zero
        })
        this.addChild(lovebarBackground);

        this.lovebar = new Actor({x: 1050, y: 40, color: Color.Pink, width: 200, height: 20, anchor: Vector.Zero})
        this.addChild(this.lovebar);
        this.lovebar.scale = new Vector(0, 1);
        this.currentLove = 0;
        this.maxLove = 100;

        let friendshipbarBackground = new Actor({
            x: 1050,
            y: 90,
            color: Color.fromRGB(255, 255, 255, 0.4),
            width: 200,
            height: 20,
            anchor: Vector.Zero
        })
        this.addChild(friendshipbarBackground);

        this.friendshipbar = new Actor({
            x: 1050,
            y: 90,
            color: Color.Green,
            width: 200,
            height: 20,
            anchor: Vector.Zero
        })
        this.addChild(this.friendshipbar);
        this.friendshipbar.scale = new Vector(0, 1);
        this.currentFriendship = 0;
        this.maxFriendship = 100;
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
                pos: new Vector(890, 620 - index * 120),
                font: Resources.Font.toFont({
                    unit: FontUnit.Px,
                    size: 20,
                    color: Color.Black
                })
            });

            label.on("pointerdown", () => {
                this.choiceClick(response);
            });
            label.z = 1;
            let choiceBox = new Actor();
            choiceBox.graphics.use(Resources.Choice.toSprite());
            choiceBox.z = 1
            choiceBox.scale = new Vector(1.15, 1);
            choiceBox.pos = new Vector(1050, 650 - index * 120);
            this.addChild(choiceBox);
            this.choiceLabels.push(label);
            this.addChild(label);
        });
    }

    choiceClick(responseData) {
        this.scene.selectResponse(responseData);
    }

    //The friendship- and lovebar need to be able to go up and down
    changeLove(number) {
        this.currentLove += number;
        if (this.currentLove < 0) this.currentLove = 0;
        if (this.currentLove > 100) this.currentLove = this.maxLove;
        const percent = this.currentLove / this.maxLove;
        // update the scale
        this.lovebar.scale = new Vector(percent, 1)
    }

    changeFriendship(number) {
        this.currentFriendship += number;
        if (this.currentFriendship < 0) this.currentFriendship = 0;
        if (this.currentFriendship > 100) this.currentFriendship = this.maxFriendship;
        const percent = this.currentFriendship / this.maxFriendship;
        // update the scale
        this.friendshipbar.scale = new Vector(percent, 1)
    }
}