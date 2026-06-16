import {Color, Font, FontUnit, Label, ScreenElement, Vector} from "excalibur";
import {Resources} from "../resources.js";

export class Dateui extends ScreenElement{
    onInitialize(engine){
        //maintext

        this.mainTextLabel = new Label({
            text: 'test',
            pos: new Vector(100,550),
            font: Resources.Font.toFont({
                unit: FontUnit.Px,
                size: 30,
                color: Color.Black
            })
        })
        this.loadDialog();
        this.addChild(this.mainTextLabel);



        //lovemeter
    }
    loadDialog() {
        const dialog = this.scene.dateCharacter.dialog.begin[0];
        this.mainTextLabel.text = dialog;
    }
}