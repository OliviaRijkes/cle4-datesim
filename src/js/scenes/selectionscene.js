import { Actor, Color, FontUnit, Label, Scene, Vector } from "excalibur";
import { Resources } from "../resources";

export class Selectionscene extends Scene {
    onInitialize(engine) {
        //background
        const background = new Actor()
        background.graphics.use(Resources.SelectionScene.toSprite())
        background.pos= new Vector(640,360)
        this.add(background)
        //screen elements
        this.bio = new Actor()
        this.selectionUI
        this.confirmButton = new Label({
            text: 'Bevestig date',
            pos: new Vector(200, 600),
            font: Resources.Font.toFont({
                unit: FontUnit.Px,
                size: 24,
                color: Color.Black
            })
        })

        // this.add(this.bio)
        // this.add(this.selectionUI)
        this.add(this.confirmButton)

        this.loadSelection()

        //internal variables
        this.selectedCharacter

    }
    loadSelection() {
        //for the amount of people avialable
        const amount = 9
        const beginXPos = 1020
        const beginYPos = 150
        const imageSize =100
        const spaceBetween = 120

        for (let i = 0; i < amount; i++) {
            //spawn an image
            const image = new Actor()
            image.graphics.use(Resources.Selection0.toSprite())
            //get the right position
            if (amount%2 === 1){
                image.pos = new Vector(beginXPos+spaceBetween, beginYPos+ spaceBetween*i)
            } else{
                image.pos = new Vector(beginXPos, beginYPos+ spaceBetween*i/2)
            }

            //the image onclick => selectionclick(i)
            image.on('pointerdown', (i)=>this.selectionClick(i))
            this.add(image)
        }
    }
    loadBio() {
        //this.bio = selectedCharacter.bio image
    }
    selectionClick(character) {
        console.log(character)
        //change the selectedCharacter
        //loadBio()
        //make the image stand-out from the rest of the selection screen
    }
    confirmClick() {
        //starts the date for pl1
        //go to the research stuff pl2
    }
}