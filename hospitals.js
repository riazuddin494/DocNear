/* =========================================================
   DOCNEAR - HOSPITAL PAGE JAVASCRIPT
   ========================================================= */


/* =========================================================
   HOSPITAL DATABASE
   ========================================================= */

const hospitals = [

    /* =========================
       DHAKA
    ========================= */

    {
        name: "Square Hospital",
        city: "Dhaka",
        type: "Private Hospital",
        address: "Panthapath, Dhaka",
        phone: "+880 2 8144400",
        rating: "4.6",
        image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Evercare Hospital Dhaka",
        city: "Dhaka",
        type: "Private Hospital",
        address: "Bashundhara R/A, Dhaka",
        phone: "+880 2 55037242",
        rating: "4.5",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "United Hospital Limited",
        city: "Dhaka",
        type: "Private Hospital",
        address: "Gulshan, Dhaka",
        phone: "+880 2 8836446",
        rating: "4.4",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Labaid Specialized Hospital",
        city: "Dhaka",
        type: "Specialized Hospital",
        address: "Dhanmondi, Dhaka",
        phone: "+880 2 58610793",
        rating: "4.3",
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Ibn Sina Specialized Hospital",
        city: "Dhaka",
        type: "Specialized Hospital",
        address: "Dhanmondi, Dhaka",
        phone: "+880 2 9126625",
        rating: "4.2",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Holy Family Red Crescent Medical College Hospital",
        city: "Dhaka",
        type: "Medical College Hospital",
        address: "Eskaton, Dhaka",
        phone: "+880 2 8311721",
        rating: "4.1",
        image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Popular Medical College Hospital",
        city: "Dhaka",
        type: "Medical College Hospital",
        address: "Dhanmondi, Dhaka",
        phone: "+880 2 9669480",
        rating: "4.2",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Anwer Khan Modern Medical College Hospital",
        city: "Dhaka",
        type: "Medical College Hospital",
        address: "Dhanmondi, Dhaka",
        phone: "+880 2 9670295",
        rating: "4.1",
        image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "BIRDEM General Hospital",
        city: "Dhaka",
        type: "Specialized Hospital",
        address: "Shahbag, Dhaka",
        phone: "+880 2 9661551",
        rating: "4.5",
        image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Bangladesh Medical College Hospital",
        city: "Dhaka",
        type: "Medical College Hospital",
        address: "Dhanmondi, Dhaka",
        phone: "+880 2 9118202",
        rating: "4.0",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80"
    },


    /* =========================
       CHATTOGRAM
    ========================= */

    {
        name: "Evercare Hospital Chattogram",
        city: "Chattogram",
        type: "Private Hospital",
        address: "Anannya Residential Area, Chattogram",
        phone: "+880 9612 310000",
        rating: "4.5",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Chattogram Medical College Hospital",
        city: "Chattogram",
        type: "Medical College Hospital",
        address: "Panchlaish, Chattogram",
        phone: "+880 31 616786",
        rating: "4.2",
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Imperial Hospital Limited",
        city: "Chattogram",
        type: "Private Hospital",
        address: "Khulshi, Chattogram",
        phone: "+880 9612 247247",
        rating: "4.4",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "CSCR Hospital",
        city: "Chattogram",
        type: "Private Hospital",
        address: "O.R. Nizam Road, Chattogram",
        phone: "+880 31 2555455",
        rating: "4.1",
        image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=900&q=80"
    },


    /* =========================
       SYLHET
    ========================= */

    {
        name: "Sylhet MAG Osmani Medical College Hospital",
        city: "Sylhet",
        type: "Medical College Hospital",
        address: "Medical Road, Sylhet",
        phone: "+880 821 713667",
        rating: "4.2",
        image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Mount Adora Hospital",
        city: "Sylhet",
        type: "Private Hospital",
        address: "Akhalia, Sylhet",
        phone: "+880 821 727777",
        rating: "4.3",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Ibn Sina Hospital Sylhet",
        city: "Sylhet",
        type: "Private Hospital",
        address: "Subhanighat, Sylhet",
        phone: "+880 821 727111",
        rating: "4.1",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
    },


    /* =========================
       RAJSHAHI
    ========================= */

    {
        name: "Rajshahi Medical College Hospital",
        city: "Rajshahi",
        type: "Medical College Hospital",
        address: "Medical College Road, Rajshahi",
        phone: "+880 721 772150",
        rating: "4.3",
        image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Islami Bank Medical College Hospital",
        city: "Rajshahi",
        type: "Medical College Hospital",
        address: "Airport Road, Rajshahi",
        phone: "+880 721 760000",
        rating: "4.0",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80"
    },

    {
        name: "Zamzam Islami Hospital",
        city: "Rajshahi",
        type: "Private Hospital",
        address: "Laxmipur, Rajshahi",
        phone: "+880 721 772222",
        rating: "4.1",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80"
    }

];


