import fetch from "node-fetch";
/**
 * 
 * @param {string} promptString 
 * @param {string} apiKey 
 */
export default async function send(promptString, apiKey){
    const bodyJSON = {
        model: "gpt-3.5-turbo",
        messages: [{"role": "system", "content": "You are a helpful assistant that alters text messages. You never speak directly to the user."}, {"role": "user", "content": promptString}],
        temperature: 0.8
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify(bodyJSON)
    });

    if(!response.ok) throw Error("It f'd up");
    
    const json = await response.json();

    return json.choices[0].message.content;
}