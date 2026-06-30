import { Actor, Color, FontUnit, Label, Scene, Vector } from "excalibur";
import { Resources } from "../resources";

export class Selectionscene extends Scene {
    onInitialize(engine) {
        //background
        // const background = new Actor()
        // background.graphics.use(Resources.SelectionScene.toSprite())
        // background.pos= new Vector(640,360)
        // this.add(background)

        //screen elements
        this.bio = new Actor()
        this.selectionUI = new Actor()
        this.confirmButton = new Label({
            text: 'Bevestig date',
            pos: new Vector(200, 600),
            font: Resources.Font.toFont({
                unit: FontUnit.Px,
                size: 24,
                color: Color.Black
            })
        })

        this.add(this.bio)
        this.add(this.selectionUI)
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
        
        const characters = ["WillowHappy","OnyxHappy","StellaHappy","EzraHappy","EmineNeutral"]

        for (let i = 0; i < characters.length; i++) {
            const character = new Actor({width:100,height:100})
            character.graphics.use(Resources[characters[i]].toSprite())
            character.scale = new Vector(0.1,0.1)
            character.pos = new Vector(1020,150+120*i)
            this.add(character)
            
        }
    }
    loadBio() {
        //this.bio = selectedCharacter.bio image
    }
    selectionClick(characterIndex) {
        const character = characters[characterIndex]
        this.confirmButton.text = `Bevestig date met ${character}`
        //change the selectedCharacter
        //loadBio()
        //make the image stand-out from the rest of the selection screen
    }
    confirmClick() {
        //starts the date for pl1
            this.goToScene(`date${this.selectedCharacter.name}`)

        //show QR
    }
}