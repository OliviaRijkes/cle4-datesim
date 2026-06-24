import {Actor, Color, Keys, Scene, Vector} from "excalibur";
import {DateUI} from "../ui/willowDateui.js";
import willowData from "../../json/characters/willow.json";
import {Resources} from "../resources.js";
import {ChoiceUI} from "../ui/willowChoiceUI.js";

export class WillowDatescene extends Scene {

    onInitialize(engine) {
        console.log('dateScene start')

        // Now you only have to change where the dialogData comes from for each character, not replace dialogData everywhere
        this.dialogData = willowData;

        // Start in branch: begin
        this.currentBranchId = "begin";
        this.branch = this.findBranch(this.currentBranchId);

        // Character needs to be an actor so the image of the character can be shown on the screen
        this.dateCharacter = new Actor({
            pos: new Vector(640, 360)
        });

        this.add(this.dateCharacter);

        // The character needs to start with an image (corresponding to emotion)
        this.changeEmotion(this.branch.image);

        // (for later)
        // this.dialogHistory = [];

        // Save the characters name and their dialog in the dialog history (for later)
        // this.dialogHistory.push(
        //     `${this.branch.name}: ${this.branch.dialog}`
        // );

        this.ui = new DateUI();
        this.choices = new ChoiceUI();

        this.add(this.ui);
        this.add(this.choices)

        // get starting choices
        this.choices.showChoices(
            this.branch.responses
        );
    }

    // The id's in json are branches, get what is in that branch
    findBranch(id) {
        return this.dialogData.find(branch => branch.id === id);
    }

    nextClick() {

        const responses = this.branch.responses;

        // If there is only a link and not a response to click -> go to the link (= following branch) automatically
        if (
            responses.length === 1 &&
            !responses[0].response
        ) {
            this.changeBranch(responses[0].link);
        }
    }

    onPreUpdate(engine) {
        const kb = engine.input.keyboard
        if (kb.wasPressed(Keys.Space)) {
            this.nextClick()
        }
    }

    changeBranch(branchId) {

        this.currentBranchId = branchId;

        this.branch = this.findBranch(branchId);

        // for later
        // this.dialogHistory.push(
        //     `${this.branch.name}: ${this.branch.dialog}`
        // );

        // When branch is changed, the emotion can too
        this.changeEmotion(this.branch.image);

        this.ui.loadText();

        // get new choices when you come in new branch
        this.choices.showChoices(
            this.branch.responses
        );

        // Change friendship if present
        if (this.branch.friendship) {
            this.choices.changeFriendship(this.branch.friendship);
        }

        // Change love if present
        if (this.branch.love) {
            this.choices.changeLove(this.branch.love);
        }
    }

    // change the image based on the emotion of the character
    changeEmotion(imageName) {
        this.dateCharacter.graphics.use(
            Resources[imageName].toSprite()
        );

    }

    selectResponse(responseData) {

        // Save player (name) and responses in dialog history (if we want to add that later)
        // this.dialogHistory.push(
        //     `Player: ${responseData.response}`
        // );

        // Change branch based on which link is in the json (in responses)
        this.changeBranch(responseData.link);
    }
}