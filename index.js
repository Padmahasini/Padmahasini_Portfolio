function portfolio() {
    document.getElementById("firstpage").style.display = "block";
    document.getElementById("welcome").style.display = "none";
}

function profilechange() {
    document.getElementById("profileinfo").style.display = "block";
    document.getElementById("img1").style.display = "none";
}
function imgchange() {
    document.getElementById("img1").style.display = "block";
    document.getElementById("img1").style.marginLeft = "25%";
    document.getElementById("profileinfo").style.display = "none";


}

// function profile() {
//     console.log("here");
//     document.getElementById("img1").style.display = "none";
//     document.getElementsByClassName("profile").style.display = "block";

// }
// function exp() {
//     console.log("here");
//     document.getElementById("exp").style.display = "block";
//     document.getElementsByClassName("profile").style.display = "block";

// }
// function skills() {
//     console.log("here");
//     document.getElementById("skills").style.display = "none";
//     document.getElementsByClassName("profile").style.display = "block";

// }

function openexp(evt, exp) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class=”tabcontent” and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class=”tablinks” and remove the class “active”
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an “active” class to the button that opened the tab
    document.getElementById(exp).style.display = "block";
    evt.currentTarget.className += " active";
}

function proj_result() {
    alert("hello");
    document.getElementById("proj-res").style.display = "block";
    document.getElementById("proj-res_1").style.display = "none";
}

function proj_res_out() {
    alert("hello11");
    document.getElementById("proj-res").style.display = "none";

    return true;

}

function overallblock(arg) {

    document.getElementById(arg.id).style.display = "block";
}

// closeSidebar();

function openSidebar() {
    document.getElementById("header").style.display = "block";
  }
  
  function closeSidebar() {
    document.getElementById("header").style.display = "none";
  }