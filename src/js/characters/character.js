import {Actor, Vector} from "excalibur";
import {Resources} from "../resources";

export class Character extends Actor {

    constructor() {
        super()
        this.name = 'Kato'
        this.graphics.use(Resources.Character1.toSprite())
        this.branch = 'begin'

        //the dialog contains the branches with the dialog inside
        this.dialog = {
            begin: [
                `${this.name}: Hello, thx for meeting me owo`,
                `player: My name is ${this.name}`,
                `player: SO.. who are you?`
            ],
            normal: [
                "My name is Player",
                "I study",
                "ok"
            ],
            furry: [
                "Owo",
                "Are you a furry too?"
            ],
            wtf: [
                "Jezus christ",
                "that joke didn't land",
                "haha.. uhm."
            ]
        }
        //the choices the player makes at the end of each branch
        //each choice changes the current branch
        //in the choice on the ui it displays the first dialog in the text
        //when choosen it is displayed on the maintext and you go through it like normal dialog and it ends into the new branch
        this.choices = {
            begin: [
                {
                    text: [
                        "Player: My name is Max",
                        `player: SO.. who are you?`
                    ],
                    branch: 'normal'
                },
                {
                    text: [
                        "Hewwo My name is Player :3",
                        "I like the puppy ears you wear"
                    ],
                    branch: 'furry'
                },
                {
                    text: [
                        "It is Max m'lady",
                        "The only thing sharper than my katana is my wit m'lady"
                    ],
                    branch: 'wtf'
                }
            ]
        }
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Character1.toSprite());
        this.pos = new Vector(100, 200);
    }
}