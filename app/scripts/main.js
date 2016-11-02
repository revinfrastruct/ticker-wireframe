document.addEventListener('DOMContentLoaded', function() {


    // Convert timestamps
    moment.locale('sv');
    var timestamps = document.getElementsByClassName('timestamp');
    var i = 0;
    for (var a in timestamps) {
        var time = moment().subtract(i, 'minutes');
        // timestamps[a].text = moment(time).fromNow();
        i += Math.floor(Math.random() * 10) + 1;
    };

    document.querySelectorAll('header .radioToggle')[0].addEventListener('click', function() {
        var header = document.querySelectorAll('header')[0];
        if (header.classList) {
          header.classList.toggle('radio');
        } else {
          var classes = header.className.split(' ');
          var existingIndex = classes.indexOf('radio');

          if (existingIndex >= 0)
            classes.splice(existingIndex, 1);
          else
            classes.push('radio');

          header.className = classes.join(' ');
        }
    });
    // console.log(toggle);
    /*


    if (el.classList)
      el.classList.add(className);
    else
      el.className += ' ' + className;



    if (el.classList) {
      el.classList.toggle(className);
    } else {
      var classes = el.className.split(' ');
      var existingIndex = classes.indexOf(className);

      if (existingIndex >= 0)
        classes.splice(existingIndex, 1);
      else
        classes.push(className);

      el.className = classes.join(' ');
    }

    */
});
