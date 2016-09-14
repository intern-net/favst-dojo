import firebase from 'firebase';

firebase.initializeApp({
    authDomain: 'favst-dojo.firebaseapp.com',
    databaseURL: 'https://favst-dojo.firebaseio.com'
});

var db = firebase.database();
var storage = firebase.storage();

function LoadVoices(cb) {
    db.ref('/voices').once('value', function (snapshot) {
        const voices = {};
        const obj = snapshot.val();
        const promises = [];
        Object.keys(obj).forEach(function (genreID) {
            Object.keys(obj[genreID]).forEach(function (id) {
                const voice = obj[genreID][id];
                const p = storage.refFromURL(voice.voiceURL).getDownloadURL().then(function (voiceURL) {
                    const vs = voices[genreID] || [];
                    vs.push({
                        id: id,
                        title: voice.title,
                        linkURL: voice.linkURL,
                        voiceURL: voiceURL,
                    });
                    voices[genreID] = vs;
                });
                promises.push(p);
            });
        });
        Promise.all(promises).then(function () {
            cb(voices);
        });
    });
}

export default LoadVoices
