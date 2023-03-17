import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export function initFirebase(apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId) {
    const firebaseConfig = {
        apiKey: apiKey,
        authDomain: authDomain,
        databaseURL: databaseURL,
        projectId: projectId,
        storageBucket: storageBucket,
        messagingSenderId: messagingSenderId,
        appId: appId,
    };

    // Inicializa Firebase
    const app = initializeApp(firebaseConfig);

    // Exporta la referencia a la base de datos de Firebase
    const db = getDatabase(app);

    return db;
}