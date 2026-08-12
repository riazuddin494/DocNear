/* =========================================================
   DOCNEAR - MAIN JAVASCRIPT
   HOME PAGE
   ========================================================= */


/* =========================================================
   1. AI SYMPTOM DATABASE
   ========================================================= */

const symptomData = {

    /* General */

    fever: {
        doctor: "Medicine Specialist",
        department: "Medicine",
        advice: "Consult a medicine specialist for proper evaluation."
    },

    cold: {
        doctor: "General Physician",
        department: "Medicine",
        advice: "Take adequate rest and stay hydrated."
    },

    cough: {
        doctor: "Chest Specialist",
        department: "Pulmonology",
        advice: "Persistent cough should be evaluated by a doctor."
    },

    headache: {
        doctor: "Neurologist",
        department: "Neurology",
        advice: "If headache is severe or persistent, consult a doctor."
    },

    migraine: {
        doctor: "Neurologist",
        department: "Neurology",
        advice: "A neurologist can help evaluate recurring migraine."
    },

    weakness: {
        doctor: "General Physician",
        department: "Medicine",
        advice: "General weakness may have several causes."
    },

    fatigue: {
        doctor: "Medicine Specialist",
        department: "Medicine",
        advice: "Persistent fatigue should be medically evaluated."
    },

    dizziness: {
        doctor: "Neurologist",
        department: "Neurology",
        advice: "Frequent dizziness needs proper medical assessment."
    },

    /* Chest & Heart */

    chest: {
        doctor: "Cardiologist",
        department: "Cardiology",
        advice: "Chest pain can sometimes be serious. Seek urgent care if severe."
    },

    heart: {
        doctor: "Cardiologist",
        department: "Cardiology",
        advice: "Heart-related symptoms should be evaluated by a cardiologist."
    },

    palpitation: {
        doctor: "Cardiologist",
        department: "Cardiology",
        advice: "Frequent heart palpitations should be checked."
    },

    "high blood pressure": {
        doctor: "Cardiologist",
        department: "Cardiology",
        advice: "Regular blood pressure monitoring is important."
    },

    bp: {
        doctor: "Cardiologist",
        department: "Cardiology",
        advice: "Blood pressure problems should be monitored regularly."
    },

    /* Stomach */

    stomach: {
        doctor: "Gastroenterologist",
        department: "Gastroenterology",
        advice: "A gastroenterologist can evaluate stomach-related problems."
    },

    abdominal: {
        doctor: "Gastroenterologist",
        department: "Gastroenterology",
        advice: "Persistent abdominal pain needs medical evaluation."
    },

    diarrhea: {
        doctor: "Gastroenterologist",
        department: "Gastroenterology",
        advice: "Stay hydrated and consult a doctor if symptoms persist."
    },

    vomiting: {
        doctor: "Medicine Specialist",
        department: "Medicine",
        advice: "Persistent vomiting may require medical attention."
    },

    nausea: {
        doctor: "Medicine Specialist",
        department: "Medicine",
        advice: "Persistent nausea should be evaluated."
    },

    acidity: {
        doctor: "Gastroenterologist",
        department: "Gastroenterology",
        advice: "Avoid trigger foods and consult a specialist if persistent."
    },

    gas: {
        doctor: "Gastroenterologist",
        department: "Gastroenterology",
        advice: "Persistent gastric problems should be evaluated."
    },

    constipation: {
        doctor: "Gastroenterologist",
        department: "Gastroenterology",
        advice: "Increase fluids and fiber; consult a doctor if persistent."
    },

    /* Eye */

    eye: {
        doctor: "Ophthalmologist",
        department: "Ophthalmology",
        advice: "An eye specialist can properly evaluate your symptoms."
    },

    "eye pain": {
        doctor: "Ophthalmologist",
        department: "Ophthalmology",
        advice: "Eye pain should be evaluated by an eye specialist."
    },

    blurry: {
        doctor: "Ophthalmologist",
        department: "Ophthalmology",
        advice: "Blurred vision requires proper eye examination."
    },

    "blurred vision": {
        doctor: "Ophthalmologist",
        department: "Ophthalmology",
        advice: "Please consult an eye specialist."
    },

    /* ENT */

    ear: {
        doctor: "ENT Specialist",
        department: "ENT",
        advice: "An ENT specialist can evaluate ear-related problems."
    },

    throat: {
        doctor: "ENT Specialist",
        department: "ENT",
        advice: "Persistent throat problems should be checked."
    },

    "sore throat": {
        doctor: "ENT Specialist",
        department: "ENT",
        advice: "An ENT specialist can evaluate persistent sore throat."
    },

    nose: {
        doctor: "ENT Specialist",
        department: "ENT",
        advice: "Nasal problems can be evaluated by an ENT specialist."
    },

    sinus: {
        doctor: "ENT Specialist",
        department: "ENT",
        advice: "A specialist can evaluate recurring sinus problems."
    },

    /* Dental */

    tooth: {
        doctor: "Dentist",
        department: "Dental",
        advice: "Consult a dentist for proper dental evaluation."
    },

    teeth: {
        doctor: "Dentist",
        department: "Dental",
        advice: "A dentist can evaluate your dental symptoms."
    },

    gum: {
        doctor: "Dentist",
        department: "Dental",
        advice: "Gum problems should be evaluated by a dentist."
    },

    /* Skin */

    skin: {
        doctor: "Dermatologist",
        department: "Dermatology",
        advice: "A dermatologist can evaluate skin-related problems."
    },

    acne: {
        doctor: "Dermatologist",
        department: "Dermatology",
        advice: "A dermatologist can recommend appropriate acne treatment."
    },

    allergy: {
        doctor: "Dermatologist",
        department: "Dermatology",
        advice: "Persistent allergic skin reactions should be evaluated."
    },

    rash: {
        doctor: "Dermatologist",
        department: "Dermatology",
        advice: "A dermatologist can evaluate unexplained rashes."
    },

    itching: {
        doctor: "Dermatologist",
        department: "Dermatology",
        advice: "Persistent itching should be medically evaluated."
    },

    /* Bone & Joint */

    bone: {
        doctor: "Orthopedic Surgeon",
        department: "Orthopedics",
        advice: "An orthopedic specialist can evaluate bone-related problems."
    },

    joint: {
        doctor: "Orthopedic Surgeon",
        department: "Orthopedics",
        advice: "Joint pain may require orthopedic evaluation."
    },

    back: {
        doctor: "Orthopedic Specialist",
        department: "Orthopedics",
        advice: "Persistent back pain should be evaluated."
    },

    "back pain": {
        doctor: "Orthopedic Specialist",
        department: "Orthopedics",
        advice: "An orthopedic specialist can evaluate persistent back pain."
    },

    knee: {
        doctor: "Orthopedic Surgeon",
        department: "Orthopedics",
        advice: "Knee problems can be evaluated by an orthopedic specialist."
    },

    neck: {
        doctor: "Orthopedic Specialist",
        department: "Orthopedics",
        advice: "Persistent neck pain should be evaluated."
    },

    muscle: {
        doctor: "Orthopedic Specialist",
        department: "Orthopedics",
        advice: "Persistent muscle pain may require medical evaluation."
    },

    /* Neurology */

    seizure: {
        doctor: "Neurologist",
        department: "Neurology",
        advice: "Seizure-like symptoms require professional medical assessment."
    },

    numbness: {
        doctor: "Neurologist",
        department: "Neurology",
        advice: "Persistent numbness should be evaluated by a neurologist."
    },

    "memory problem": {
        doctor: "Neurologist",
        department: "Neurology",
        advice: "Memory-related problems should be medically evaluated."
    },

    /* Child */

    child: {
        doctor: "Pediatrician",
        department: "Pediatrics",
        advice: "Children should be evaluated by a pediatric specialist."
    },

    baby: {
        doctor: "Pediatrician",
        department: "Pediatrics",
        advice: "For babies, consult a pediatrician."
    },

    pediatric: {
        doctor: "Pediatrician",
        department: "Pediatrics",
        advice: "A pediatrician can evaluate children's health problems."
    },

    /* Women */

    pregnancy: {
        doctor: "Gynecologist",
        department: "Gynecology",
        advice: "Pregnancy-related concerns should be discussed with a gynecologist."
    },

    period: {
        doctor: "Gynecologist",
        department: "Gynecology",
        advice: "A gynecologist can evaluate menstrual problems."
    },

    menstrual: {
        doctor: "Gynecologist",
        department: "Gynecology",
        advice: "Menstrual problems should be evaluated by a gynecologist."
    }

};


