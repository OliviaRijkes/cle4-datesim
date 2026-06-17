import { Color, Font, FontUnit, Keys, Label, Rectangle, ScreenElement, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class Dateui extends ScreenElement {
    onInitialize(engine) {
        //init vars
        this.dialogIndex = 0
        this.branch = this.scene.dateCharacter.dialog.begin

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
        console.log(this.branch[this.dialogIndex])
        this.loadText();
        this.loadChoices()

        //lovemeter
    }
    loadText() {
        this.mainTextLabel.text = this.branch[this.dialogIndex]
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
        this.dialogIndex = 0

        //set branch & load
        this.branch = this.scene.dateCharacter.choices[this.branch][i].branch
        this.loadText()

        //remove choiceLabels
    }

    //loads the next text and/or choices
    nextClick() {
        if(this.branch.length >this.dialogIndex+1){
            this.dialogIndex++
            this.loadText()
            console.log(this.branch.length, this.dialogIndex)
        } 
    }
    onPreUpdate(engine) {
        const kb = engine.input.keyboard
        if (kb.wasPressed(Keys.Space)) {
            this.nextClick()
        }
    }
}