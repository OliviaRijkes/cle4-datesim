import {Actor, Vector} from "excalibur";
import { Resources } from "../resources";

export class Character extends Actor {
    constructor() {
        super()
        this.name = 'Kato'
        // this.graphics.use(Resources.Character1.toSprite())
        this.branch = 'begin'

        //the dialog contains the branches with the dialog inside
        this.dialog = {
            begin: [
                `Hello, thx for meeting me owo`,
                `My name is ${this.name}`,
                `SO.. who are you?`
            ],
            normal: [
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
                        "My name is Max",
                        `I study`
                    ],
                    branch: 'normal'
                },
                {
                    text: [
                        "Hewwo My name is Max :3",
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