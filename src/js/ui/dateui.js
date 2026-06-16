import { Color, Font, FontUnit, Label, Rectangle, ScreenElement, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class Dateui extends ScreenElement {
    onInitialize(engine) {
        this.dialogIndex = 0
        this.branch = this.scene.dateCharacter.branch
        this.currentDialog = this.branch
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
        const beginDialog = this.scene.dateCharacter.dialog.begin[0];
        this.loadText(beginDialog);
        this.addChild(this.mainTextLabel);

        //choices
        this.loadChoices()

        //lovemeter
    }
    loadText(text) {
        this.mainTextLabel.text = text;
    }
    //loads the choices in for the amount of choices
    loadChoices() {
        //needs the branch it ended at to load the choices
        const choices = this.scene.dateCharacter.choices[this.branch]

        //loops through all choices and makes a label with the 1st text
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
        this.dialogIndex =0

        //load dialog of the choice to load
        const choiseDialog = this.scene.dateCharacter.choices[this.branch][i]
        this.loadText(choiseDialog.text[0])

        //remove choiceLabels

    }
    //loads the next text in the dialog of the branch
    dialogForwardClick(dialog){
        if(dialog.length <this.dialogIndex)
        this.loadText(dialog[this.dialogIndex+1])
    }
}