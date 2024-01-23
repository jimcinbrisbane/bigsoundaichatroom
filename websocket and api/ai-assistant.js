import Prompt from "./prompt.js"
export default class Assistant{
    /**
     * 
     * @param {string} apiKey 
     */
    constructor(apiKey){
        this.apiKey = apiKey
    }

    /**
     * 
     * @param {Prompt} prompt 
     */
    getResponse(prompt){
        return prompt.getResponse(this.apiKey);
    }
}