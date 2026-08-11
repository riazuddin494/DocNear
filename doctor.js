// ==========================================
// DOCNEAR - DOCTOR DATABASE
// ==========================================

const doctors = [

    {
        name: "Dr. Md. Rahman",
        department: "Cardiology",
        hospital: "Square Hospital",
        location: "Dhaka",
        fee: "৳1000",
        time: "5:00 PM - 8:00 PM",
        rating: "4.9",
        image: "https://via.placeholder.com/150"
    },

    {
        name: "Dr. Ahmed Hasan",
        department: "Neurology",
        hospital: "Popular Diagnostic Centre",
        location: "Dhaka",
        fee: "৳1200",
        time: "6:00 PM - 9:00 PM",
        rating: "4.8",
        image: "https://via.placeholder.com/150"
    },

    {
        name: "Dr. Karim Uddin",
        department: "Orthopedics",
        hospital: "United Hospital",
        location: "Dhaka",
        fee: "৳900",
        time: "4:00 PM - 7:00 PM",
        rating: "4.7",
        image: "https://via.placeholder.com/150"
    },

    {
        name: "Dr. Nusrat Jahan",
        department: "Gynecology",
        hospital: "Evercare Hospital",
        location: "Dhaka",
        fee: "৳1200",
        time: "5:00 PM - 8:00 PM",
        rating: "4.9",
        image: "https://via.placeholder.com/150"
    },

    {
        name: "Dr. Samiul Islam",
        department: "Dermatology",
        hospital: "Labaid Specialized Hospital",
        location: "Dhaka",
        fee: "৳800",
        time: "6:00 PM - 9:00 PM",
        rating: "4.8",
        image: "https://via.placeholder.com/150"
    },

    {
        name: "Dr. Farhana Akter",
        department: "Pediatrics",
        hospital: "Ibn Sina Hospital",
        location: "Dhaka",
        fee: "৳700",
        time: "4:00 PM - 7:00 PM",
        rating: "4.8",
        image: "https://via.placeholder.com/150"
    },

    {
        name: "Dr. Mahmudul Hasan",
        department: "ENT",
        hospital: "Holy Family Hospital",
        location: "Dhaka",
        fee: "৳800",
        time: "5:00 PM - 8:00 PM",
        rating: "4.6",
        image: "https://via.placeholder.com/150"
    },

    {
        name: "Dr. Sadia Rahman",
        department: "Ophthalmology",
        hospital: "Bangladesh Eye Hospital",
        location: "Dhaka",
        fee: "৳900",
        time: "3:00 PM - 6:00 PM",
        rating: "4.9",
        image: "https://via.placeholder.com/150"
    },

    {
        name: "Dr. Tanvir Ahmed",
        department: "Gastroenterology",
        hospital: "Asgar Ali Hospital",
        location: "Dhaka",
        fee: "৳1100",
        time: "6:00 PM - 9:00 PM",
        rating: "4.7",
        image: "https://via.placeholder.com/150"
    },

    {
        name: "Dr. Rafiq Islam",
        department: "Pulmonology",
        hospital: "Square Hospital",
        location: "Dhaka",
        fee: "৳1000",
        time: "5:00 PM - 8:00 PM",
        rating: "4.8",
        image: "https://via.placeholder.com/150"
    },

    {
        name: "Dr. Mehedi Hasan",
        department: "General Medicine",
        hospital: "Popular Hospital",
        location: "Dhaka",
        fee: "৳600",
        time: "4:00 PM - 8:00 PM",
        rating: "4.6",
        image: "https://via.placeholder.com/150"
    },

    {
        name: "Dr. Sharmin Sultana",
        department: "Psychiatry",
        hospital: "National Institute of Mental Health",
        location: "Dhaka",
        fee: "৳900",
        time: "5:00 PM - 8:00 PM",
        rating: "4.8",
        image: "https://via.placeholder.com/150"
    },

    {
        name: "Dr. Arif Hossain",
        department: "Urology",
        hospital: "United Hospital",
        location: "Dhaka",
        fee: "৳1100",
        time: "6:00 PM - 9:00 PM",
        rating: "4.7",
        image: "https://via.placeholder.com/150"
    },

    {
        name: "Dr. Jannatul Ferdous",
        department: "Nephrology",
        hospital: "Evercare Hospital",
        location: "Dhaka",
        fee: "৳1200",
        time: "5:00 PM - 8:00 PM",
        rating: "4.9",
        image: "https://via.placeholder.com/150"
    },

    {
        name: "Dr. Rakibul Hasan",
        department: "Oncology",
        hospital: "National Cancer Research Institute",
        location: "Dhaka",
        fee: "৳1500",
        time: "4:00 PM - 7:00 PM",
        rating: "4.8",
        image: "https://via.placeholder.com/150"
    },

    {
        name: "Dr. Tania Ahmed",
        department: "Dentistry",
        hospital: "City Dental College Hospital",
        location: "Dhaka",
        fee: "৳700",
        time: "5:00 PM - 9:00 PM",
        rating: "4.7",
        image: "https://via.placeholder.com/150"
    },

    {
        name: "Dr. Imran Hossain",
        department: "Hematology",
        hospital: "BSMMU",
        location: "Dhaka",
        fee: "৳1000",
        time: "4:00 PM - 7:00 PM",
        rating: "4.8",
        image: "https://via.placeholder.com/150"
    },

    {
        name: "Dr. Morshed Alam",
        department: "Endocrinology",
        hospital: "Labaid Specialized Hospital",
        location: "Dhaka",
        fee: "৳1000",
        time: "6:00 PM - 9:00 PM",
        rating: "4.8",
        image: "https://via.placeholder.com/150"
    },

    {
        name: "Dr. Ruma Akter",
        department: "Rheumatology",
        hospital: "Ibn Sina Hospital",
        location: "Dhaka",
        fee: "৳900",
        time: "5:00 PM - 8:00 PM",
        rating: "4.7",
        image: "https://via.placeholder.com/150"
    },

    {
        name: "Dr. Faisal Ahmed",
        department: "Emergency Medicine",
        hospital: "Dhaka Medical College Hospital",
        location: "Dhaka",
        fee: "৳500",
        time: "24 Hours",
        rating: "4.6",
        image: "https://via.placeholder.com/150"
    }

];


