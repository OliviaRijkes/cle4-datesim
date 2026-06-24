import {Actor, Color, FontUnit, Label, ScreenElement, Vector} from "excalibur";
import {Resources} from "../resources.js";

export class Choiceui extends ScreenElement {
    onInitialize(engine) {
        //needs the branch it ended at to load the choices
        console.log(this.scene.dateCharacter.choices, this.scene.branchName)
        const choices = this.scene.dateCharacter.choices[this.scene.branchName]

        // loops through all choices and makes a label with the 1st text
        for (let i = 0; i < choices.length; i++) {

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
        this.scene.ui.loadText()
        this.scene.translateTextFunction(this.scene.ui.mainTextLabel.text)

        //remove choiceLabels
        this.kill()
    }
}