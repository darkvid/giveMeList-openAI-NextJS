import { initFirebase } from "@/lib/firebase";
import { ref, onValue } from "firebase/database";

export default async function handler (req, res) {
    const db = initFirebase(
        process.env.FIREBASE_API_KEY,
        process.env.FIREBASE_AUTH_DOMAIN,
        process.env.FIREBASE_DATABASE_URL,
        process.env.FIREBASE_PROJECT_ID,
        process.env.FIREBASE_STORAGE_BUCKET,
        process.env.FIREBASE_MESSAGE_SENDER_ID,
        process.env.FIREBASE_APP_ID        
    );
    if (req.method == "GET") {
        const listRef = ref(db);
        onValue(listRef, (snapshot) => {
            const data = snapshot.val();
            return res.status(200).json(data);
        });
    }

    //not supported method
    res.status(405);
}