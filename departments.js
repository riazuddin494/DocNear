// =============================
// Department Search
// =============================

function searchDepartment() {

    let input = document.getElementById("searchDepartment").value.toLowerCase();

    let cards = document.querySelectorAll(".department-card");

    cards.forEach(function(card){

        let name = card.dataset.name.toLowerCase();

        if(name.includes(input)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

}

// =============================
// Live Search
// =============================

document.getElementById("searchDepartment").addEventListener("keyup",searchDepartment);

// =============================
// Find Doctors Button
// =============================

let buttons=document.querySelectorAll(".department-card a");

buttons.forEach(function(btn){

    btn.addEventListener("click",function(e){

        e.preventDefault();

        let department=this.parentElement.dataset.name;

        window.location.href=
        "doctors.html?department="+encodeURIComponent(department);

    });

});