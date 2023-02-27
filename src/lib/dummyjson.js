export default async function getPostContent(id) {
    const response = await fetch(`https://dummyjson.com/posts/${id}?KEY=${process.env.OPENAI_MAX_TOKENS}`);

    if (!response.ok){
        const {statusText, status} = response;
        const error = new Error(statusText);
        error.code = status;
        throw error;
    }

    const json = await response.json();
    return json.body;
}
