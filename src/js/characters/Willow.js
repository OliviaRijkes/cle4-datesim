import {Actor, Vector} from "excalibur";
import {Resources} from "../resources";

export class Willow extends Actor {

    constructor() {
        super()
        this.name = 'Willow'
        this.graphics.use(Resources.Character1.toSprite())

        //the dialog contains the branches with the dialog inside
        this.dialog = {
            // branch 1
            begin: [
                `e400 ${this.name}: Hi! I'm Willow, nice to meet you.`
                // *Willow looks happy*
            ],
            // branch 2
            normal: [
                `e400 Player: Hello, I'm Player,`,
                `e0b5 Player: nice to meet you too.`
                // *Willow looks happy*
            ],
            // branch 3
            compliment: [
                `e500 Player: That's a cute name. I'm Player`,
                `e000 Player: nice to meet you.`,
                // *Willow looks happy and blushes*
                `e4b5 ${this.name}:Oh, thank you. I like yours too`,
            ],
            // branch 4
            energetic: [
                `e300 Player: HAIII! I’m Player!`,
                `e4b5 Player: Nice to meet you too!!`,
                // *Willow looks a little startled but happy*
            ],
            // branch 5
            pronouns: [
                `e400 ${this.name}: I'm non-binary by the way,`,
                `e000 ${this.name}: my pronouns are they/them.`
            ],
            // branch 6
            understanding: [
                `Player: Okay, I’ll keep that in mind.`,
                `Player: I go by [Pronouns].`,
                // *Willow looks happy*
                `${this.name}: Thanks, I will too`
            ],
            // branch 7
            meaning: [
                `Player: Sorry, what is that?`,
                `${this.name}: It means I’m neither male nor female.`
            ],
            // branch 8
            cruel: [
                `Player: Oh, so you're one of those people...`,
                // *Willow glares at you*
                `${this.name}: ‘What is that supposed to mean?`
            ],
            // branch 9
            fix: [
                `Player: I didn't mean it in a bad way.`,
                `Player: You're just unique`,
                `${this.name}: Please don't call it that, but I'll let it slide for now..`
            ],
            // branch 10
            ruined: [
                `Player: One of those people that can't just be *normal*`,
                `${this.name}: There's nothing wrong with being non-binary.`,
                `${this.name}: You're the weird one for treating me like that.`,
                `${this.name}: I'll take my leave now,`,
                `${this.name}: You're clearly not what I'm looking for.`,
                // *Willow leaves* -> Date ends
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
                        // bars stay the same.
                        `l000 Hello, I'm Player,`,
                        `l000 nice to meet you too.`
                    ],
                    branch: 'normal'
                },
                {
                    text: [
                        // Love bar goes up a little
                        `l300 That's a cute name. I'm [name]`,
                        `l000 nice to meet you.`
                    ],
                    branch: 'compliment'
                },
                {
                    text: [
                        // Love bar goes down a tiny bit.
                        `l200 HAIII! I’m [name]!`,
                        `l000 Nice to meet you too!!`
                    ],
                    branch: 'energetic'
                }
            ],
            pronouns: [
                {
                    text: [
                        // friendship bar goes up a bit
                        `0000 Okay, I’ll keep that in mind.`,
                        `0000 I go by [Pronouns].`
                    ],
                    branch: 'understanding'
                },
                {
                    text: [
                        // bars stay the same
                        `l000 Sorry, what is that?`
                    ],
                    branch: 'meaning'
                },
                {
                    text: [
                        // friendship and love bar both go down a lot
                        `l100 Oh, so you're one of those people...`
                    ],
                    branch: 'cruel'
                }
            ],
            cruel: [
                {
                    text: [
                        // bars stay the same
                        `l000 I didn't mean it in a bad way.`,
                        `l000 You're just unique`
                    ],
                    branch: 'fix'
                },
                {
                    text: [
                        // friendship and love bar both go down a bit
                        `l200 One of those people that can't just be *normal*`
                    ],
                    branch: 'ruined'
                }
            ]
        }


    }

    onInitialize(engine) {
        this.graphics.use(Resources.Character1.toSprite());
        this.pos = new Vector(100, 200);
    }
}