/* =========================================================
   2. AI SYMPTOM SEARCH
   ========================================================= */

function searchSymptom() {

    const input =
        document.getElementById("symptomInput");

    const result =
        document.getElementById("resultText");


    if (!input || !result) {
        return;
    }


    const symptom =
        input.value
            .toLowerCase()
            .trim();


    /* Empty search */

    if (symptom === "") {

        result.innerHTML = `
            <b>Please enter a symptom.</b>
            <br><br>
            Example:
            Fever, Chest Pain, Headache, Skin, Stomach
        `;

        return;
    }


    /* Exact / partial match */

    let found = null;
    let matchedKey = "";


    for (const key in symptomData) {

        if (
            symptom.includes(key) ||
            key.includes(symptom)
        ) {

            found = symptomData[key];

            matchedKey = key;

            break;
        }

    }


    /* Result found */

    if (found) {

        result.innerHTML = `

            <div class="ai-result">

                <div class="ai-result-title">

                    <i class="fa-solid fa-robot"></i>

                    AI Suggestion

                </div>


                <p>

                    <strong>
                        Symptom:
                    </strong>

                    ${matchedKey}

                </p>


                <p>

                    <strong>
                        Suggested Doctor:
                    </strong>

                    <span class="doctor-suggestion">
                        ${found.doctor}
                    </span>

                </p>


                <p>

                    <strong>
                        Department:
                    </strong>

                    ${found.department}

                </p>


                <div class="ai-advice">

                    <i class="fa-solid fa-lightbulb"></i>

                    ${found.advice}

                </div>

            </div>

        `;

    }

    /* No result */

    else {

        result.innerHTML = `

            <div class="ai-no-result">

                <i class="fa-solid fa-circle-question"></i>

                <h4>
                    No specific suggestion found
                </h4>

                <p>
                    Try symptoms like:
                    Fever, Cough, Headache,
                    Stomach, Chest, Skin or Eye.
                </p>

            </div>

        `;

    }

}


