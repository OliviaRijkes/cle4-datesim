import {Color, Font, FontUnit, Label, ScreenElement, Vector} from "excalibur";
import {Resources} from "../resources.js";

export class Dateui extends ScreenElement{
    onInitialize(engine){
        //maintext

        this.mainTextLabel = new Label({
            text: 'test',
            pos: new Vector(100,100),
            font: Resources.Font.toFont({
                unit: FontUnit.Px,
                size: 40,
                color: Color.Black
            })
        })
        this.addChild(this.mainTextLabel);

        //lovemeter
    }
}