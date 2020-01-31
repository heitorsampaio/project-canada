import firebase from "firebase";

class Fire {
    constructor() {
        this.init();
        this.checkAuth();
    }

    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyDn7-IAKGeiPMnIWdX87w45v48sdyqbAts",
                authDomain: "socialfishing-7c593.firebaseapp.com",
                databaseURL: "https://socialfishing-7c593.firebaseio.com",
                projectId: "socialfishing-7c593",
                storageBucket: "socialfishing-7c593.appspot.com",
                messagingSenderId: "590783799248",
                appId: "1:590783799248:web:e5b5aaaca16de7b54523d5",
                measurementId: "G-JJ96W39704"

            });
        }
    };

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously();
            }
        });
    };

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            };

            this.db.push(message);
        });
    };

    parse = message => {
        const { user, text, timestamp } = message.val();
        const { key: _id } = message;
        const createdAt = new Date(timestamp);

        return {
            _id,
            createdAt,
            text,
            user
        };
    };

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
    };

    off() {
        this.db.off();
    }

    get db() {
        return firebase.database().ref("messages");
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
}

export default new Fire();
