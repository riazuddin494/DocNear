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








/* =========================================================
   DOCNEAR AI MEDICAL ASSISTANT
========================================================= */


/* ==========================================
   MEDICAL KNOWLEDGE
========================================== */

const medicalKnowledge = {

    diabetes: {
        keywords: ["diabetes", "diabetic", "sugar", "blood sugar"],
        answer: `
            <strong>🩺 Diabetes</strong>

            <p>
            Diabetes is a condition where blood glucose
            levels become too high because the body does not
            produce enough insulin or cannot use insulin
            effectively.
            </p>

            <p>
            Common symptoms may include increased thirst,
            frequent urination, tiredness and unexplained
            weight changes.
            </p>

            <div class="ai-advice">
                💡 Regular blood sugar monitoring and a healthy
                lifestyle are important. Consult a doctor for
                proper diagnosis and treatment.
            </div>
        `
    },


    hypertension: {
        keywords: [
            "high blood pressure",
            "hypertension",
            "blood pressure",
            "bp"
        ],
        answer: `
            <strong>❤️ High Blood Pressure</strong>

            <p>
            High blood pressure occurs when the force of blood
            against the artery walls remains higher than normal.
            </p>

            <p>
            It often does not cause noticeable symptoms, which
            is why regular blood pressure checking is important.
            </p>

            <div class="ai-advice">
                🥗 Maintaining a healthy diet, regular physical
                activity and following your doctor's advice can
                help manage blood pressure.
            </div>

            <p>
                👨‍⚕️ Suggested:
                <b>Cardiologist / Medicine Specialist</b>
            </p>
        `
    },


    fever: {
        keywords: ["fever", "temperature", "hot body"],
        answer: `
            <strong>🌡️ Fever</strong>

            <p>
            Fever is usually a temporary increase in body
            temperature and can occur with infections or
            other conditions.
            </p>

            <p>
            Rest and adequate fluid intake are generally
            helpful.
            </p>

            <div class="ai-advice">
                ⚠️ If fever is very high, persistent, or associated
                with serious symptoms, seek medical attention.
            </div>

            <p>
                👨‍⚕️ Suggested:
                <b>Medicine Specialist</b>
            </p>
        `
    },


    headache: {
        keywords: [
            "headache",
            "head pain",
            "migraine"
        ],
        answer: `
            <strong>🧠 Headache</strong>

            <p>
            Headaches can have many causes, including stress,
            dehydration, lack of sleep, migraine and other
            medical conditions.
            </p>

            <div class="ai-advice">
                💧 Staying hydrated, getting enough sleep and
                reducing excessive stress may help with some
                common headaches.
            </div>

            <p>
                👨‍⚕️ For frequent or severe headaches:
                <b>Neurologist</b>
            </p>
        `
    },


    cough: {
        keywords: [
            "cough",
            "dry cough",
            "coughing"
        ],
        answer: `
            <strong>🫁 Cough</strong>

            <p>
            Cough can occur due to infections, allergies,
            asthma, irritation or other respiratory conditions.
            </p>

            <p>
            If a cough continues for a long time or is associated
            with breathing difficulty, medical evaluation is
            recommended.
            </p>

            <p>
                👨‍⚕️ Suggested:
                <b>Chest Specialist / Pulmonologist</b>
            </p>
        `
    },


    stomach: {
        keywords: [
            "stomach",
            "gastric",
            "acidity",
            "gas",
            "abdominal pain"
        ],
        answer: `
            <strong>🩺 Stomach Problems</strong>

            <p>
            Stomach discomfort can have different causes such
            as acidity, indigestion, infection or other
            gastrointestinal problems.
            </p>

            <div class="ai-advice">
                🥗 Avoiding foods that trigger your symptoms,
                drinking enough water and maintaining regular
                meals may help some people.
            </div>

            <p>
                👨‍⚕️ Suggested:
                <b>Gastroenterologist</b>
            </p>
        `
    },


    skin: {
        keywords: [
            "skin",
            "acne",
            "rash",
            "itching",
            "pimple",
            "allergy"
        ],
        answer: `
            <strong>🧴 Skin Problems</strong>

            <p>
            Skin problems can have many causes including
            allergies, infections, acne and irritation.
            </p>

            <p>
            Avoid using unknown creams or medicines without
            professional advice.
            </p>

            <p>
                👨‍⚕️ Suggested:
                <b>Dermatologist</b>
            </p>
        `
    },


    eye: {
        keywords: [
            "eye",
            "eyes",
            "eye pain",
            "blurred vision",
            "vision"
        ],
        answer: `
            <strong>👁️ Eye Problems</strong>

            <p>
            Eye discomfort or vision changes can have several
            possible causes.
            </p>

            <div class="ai-advice">
                ⚠️ Sudden vision loss, severe eye pain or a
                serious eye injury requires urgent medical care.
            </div>

            <p>
                👨‍⚕️ Suggested:
                <b>Ophthalmologist</b>
            </p>
        `
    },


    heart: {
        keywords: [
            "heart",
            "chest pain",
            "heart pain",
            "palpitation",
            "heartbeat"
        ],
        answer: `
            <strong>❤️ Heart & Chest Symptoms</strong>

            <p>
            Chest discomfort and unusual heartbeat can have
            different causes, including heart-related problems.
            </p>

            <div class="ai-emergency">
                🚨 If someone has severe chest pain, difficulty
                breathing, fainting or pain spreading to the arm
                or jaw, seek emergency medical care immediately.
            </div>

            <p>
                👨‍⚕️ Suggested:
                <b>Cardiologist</b>
            </p>
        `
    },


    cbc: {
        keywords: [
            "cbc",
            "cbc test",
            "complete blood count"
        ],
        answer: `
            <strong>🧪 CBC Test</strong>

            <p>
            CBC stands for Complete Blood Count. It measures
            different components of blood, including red blood
            cells, white blood cells, hemoglobin and platelets.
            </p>

            <p>
            Doctors may use a CBC as part of evaluating various
            health conditions.
            </p>

            <div class="ai-advice">
                💡 Your CBC result should be interpreted together
                with your symptoms and other clinical information.
            </div>
        `
    },


    doctor: {
        keywords: [
            "which doctor",
            "what doctor",
            "specialist",
            "doctor for",
            "need a doctor"
        ],
        answer: `
            <strong>👨‍⚕️ Finding the Right Doctor</strong>

            <p>
            DocNear can help you find doctors based on your
            healthcare needs.
            </p>

            <p>
            For specific symptoms, you can also use our
            <b>AI Symptom</b> page for more detailed guidance.
            </p>

            <button
                class="ai-action-btn"
                onclick="goToDoctors()">

                Find a Doctor →
            </button>
        `
    },


    hospital: {
        keywords: [
            "hospital",
            "find hospital",
            "nearby hospital",
            "hospital near"
        ],
        answer: `
            <strong>🏥 Find a Hospital</strong>

            <p>
            You can explore hospitals available through the
            DocNear hospital directory.
            </p>

            <button
                class="ai-action-btn"
                onclick="goToHospitals()">

                Find Hospitals →
            </button>
        `
    },


    department: {
        keywords: [
            "department",
            "medical department",
            "speciality",
            "specialty"
        ],
        answer: `
            <strong>🏥 Medical Departments</strong>

            <p>
            DocNear includes different medical departments such
            as Cardiology, Neurology, Dermatology, Orthopedics,
            Gastroenterology, ENT and more.
            </p>

            <button
                class="ai-action-btn"
                onclick="goToDepartments()">

                Explore Departments →
            </button>
        `
    },


    medicine: {
        keywords: [
            "medicine",
            "medication",
            "drug",
            "tablet",
            "capsule"
        ],
        answer: `
            <strong>💊 Medicine Information</strong>

            <p>
            Medicines should be used according to appropriate
            medical guidance. The correct medicine and dose can
            depend on age, condition, other medicines and medical
            history.
            </p>

            <div class="ai-advice">
                ⚠️ Do not start or change prescription medicines
                based only on an online answer.
            </div>
        `
    },


    healthy: {
        keywords: [
            "healthy",
            "healthy lifestyle",
            "health tips",
            "stay healthy"
        ],
        answer: `
            <strong>🥗 Healthy Lifestyle</strong>

            <p>
            Some general healthy habits include:
            </p>

            <ul>
                <li>🥗 Eat a balanced diet</li>
                <li>💧 Drink enough water</li>
                <li>🏃 Stay physically active</li>
                <li>😴 Get adequate sleep</li>
                <li>🚭 Avoid tobacco</li>
            </ul>

            <p>
            Individual health needs can vary, so consult a
            healthcare professional when necessary.
            </p>
        `
    }

};


