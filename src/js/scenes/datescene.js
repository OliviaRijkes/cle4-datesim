import { Keys, Scene } from "excalibur";
import { Dateui } from "../ui/dateui.js";
import { Character } from "../characters/character.js";
import { Choiceui } from "../ui/choiceui.js";

export class Datescene extends Scene {
    onInitialize(engine) {
        console.log('dateScene start')
        this.dateCharacter = new Character();
        this.ui = new Dateui();
        this.choices = new Choiceui();
        this.add(this.dateCharacter);
        this.add(this.ui);
        this.add(this.choices)

        this.branchName = 'begin'
        this.branch = this.dateCharacter.dialog.begin
        this.dialogIndex = 0
    }
    nextClick() {
        if (this.branch.length > this.dialogIndex + 1) {
            this.dialogIndex++
            this.ui.loadText()
            console.log(this.branch.length, this.dialogIndex)
        }
    }

    onPreUpdate(engine) {
        const kb = engine.input.keyboard
        if (kb.wasPressed(Keys.Space)) {
            this.nextClick()
        }
    }

    translateTextFunction(text) {
        //2 functions, bc 2x 2bits
        for (let i = 0; i < 2; i++) {
            const functionBit = text[0+i]
            const valueBit = text[1+i]
            switch (functionBit) {
                case 's':
                    this.changeScene(valueBit)
                    break;
                case 'b':
                    this.changeBranch(valueBit)
                    break;
                case 'e':
                    this.changeEmotion(valueBit)
                    break;
                case 'l':
                    this.changeLove(valueBit)
                    break;
                case 'f':
                    this.changeFriendship(valueBit)
                    break;
                default:
                    break;
            }
        }
    }
    changeScene(sceneNumber) {

    }
    changeBranch(branchNumber) {
        let name = Object.keys(this.dateCharacter.dialog)[branchNumber]
        this.branchName = name
        this.branch = this.dateCharacter.dialog[name]
    }
    changeEmotion(emotionNumber) {

    }
    changeLove(number) {

    }
    changeFriendship(number) {

    }

}