/* =========================================================
   3. CLEAR SYMPTOM SEARCH
   ========================================================= */

function clearSearch() {

    const input =
        document.getElementById("symptomInput");

    const result =
        document.getElementById("resultText");


    if (input) {

        input.value = "";

    }


    if (result) {

        result.innerHTML = `

            <b>
                Search your symptom here
            </b>

            <br>

            <span>
                Example: Fever, Chest, Skin...
            </span>

            <br>

            <b>
                Follow the suggestion from the result.
            </b>

        `;

    }

}


/* =========================================================
   4. ENTER KEY FOR SYMPTOM SEARCH
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const input =
            document.getElementById(
                "symptomInput"
            );


        if (!input) {
            return;
        }


        input.addEventListener(
            "keydown",
            function(event) {

                if (event.key === "Enter") {

                    searchSymptom();

                }

            }
        );

    }
);


/* =========================================================
   5. LIVE CLOCK - BANGLADESH TIME
   ========================================================= */

function updateLiveClock() {

    const timeElement =
        document.getElementById("liveTime");

    const dateElement =
        document.getElementById("liveDate");


    if (!timeElement) {
        return;
    }


    const now =
        new Date();


    /* =========================
       DIGITAL TIME
    ========================= */

    const timeString =
        now.toLocaleTimeString(
            "en-US",
            {
                timeZone: "Asia/Dhaka",

                hour: "numeric",

                minute: "2-digit",

                hour12: true
            }
        );


    timeElement.textContent =
        timeString;


    /* =========================
       DATE
    ========================= */

    if (dateElement) {

        dateElement.textContent =
            "Today, +0hrs";

    }


    /* =========================
       ANALOG CLOCK
    ========================= */

    const hourHand =
        document.getElementById(
            "hourHand"
        );

    const minuteHand =
        document.getElementById(
            "minuteHand"
        );

    const secondHand =
        document.getElementById(
            "secondHand"
        );


    if (
        !hourHand ||
        !minuteHand ||
        !secondHand
    ) {

        return;

    }


    /* Bangladesh current time */

    const dhakaTime =
        new Date(
            now.toLocaleString(
                "en-US",
                {
                    timeZone: "Asia/Dhaka"
                }
            )
        );


    const seconds =
        dhakaTime.getSeconds();

    const minutes =
        dhakaTime.getMinutes();

    const hours =
        dhakaTime.getHours();


    /* =========================
       HAND ANGLES
    ========================= */

    const secondDegree =
        seconds * 6;


    const minuteDegree =
        minutes * 6 +
        seconds * 0.1;


    const hourDegree =
        (hours % 12) * 30 +
        minutes * 0.5;


    /* =========================
       APPLY ROTATION
    ========================= */

    secondHand.style.transform =
        `rotate(${secondDegree}deg)`;


    minuteHand.style.transform =
        `rotate(${minuteDegree}deg)`;


    hourHand.style.transform =
        `rotate(${hourDegree}deg)`;

}


