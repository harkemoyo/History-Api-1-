// history.js
// window.history
// window.location
function show(output){
    document.getElementById('output').innerHTML += '<p>'+output+'</p>';
}
show('location.href: ' + location.href);
show('location.search: ' + location.search);
show('location.hash: ' + location.hash);

// history.go(-3);
// history.back();
// history.forward();
// location.reload();
// location.replace();
show('history.state: ' + history.state);