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
}