/* =========================================================
   FIND ANSWER
========================================================= */

function findMedicalAnswer(question) {

    const text =
        question.toLowerCase().trim();


    for (
        const category in medicalKnowledge
    ) {

        const keywords =
            medicalKnowledge[category].keywords;


        for (
            const keyword of keywords
        ) {

            if (text.includes(keyword)) {

                return medicalKnowledge[
                    category
                ].answer;

            }

        }

    }


    return null;

}


/* =========================================================
   SEND AI MESSAGE
========================================================= */

function sendAIMessage() {

    const input =
        document.getElementById("aiInput");

    const chat =
        document.getElementById("aiChatArea");


    if (!input || !chat) {
        return;
    }


    const question =
        input.value.trim();


    if (question === "") {
        return;
    }


    /* USER MESSAGE */

    addUserMessage(
        question
    );


    input.value = "";


    /* Scroll */

    chat.scrollTop =
        chat.scrollHeight;


    /* Typing */

    const typing =
        addTypingMessage();


    setTimeout(
        function() {

            typing.remove();


            const answer =
                findMedicalAnswer(
                    question
                );


            if (answer) {

                addAIMessage(
                    answer
                );

            } else {

                addAIMessage(`

                    <strong>
                        🤖 DocNear AI
                    </strong>

                    <p>
                        I'm still learning about that topic.
                        I can currently help with general
                        information about diseases, symptoms,
                        medicines, medical tests, doctors,
                        hospitals and health tips.
                    </p>

                    <div class="ai-advice">

                        💡 Try asking:

                        <br><br>

                        • What is diabetes?<br>
                        • What is CBC test?<br>
                        • Which doctor treats skin problems?<br>
                        • What is high blood pressure?

                    </div>

                `);

            }

        },
        900
    );

}