/* =========================================================
   DISPLAY HOSPITALS
   ========================================================= */

function displayHospitals(data) {

    const grid =
        document.getElementById("hospitalGrid");

    if (!grid) {
        return;
    }

    grid.innerHTML = "";


    /* NO RESULT */

    if (data.length === 0) {

        grid.innerHTML = `

            <div class="no-hospital">

                <i class="fa-solid fa-hospital"></i>

                <h3>No Hospital Found</h3>

                <p>
                    Try searching with another
                    hospital name or city.
                </p>

            </div>

        `;

        return;
    }


    /* CREATE HOSPITAL CARDS */

    data.forEach(hospital => {

        const mapURL =
            "https://www.google.com/maps/search/?api=1&query=" +
            encodeURIComponent(
                hospital.name + " " + hospital.address
            );


        const card =
            document.createElement("div");

        card.className =
            "hospital-card";


        card.innerHTML = `

            <!-- IMAGE -->

            <div class="hospital-image">

                <img
                    src="${hospital.image}"
                    alt="${hospital.name}"
                    loading="lazy"
                >

                <span class="hospital-status">

                    <i class="fa-solid fa-circle"></i>

                    Open / Available

                </span>

            </div>


            <!-- NAME -->

            <h3>
                ${hospital.name}
            </h3>


            <!-- TYPE -->

            <span class="hospital-type">

                ${hospital.type}

            </span>


            <!-- LOCATION -->

            <div class="hospital-detail">

                <i class="fa-solid fa-location-dot"></i>

                <span>
                    ${hospital.address}
                </span>

            </div>


            <!-- PHONE -->

            <div class="hospital-detail">

                <i class="fa-solid fa-phone"></i>

                <span>
                    ${hospital.phone}
                </span>

            </div>


            <!-- RATING -->

            <div class="hospital-rating">

                <span class="stars">
                    ★★★★★
                </span>

                <span>
                    ${hospital.rating} / 5
                </span>

            </div>


            <!-- ACTION BUTTONS -->

            <div class="hospital-actions">

                <a
                    href="javascript:void(0)"
                    class="view-btn"
                    onclick="viewHospital('${hospital.name}')">

                    <i class="fa-solid fa-eye"></i>

                    View Details

                </a>


                <a
                    href="${mapURL}"
                    target="_blank"
                    class="direction-btn">

                    <i class="fa-solid fa-location-arrow"></i>

                    Direction

                </a>

            </div>

        `;


        grid.appendChild(card);

    });

}


/* =========================================================
   CITY FILTER
   ========================================================= */

function filterHospital(city) {

    const buttons =
        document.querySelectorAll(".filter-btn");


    buttons.forEach(button => {

        button.classList.remove("active");

    });


    /* Find clicked button */

    buttons.forEach(button => {

        if (
            button.textContent
                .trim()
                .toLowerCase() ===
            city.toLowerCase()
        ) {

            button.classList.add("active");

        }

    });


    /* ALL */

    if (city === "All") {

        displayHospitals(hospitals);

        return;

    }


    /* FILTER */

    const filtered =
        hospitals.filter(hospital =>

            hospital.city.toLowerCase() ===
            city.toLowerCase()

        );


    displayHospitals(filtered);

}


/* =========================================================
   SEARCH HOSPITAL
   ========================================================= */

function searchHospitals() {

    const searchInput =
        document.getElementById(
            "hospitalSearch"
        );


    if (!searchInput) {
        return;
    }


    const keyword =
        searchInput.value
            .toLowerCase()
            .trim();


    /* EMPTY SEARCH */

    if (keyword === "") {

        displayHospitals(hospitals);

        return;

    }


    /* SEARCH */

    const results =
        hospitals.filter(hospital => {

            return (

                hospital.name
                    .toLowerCase()
                    .includes(keyword)

                ||

                hospital.city
                    .toLowerCase()
                    .includes(keyword)

                ||

                hospital.address
                    .toLowerCase()
                    .includes(keyword)

                ||

                hospital.type
                    .toLowerCase()
                    .includes(keyword)

            );

        });


    displayHospitals(results);

}


