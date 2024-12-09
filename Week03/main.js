const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"]
const insertY = ["the soup kitchen", "Disneyland", "the White House"]
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]

function randomValueFromArray(array){
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

randomize.addEventListener("click", result);

function result() {

    let newStory = storyText;

    newStory = newStory.replaceAll(":insertx:", randomValueFromArray(insertX)).replaceAll(":inserty:", randomValueFromArray(insertY)).replaceAll(":insertz:", randomValueFromArray(insertZ));

    if(customName.value !== "") {
        const name = customName.value;
        newStory = newStory.replaceAll("Bob", name);
    }

    if(document.getElementById("uk").checked) {
        const weight = `${Math.round(300 / 14)} stone`;
        const temperature = `${Math.round((94 - 32) * 5 / 9)} centigrade`;

        newStory = newStory.replaceAll("300 pounds", weight);
        newStory = newStory.replaceAll("94 fahrenheit", temperature);
    }

    story.textContent = newStory;
    story.style.visibility = "visible";
}