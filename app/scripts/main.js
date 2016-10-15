// Convert timestamps
moment.locale('sv');
var timestamps = document.getElementsByClassName('timestamp');
var i = 0;
for (var a in timestamps) {
    var time = moment().subtract(i, 'minutes');
    timestamps[a].text = moment(time).fromNow();
    i += Math.floor(Math.random()*10)+1;
};
