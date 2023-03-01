export async function completions (
    apiKey,
    prompt,
    max_tokens = 5
) {
    
    try{
        const response = await fetch ("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type"
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: `Build a list of 5 steps about ${prompt}`,
                max_tokens: Number(max_tokens)
            })
        });

        const { choices } = await response.json();
        if (choices.lenth <= 0){
            throw new Error("No results");
        }

        return choices[0].text;
    } catch (error) {
        throw new Error (JSON.stringify(error));
    }
    
}