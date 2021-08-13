import firebase from "firebase";

const firebaseConfig = {
        apiKey: "AIzaSyBG4q-vGvOtLgbC3UXTukwa_LUloQPIQGE",
        authDomain: "instagram-clone-react-2ac17.firebaseapp.com",
        databaseURL: "https://instagram-clone-react-2ac17-default-rtdb.firebaseio.com",
        projectId: "instagram-clone-react-2ac17",
        storageBucket: "instagram-clone-react-2ac17.appspot.com",
        messagingSenderId: "804269809362",
        appId: "1:804269809362:web:ac5fc55cd72254fdcd570b"
    };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
