#!/usr/bin/env node
'use strict';

var fs = require('fs');
var path = require('path');
var firebase = require('firebase');

var conf = {
    serviceAccount: __dirname + '/../credentials.json',
    databaseURL: 'https://favst-dojo.firebaseio.com/',
    storageBucket: 'favst-dojo.appspot.com'
};
firebase.initializeApp(conf);

const voicedir = '/Users/drillbits/src/github.com/intern-net/t2s/says';

var db = firebase.database();

var promises = [];
var objs = [];
fs.readdirSync(voicedir).forEach(function (genre) {
    const genredir = path.join(voicedir, genre);
    const stats = fs.statSync(genredir);
    if (stats.isDirectory()) {
        fs.readdirSync(genredir).forEach(function (meta) {
            if (meta.indexOf('.json') >= 0) {
                const metafile = path.join(voicedir, genre, meta);
                const obj = JSON.parse(fs.readFileSync(metafile, 'utf8'));
                obj.genre = genre;
                objs.push(obj);
            }
        });
    }
});

objs.forEach(function (obj) {
    promises.push(saveVoiceMeta(obj));
});

Promise.all(promises).then(function (values) {
    db.goOffline();
    process.exit();
});

function saveVoiceMeta(obj) {
    const ref = '/voices/' + obj.genre + '/' + obj.id;
    const snapshot = {
        title: obj.title,
        linkURL: obj.linkURL,
        voiceURL: 'gs://' + conf.storageBucket + ref + '.mp4'
    };
    return db.ref(ref).set(snapshot);
}

// function saveTestData(genre, id, title, linkURL, voiceURL) {
//     return db.ref('/voices/' + genre + '/' + id).set({
//         title: title,
//         linkURL: linkURL,
//         voiceURL: voiceURL
//     });
// }

// function retrieveVoicesByGenre(genre) {
//     console.log('try to retrieve genre:', genre);
//     return db.ref('/voices/' + genre).once('value', function (snapshot) {
//         console.log('retrieved genre:', genre);
//         console.log('val:', snapshot.val());
//         console.log('===============');
//     });
// }

// function retrieveVoice(genre, id) {
//     console.log('try to retrieve genre:', genre, 'id:', id);
//     return db.ref('/voices/' + genre + '/' + id).once('value', function (snapshot) {
//         console.log('retrieved genre:', genre, 'id:', id);
//         console.log('val:', snapshot.val());
//         console.log('===============');
//     });
// }

// console.log('save test data');
// console.log('===============');

// const p1 = saveTestData(
//     'all',
//     5673258670096384,
//     'バーガー専門店も焦る！隠れた黄身がとろ～り美味い『ベーコンエッグチーズバーガー』',
//     'https://www.favclip.com/article/detail/5673258670096384',
//     'http://example.com/5673258670096384.wav'
// );

// const p2 = saveTestData(
//     'all',
//     5221075923238912,
//     '【報ステ】千葉・切断遺体は不明の弟か　姉を逮捕',
//     'https://www.favclip.com/article/detail/5221075923238912',
//     'http://example.com/5221075923238912.wav'
// );

// const p3 = saveTestData(
//     'it',
//     4945909716615168,
//     'マリオやパックマンも！ AppStoreにiOS 10の「メッセージ」アプリ用ステッカーが加わった',
//     'https://www.favclip.com/article/detail/4945909716615168',
//     'http://example.com/4945909716615168.wav'
// );

// Promise.all([p1, p2, p3]).then(function () {
//     console.log('retrieve voices');
//     console.log('===============');

//     const p1 = retrieveVoicesByGenre('all');
//     const p2 = retrieveVoicesByGenre('it');
//     const p3 = retrieveVoice('it', 4945909716615168);
//     const p4 = retrieveVoice('all', 4945909716615168);

//     Promise.all([p1, p2, p3, p4]).then(function () {
//         db.goOffline();
//         process.exit();
//     })
// });