/* =========================================================
   ADD USER MESSAGE
========================================================= */

function addUserMessage(
    message
) {

    const chat =
        document.getElementById(
            "aiChatArea"
        );


    const div =
        document.createElement(
            "div"
        );


    div.className =
        "user-message";


    div.innerHTML = `
        <p>${escapeHTML(message)}</p>
    `;


    chat.appendChild(div);


    chat.scrollTop =
        chat.scrollHeight;

}


/* =========================================================
   ADD AI MESSAGE
========================================================= */

function addAIMessage(
    message
) {

    const chat =
        document.getElementById(
            "aiChatArea"
        );


    const div =
        document.createElement(
            "div"
        );


    div.className =
        "ai-message";


    div.innerHTML = `

        <div class="message-avatar">

            <i class="fa-solid fa-robot"></i>

        </div>

        <div class="message-content">

            <strong>
                DocNear AI
            </strong>

            ${message}

        </div>

    `;


    chat.appendChild(div);


    chat.scrollTop =
        chat.scrollHeight;

}


/* =========================================================
   TYPING ANIMATION
========================================================= */

function addTypingMessage() {

    const chat =
        document.getElementById(
            "aiChatArea"
        );


    const div =
        document.createElement(
            "div"
        );


    div.className =
        "ai-message";


    div.innerHTML = `

        <div class="message-avatar">

            <i class="fa-solid fa-robot"></i>

        </div>

        <div class="message-content">

            <strong>
                DocNear AI
            </strong>

            <p class="typing-dots">

                <span>.</span>
                <span>.</span>
                <span>.</span>

            </p>

        </div>

    `;


    chat.appendChild(div);


    chat.scrollTop =
        chat.scrollHeight;


    return div;

}


/* =========================================================
   SUGGESTION BUTTON
========================================================= */

function askSuggestion(
    question
) {

    const input =
        document.getElementById(
            "aiInput"
        );


    if (!input) {
        return;
    }


    input.value =
        question;


    sendAIMessage();

}


/* =========================================================
   ENTER KEY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const input =
            document.getElementById(
                "aiInput"
            );


        if (!input) {
            return;
        }


        input.addEventListener(
            "keydown",
            function(event) {

                if (
                    event.key === "Enter"
                ) {

                    event.preventDefault();

                    sendAIMessage();

                }

            }
        );

    }
);


/* =========================================================
   CLEAR / NEW CHAT
========================================================= */

function clearAIChat() {

    const chat =
        document.getElementById(
            "aiChatArea"
        );


    if (!chat) {
        return;
    }


    chat.innerHTML = `

        <div class="ai-message">

            <div class="message-avatar">

                <i class="fa-solid fa-robot"></i>

            </div>

            <div class="message-content">

                <strong>
                    DocNear AI
                </strong>

                <p>
                    Hello! 👋 I'm DocNear AI.
                    <br>
                    Ask me anything about health,
                    medicine, diseases, medical tests,
                    doctors or hospitals.
                </p>

            </div>

        </div>


        <div class="ai-suggestions">

            <button
                onclick="askSuggestion('What is diabetes?')">

                🩺 What is diabetes?

            </button>

            <button
                onclick="askSuggestion('What is CBC test?')">

                🧪 What is CBC test?

            </button>

            <button
                onclick="askSuggestion('Which doctor treats skin problems?')">

                👨‍⚕️ Which doctor for skin?

            </button>

            <button
                onclick="askSuggestion('What are healthy foods for high blood pressure?')">

                🥗 Healthy food for BP

            </button>

        </div>

    `;

}


/* =========================================================
   NAVIGATION
========================================================= */

function goToDoctors() {

    window.location.href =
        "doctor.html";

}


function goToHospitals() {

    window.location.href =
        "hospitals.html";

}


function goToDepartments() {

    window.location.href =
        "departments.html";

}


/* =========================================================
   SECURITY
   Prevent HTML injection in user messages
========================================================= */

function escapeHTML(
    text
) {

    const div =
        document.createElement(
            "div"
        );

    div.textContent =
        text;

    return div.innerHTML;

}