/* =========================================================
   VIEW HOSPITAL DETAILS
   ========================================================= */

function viewHospital(name) {

    const hospital =
        hospitals.find(
            item => item.name === name
        );


    if (!hospital) {
        return;
    }


    /* GOOGLE MAP */

    const mapURL =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(
            hospital.name + " " + hospital.address
        );


    /* CREATE MODAL */

    const modal =
        document.createElement("div");


    modal.className =
        "hospital-modal";


    modal.innerHTML = `

        <!-- OVERLAY -->

        <div
            class="hospital-modal-overlay"
            onclick="closeHospitalModal()">
        </div>


        <!-- MODAL BOX -->

        <div class="hospital-modal-box">


            <!-- CLOSE BUTTON -->

            <button
                class="modal-close"
                onclick="closeHospitalModal()">

                <i class="fa-solid fa-xmark"></i>

            </button>


            <!-- IMAGE -->

            <div class="modal-image">

                <img
                    src="${hospital.image}"
                    alt="${hospital.name}"
                >


                <span class="modal-status">

                    <i class="fa-solid fa-circle"></i>

                    Open / Available

                </span>

            </div>


            <!-- CONTENT -->

            <div class="modal-content">


                <!-- TYPE -->

                <span class="modal-type">

                    ${hospital.type}

                </span>


                <!-- NAME -->

                <h2>

                    ${hospital.name}

                </h2>


                <!-- RATING -->

                <div class="modal-rating">

                    <span class="modal-stars">

                        ★★★★★

                    </span>

                    <strong>

                        ${hospital.rating}

                    </strong>

                    <span>

                        / 5

                    </span>

                </div>


                <!-- DETAILS -->

                <div class="modal-details">


                    <!-- LOCATION -->

                    <div class="modal-detail">

                        <div class="modal-icon">

                            <i
                                class="fa-solid fa-location-dot">
                            </i>

                        </div>

                        <div>

                            <small>
                                Location
                            </small>

                            <p>
                                ${hospital.address}
                            </p>

                        </div>

                    </div>


                    <!-- PHONE -->

                    <div class="modal-detail">

                        <div class="modal-icon">

                            <i
                                class="fa-solid fa-phone">
                            </i>

                        </div>

                        <div>

                            <small>
                                Contact
                            </small>

                            <p>
                                ${hospital.phone}
                            </p>

                        </div>

                    </div>


                    <!-- AVAILABILITY -->

                    <div class="modal-detail">

                        <div class="modal-icon">

                            <i
                                class="fa-solid fa-clock">
                            </i>

                        </div>

                        <div>

                            <small>
                                Availability
                            </small>

                            <p>
                                24/7 Emergency Service
                            </p>

                        </div>

                    </div>

                </div>


                <!-- BUTTONS -->

                <div class="modal-actions">


                    <!-- DIRECTION -->

                    <a
                        href="${mapURL}"
                        target="_blank"
                        class="modal-direction">

                        <i
                            class="fa-solid fa-location-arrow">
                        </i>

                        Get Direction

                    </a>


                    <!-- CALL -->

                    <a
                        href="tel:${hospital.phone}"
                        class="modal-call">

                        <i
                            class="fa-solid fa-phone">
                        </i>

                        Call Hospital

                    </a>

                </div>

            </div>

        </div>

    `;


    document.body.appendChild(modal);


    /* STOP BODY SCROLL */

    document.body.style.overflow =
        "hidden";


    /* SHOW ANIMATION */

    setTimeout(() => {

        modal.classList.add("show");

    }, 10);

}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeHospitalModal() {

    const modal =
        document.querySelector(
            ".hospital-modal"
        );


    if (!modal) {
        return;
    }


    modal.classList.remove("show");


    setTimeout(() => {

        modal.remove();

        document.body.style.overflow = "";

    }, 250);

}


/* =========================================================
   ESC KEY TO CLOSE MODAL
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeHospitalModal();

        }

    }
);


/* =========================================================
   SEARCH WHILE TYPING
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const searchInput =
            document.getElementById(
                "hospitalSearch"
            );


        if (!searchInput) {
            return;
        }


        searchInput.addEventListener(
            "input",
            searchHospitals
        );


        /* ENTER KEY */

        searchInput.addEventListener(
            "keydown",
            function(event) {

                if (event.key === "Enter") {

                    searchHospitals();

                }

            }
        );

    }
);


/* =========================================================
   INITIAL PAGE LOAD
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayHospitals(hospitals);

    }
);