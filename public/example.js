firebase.initializeApp({
    authDomain: 'favst-dojo.firebaseapp.com',
    databaseURL: 'https://favst-dojo.firebaseio.com'
});

var db = firebase.database();

db.ref('/voices/all').once('value', function (snapshot) {
    var obj = snapshot.val();
    Object.keys(obj).forEach(function(id) {
        var val = obj[id];
        console.log('ID:', id);
        console.log('Title:', val['title']);
        console.log('LinkURL:', val['linkURL']);
        console.log('VoiceURL:', val['voiceURL']);
        console.log('=====================================================================');
    });
});
