import {Actor, Color, Font, FontUnit, Keys, Label, Rectangle, ScreenElement, Vector} from "excalibur";
import {Resources} from "../resources.js";


export class Dateui extends ScreenElement {
    onInitialize(engine) {
        //maintext
        this.mainTextLabel = new Label({
            text: 'test',
            pos: new Vector(100, 550),
            font: Resources.Font.toFont({
                unit: FontUnit.Px,
                size: 30,
                color: Color.Black
            })
        })
        this.addChild(this.mainTextLabel);

        //init write: uses branch,dialogIndex
        this.loadText();
        // this.loadChoices()

        //friendship bar en love bar
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

        this.friendshipbar = new Actor({x: 1050, y: 90, color: Color.Green, width: 200, height: 20, anchor: Vector.Zero})
        this.addChild(this.friendshipbar);
        this.friendshipbar.scale = new Vector(0, 1);
        this.currentFriendship = 0;
        this.maxFriendship = 100;
    }

    loadText() {
        this.mainTextLabel.text = this.scene.branch[this.scene.dialogIndex]
    }

    loadChoices() {
        //needs the branch it ended at to load the choices
        console.log(this.scene.dateCharacter.choices, this.scene.branchName)
        const choices = this.scene.dateCharacter.choices[this.scene.branchName]

        //loops through all choices and makes a label with the 1st text
        for (let i = 0; i < choices.length; i++) {
            // const choiceLabel = new ChoiceLabel(i, choices[i].text[0])

            const choiceLabel = new Label({
                text: choices[i].text[0],
                pos: new Vector(900, 500 + 50 * i),
                font: Resources.Font.toFont({
                    unit: FontUnit.Px,
                    size: 24,
                    color: Color.Black
                })
            })
            // per choice it adds a click even that needs the choice index

            choiceLabel.on("pointerdown", () => this.choiceClick(i))
            this.addChild(choiceLabel)
        }
    }

    choiceClick(i) {
        //resets the dialogIndex
        this.scene.dialogIndex = 0

        //change the branch
        //index of the dialog based of the name
        const dialogArray = Object.keys(this.scene.dateCharacter.dialog)
        const branchName = this.scene.dateCharacter.choices[this.scene.branchName][i].branch
        this.scene.changeBranch(dialogArray.indexOf(branchName))

        //set branch & load
        this.loadText()
        this.scene.translateTextFunction(this.mainTextLabel.text)
    }

//De friendship- en lovebar moeten omhoog en omlaag kunnen gaan.
    changeLove(number) {
        this.currentLove += number;
        if(this.currentLove < 0) this.currentLove = 0;
        if(this.currentLove > 100) this.currentLove = this.maxLove;
        const percent = this.currentLove / this.maxLove;
        // update the scale
        this.lovebar.scale = new Vector(percent, 1)
    }

    changeFriendship(number) {
        this.currentFriendship += number;
        if(this.currentFriendship < 0) this.currentFriendship = 0;
        if(this.currentFriendship > 100) this.currentFriendship = this.maxFriendship;
        const percent = this.currentFriendship / this.maxFriendship;
        // update the scale
        this.friendshipbar.scale = new Vector(percent, 1)
    }
}