// ==========================================
// DOCTOR CARD GENERATOR
// ==========================================

const doctorGrid = document.querySelector(".doctor-grid");

function displayDoctors(list) {

    doctorGrid.innerHTML = "";

    if (list.length === 0) {

        doctorGrid.innerHTML = `
            <div class="no-doctor">
                <i class="fa-solid fa-user-doctor"></i>
                <h3>No Doctor Found</h3>
                <p>Try searching another doctor or department.</p>
            </div>
        `;

        return;
    }


    list.forEach((doctor, index) => {

        const card = document.createElement("div");

        card.className = "doctor-card";

        card.dataset.name = doctor.name;
        card.dataset.department = doctor.department;


        card.innerHTML = `

            <img
                src="${doctor.image}"
                alt="${doctor.name}"
            >

            <h3>${doctor.name}</h3>

            <h4>${doctor.department} Specialist</h4>

            <p>
                <i class="fa-solid fa-hospital"></i>
                ${doctor.hospital}
            </p>

            <p>
                <i class="fa-solid fa-location-dot"></i>
                ${doctor.location}
            </p>

            <p>
                <i class="fa-solid fa-money-bill"></i>
                Consultation: ${doctor.fee}
            </p>

            <p>
                <i class="fa-solid fa-clock"></i>
                ${doctor.time}
            </p>

            <p class="rating">
                ★★★★★
                <span>${doctor.rating}</span>
            </p>

            <a href="#" onclick="bookAppointment('${doctor.name}')">
                Book Appointment
            </a>

        `;

        doctorGrid.appendChild(card);

    });

}


// ==========================================
// URL DEPARTMENT FILTER
// ==========================================

const urlParams = new URLSearchParams(window.location.search);

const selectedDepartment = urlParams.get("department");


if (selectedDepartment) {

    const filteredDoctors = doctors.filter(
        doctor =>
        doctor.department.toLowerCase() ===
        selectedDepartment.toLowerCase()
    );

    displayDoctors(filteredDoctors);

    document.querySelector(".hero h1").textContent =
        selectedDepartment + " Doctors";

} else {

    displayDoctors(doctors);

}


// ==========================================
// SEARCH DOCTOR
// ==========================================

function searchDoctor() {

    const input =
        document
        .getElementById("doctorSearch")
        .value
        .toLowerCase()
        .trim();


    const filtered = doctors.filter(doctor =>

        doctor.name.toLowerCase().includes(input) ||

        doctor.department.toLowerCase().includes(input) ||

        doctor.hospital.toLowerCase().includes(input) ||

        doctor.location.toLowerCase().includes(input)

    );


    displayDoctors(filtered);

}


// ==========================================
// LIVE SEARCH
// ==========================================

document
.getElementById("doctorSearch")
.addEventListener("input", searchDoctor);


// ==========================================
// BOOK APPOINTMENT
// ==========================================

function bookAppointment(doctorName) {

    alert(
        "Appointment booking for " +
        doctorName +
        " will be available soon."
    );

}