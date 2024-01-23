import Assistant from "./ai-assistant.js";
import Prompt from "./prompt.js";

export { Assistant };
export { Prompt };

const assistant = new Assistant("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");
const newPrompt = new Prompt("I really want to go out to the cinemas sometime", ["funnier"], ["be a better surfer"]);
const resp = await assistant.getResponse(newPrompt);

console.log(resp);