import getPostContent from "@/lib/dummyjson";

export default async function handler(req, res) {

    try {
        let randomNumber = Math.floor(Math.random() * 20) + 1;
        const content = await getPostContent(randomNumber)
        res.status(200).json({content});
    } catch (error) {
        res.status(error.code).json({ error: error.toString() })
    }
}
