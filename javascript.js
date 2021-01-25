function myFunction() {
    var hamburger = document.getElementById("hamburger");
    var list = document.getElementById("dropdown-content");
    console.log(list.style.display);

    if (list.style.display = "none") {
        list.style.display = "block";
        console.log("1");
    }

    else {
        list.style.display = "none";
        console.log("2");
    }

  }
