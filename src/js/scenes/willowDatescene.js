import {Keys, Scene} from "excalibur";
import {Dateui} from "../ui/dateui.js";
import willowData from "../../json/characters/willow.json";
import {Resources} from "../resources.js";

console.log("Loaded:", willowData);

export class WillowDatescene extends Scene {

    onInitialize(engine) {

        this.dialogData = willowData;

        this.currentBranchId = "begin";
        this.branch = this.findBranch(this.currentBranchId);

        this.dialogHistory = [];
        this.dialogHistory.push(
            `${this.branch.name}: ${this.branch.dialog}`
        );

        this.ui = new Dateui();

        // this.add(this.ui);

        this.ui.changeBranch(this.currentBranchId);
    }

    findBranch(id) {
        return this.dialogData.find(branch => branch.id === id);
    }

    nextClick() {

        const responses = this.branch.responses;

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

    showResponses() {

        const responses = this.branch.responses;

        this.ui.showChoices(responses);

    }

    changeBranch(branchId) {

        this.currentBranchId = branchId;

        this.branch = this.getBranch(branchId);

        this.dialogHistory.push(
            `${this.branch.name}: ${this.branch.dialog}`
        );

        this.changeEmotion(this.branch.image);

        this.ui.loadText();
    }

    changeEmotion(imageName) {
        this.dateCharacter.graphics.use(
            Resources[imageName].toSprite()
        );

    }

    selectResponse(responseData) {

        this.dialogHistory.push(
            `Player: ${responseData.response}`
        );

        this.changeBranch(responseData.link);

    }

    // love bar will need to change based on which response
    changeLove(number) {

    }

    // friendship bar will need to change based on which response
    changeFriendship(number) {

    }

}