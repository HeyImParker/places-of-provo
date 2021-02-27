document.getElementById("go").addEventListener('click', getDirections);

document.getElementById("map").src = "https://www.google.com/maps/embed/v1/place?key=" + config.MY_KEY + "&q=" + nameToAddress(document.getElementById("place").innerHTML);

function nameToAddress(placeName) {
    address = "";
    switch(placeName) {
        case "BYU":
            address = "150+E+1230+N+St,+Provo,+UT+84604";
            break;
        case "Don Joaquin Street Tacos":
            address = "150+W+1230+N+St,+Provo,+UT+84604";
            break;
        case "Peaks Ice Arena":
            address = "100+N+Seven+Peaks+Blvd,+Provo,+UT+84606";
            break;
        case "Y-Mountain":
            address = "Y+Mountain+Trailhead+Rd,+Provo,+UT+84604";
            break;
        case "Fish Kiss Mural":
            address = "32+S+Freedom+Blvd,+Provo,+UT+84601";
            break;
        case "Super Busy McDonald's":
            address = "211+W+1230+N,+Provo,+UT+84604";
            break;
        case "Vasa Fitness":
            address = "460+900+E,+Provo,+UT+84606";
            break;
    }
    return address;
}

function revert() {
    document.getElementById("map").src = "https://www.google.com/maps/embed/v1/place?key=" + config.MY_KEY + "&q=" + nameToAddress(document.getElementById("place").innerHTML);
}

function getDirections() {
    let startAdd = nameToAddress(document.getElementById("place").innerHTML)
    let endAdd = nameToAddress(document.getElementById("selector").value)
    let url = "https://www.google.com/maps/embed/v1/directions?key=" + config.MY_KEY;
    url += "&origin=" + startAdd + "&destination=" + endAdd;
    document.getElementById("map").src = url;
    let rButton = document.createElement("button");
    rButton.id = "revert";
    rButton.className = "pure-button pure-button-primary"
    rButton.innerHTML = "revert";
    rButton.addEventListener('click', function() {revert()})
    document.getElementById("search").appendChild(rButton);
}