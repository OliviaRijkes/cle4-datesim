import { Label, Scene } from "excalibur";

export class Selectionscene extends Scene{
    onInitialize(engine){
        //screen elements
        this.bio
        this.selectionUI
        this.confirmButton

        this.add(this.bio)
        //internal variables
        this.selectedCharacter

    }
    loadSelection(){
        //for the amount of people avialable
        for (let i = 0; i < amount; i++) {
            //spawn an image at the position
            //the image onclick => selectionclick
        }
    }
    loadBio(){
        //this.bio = selectedCharacter.bio image
    }
    selectionClick(character){
        //change the selectedCharacter
        //loadBio()
    }
    confirmClick(){
        //starts the date for pl1
        //go to the research stuff pl2
    }
}