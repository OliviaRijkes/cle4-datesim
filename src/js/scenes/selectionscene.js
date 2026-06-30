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
        //internal variables
        this.selectedCharacter
        this.characters = ["Willow","Onyx","Stella","Ezra","Emine","Cristina"]

        //load everything now
        this.add(this.bio)
        this.add(this.selectionUI)
        this.add(this.confirmButton)
        this.confirmButton.on("pointerdown",()=> this.confirmClick())

        this.loadSelection()


    }
    loadSelection() {
        //for the amount of people avialable
        const amount = 9
        const beginXPos = 1020
        const beginYPos = 150
        const imageSize =100
        const spaceBetween = 120
        
        const characters = this.characters
    

        for (let i = 0; i < characters.length; i++) {
            const character = new Actor({width:2100,height:2100})
            character.graphics.use(Resources[`${characters[i]}Profile`].toSprite())
            character.scale = new Vector(0.05,0.05)
            character.pos = new Vector(1020,60+120*i)
            this.add(character)
            character.on("pointerdown",()=>this.selectionClick(i))
            
        }
    }
    loadBio() {
        //this.bio = selectedCharacter.bio image
    }
    selectionClick(characterIndex) {
        this.confirmButton.text = `Bevestig date met ${this.characters[characterIndex]}`
        //change the selectedCharacter
        this.selectedCharacter = this.characters[characterIndex]
        //loadBio()
        //make the image stand-out from the rest of the selection screen
    }
    confirmClick() {
        //starts the date for pl1
        console.log(this.selectedCharacter)
            this.engine.goToScene(`date${this.selectedCharacter}`)

        //show QR
    }
}