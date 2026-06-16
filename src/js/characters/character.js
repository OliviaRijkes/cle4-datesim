import { Actor } from "excalibur";
import { Resources } from "../resources";

export class Character extends Actor {
    constructor() {
        super()
        this.name = Kato
        this.graphics.use(Resources.Character1.toSprite())
        this.branch = 'begin'
        this.dialog = {
            begin: [
                `Hello, thx for meeting me owo`
                    `My name is ${this.name}`
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
        this.choices = {
            begin: [
                {
                    text: [
                        "My name is Max",
                        "I study"
                    ],
                    branch() {
                        this.branch = 'normal'
                    }
                },
                {
                    text: [
                        "Hewwo My name is Max :3",
                        "I like the puppy ears you wear"
                    ],
                    branch() {
                        this.branch = 'furry'
                    }
                },
                {
                    text: [
                        "It is Max m'lady",
                        "The only thing sharper than my katana is my wit m'lady"
                    ],
                    branch() {
                        this.branch = 'wtf'
                    }
                }
            ]
    }
}
onInitialize(engine) {


}
}