/* =========================================================
   6. START LIVE CLOCK
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateLiveClock();

        setInterval(
            updateLiveClock,
            1000
        );

    }
);


/* =========================================================
   7. FIND DOCTOR BUTTON
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const findDoctorButtons =
            document.querySelectorAll(
                ".primary"
            );


        findDoctorButtons.forEach(
            function(button) {

                button.addEventListener(
                    "click",
                    function() {

                        window.location.href =
                            "doctor.html";

                    }
                );

            }
        );

    }
);


/* =========================================================
   8. LEARN MORE BUTTON
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const learnMoreButtons =
            document.querySelectorAll(
                ".secondary"
            );


        learnMoreButtons.forEach(
            function(button) {

                button.addEventListener(
                    "click",
                    function() {

                        const aboutSection =
                            document.querySelector(
                                ".about-container"
                            );


                        if (aboutSection) {

                            aboutSection.scrollIntoView({
                                behavior: "smooth"
                            });

                        }

                    }
                );

            }
        );

    }
);


/* =========================================================
   9. NAVIGATION LINKS
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const navLinks =
            document.querySelectorAll(
                "nav a"
            );


        navLinks.forEach(
            function(link) {

                const text =
                    link.textContent
                        .trim()
                        .toLowerCase();


                /* Home */

                if (text === "home") {

                    link.href =
                        "index.html";

                }


                /* Doctors */

                else if (text === "doctors") {

                    link.href =
                        "doctor.html";

                }


                /* Hospitals */

                else if (text === "hospitals") {

                    link.href =
                        "hospitals.html";

                }


                /* Departments */

                else if (text === "departments") {

                    link.href =
                        "departments.html";

                }


                /* AI Symptom */

                else if (
                    text === "ai symptom"
                ) {

                    link.href =
                        "ai-symptom.html";

                }

            }
        );

    }
);


/* =========================================================
   10. SMOOTH SCROLL
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        document.documentElement.style
            .scrollBehavior = "smooth";

    }
);