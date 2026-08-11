/* ==========================================
   DOCNEAR AI SYMPTOM CHECKER
========================================== */


/* ==========================================
   SYMPTOM DATABASE
========================================== */

const symptomDatabase = {

    fever: {
        department: "General Medicine",
        doctor: "General Physician",
        guidance: "Fever can have many causes. Stay hydrated and consider consulting a physician if the fever persists or becomes severe."
    },

    temperature: {
        department: "General Medicine",
        doctor: "General Physician",
        guidance: "Monitor your temperature and stay hydrated. Persistent or high fever should be evaluated by a doctor."
    },

    headache: {
        department: "Neurology",
        doctor: "Neurologist",
        guidance: "Headaches may have different causes. Rest, hydration and medical evaluation may help if the headache is persistent."
    },

    migraine: {
        department: "Neurology",
        doctor: "Neurologist",
        guidance: "Recurring or severe migraine symptoms should be evaluated by a qualified doctor."
    },

    dizziness: {
        department: "Neurology",
        doctor: "Neurologist",
        guidance: "Dizziness can have several causes. If it is severe, recurring or associated with other symptoms, consult a doctor."
    },

    seizure: {
        department: "Neurology",
        doctor: "Neurologist",
        guidance: "Seizures require professional medical evaluation. Seek urgent medical care for a new or prolonged seizure."
    },

    cough: {
        department: "Pulmonology",
        doctor: "Pulmonologist",
        guidance: "Persistent cough should be evaluated, especially if accompanied by breathing difficulty, chest pain or blood."
    },

    breathing: {
        department: "Pulmonology",
        doctor: "Pulmonologist",
        guidance: "Breathing difficulty can sometimes be serious. Seek urgent medical care if breathing becomes severely difficult."
    },

    asthma: {
        department: "Pulmonology",
        doctor: "Pulmonologist",
        guidance: "Asthma symptoms should be managed with professional medical guidance."
    },

    chest: {
        department: "Cardiology",
        doctor: "Cardiologist",
        guidance: "Chest discomfort can have different causes. Sudden or severe chest pain requires urgent medical evaluation."
    },

    heart: {
        department: "Cardiology",
        doctor: "Cardiologist",
        guidance: "Heart-related symptoms should be evaluated by a qualified healthcare professional."
    },

    "chest pain": {
        department: "Cardiology",
        doctor: "Cardiologist",
        guidance: "Severe or sudden chest pain may be an emergency. Seek emergency medical care immediately."
    },

    palpitation: {
        department: "Cardiology",
        doctor: "Cardiologist",
        guidance: "Repeated or unexplained heart palpitations should be evaluated by a doctor."
    },

    stomach: {
        department: "Gastroenterology",
        doctor: "Gastroenterologist",
        guidance: "Persistent stomach discomfort may require evaluation by a gastroenterology specialist."
    },

    "stomach pain": {
        department: "Gastroenterology",
        doctor: "Gastroenterologist",
        guidance: "Persistent or severe abdominal pain should be evaluated by a healthcare professional."
    },

    abdominal: {
        department: "Gastroenterology",
        doctor: "Gastroenterologist",
        guidance: "Abdominal symptoms can have many causes and may require medical evaluation."
    },

    vomiting: {
        department: "Gastroenterology",
        doctor: "Gastroenterologist",
        guidance: "Stay hydrated. Persistent vomiting or signs of dehydration require medical attention."
    },

    nausea: {
        department: "Gastroenterology",
        doctor: "Gastroenterologist",
        guidance: "Persistent nausea may require medical evaluation."
    },

    diarrhea: {
        department: "Gastroenterology",
        doctor: "Gastroenterologist",
        guidance: "Stay hydrated. Seek medical care if diarrhea is severe, persistent or associated with dehydration."
    },

    constipation: {
        department: "Gastroenterology",
        doctor: "Gastroenterologist",
        guidance: "Persistent constipation should be discussed with a healthcare professional."
    },

    acidity: {
        department: "Gastroenterology",
        doctor: "Gastroenterologist",
        guidance: "Frequent acidity or reflux symptoms should be evaluated if they persist."
    },

    "skin allergy": {
        department: "Dermatology",
        doctor: "Dermatologist",
        guidance: "Skin allergies can have different triggers. A dermatologist can help identify and manage the cause."
    },

    allergy: {
        department: "Dermatology",
        doctor: "Dermatologist",
        guidance: "Persistent skin allergies should be evaluated by a dermatologist."
    },

    acne: {
        department: "Dermatology",
        doctor: "Dermatologist",
        guidance: "Persistent or severe acne may benefit from professional dermatological care."
    },

    rash: {
        department: "Dermatology",
        doctor: "Dermatologist",
        guidance: "Unexplained or persistent rashes should be evaluated by a dermatologist."
    },

    itching: {
        department: "Dermatology",
        doctor: "Dermatologist",
        guidance: "Persistent itching may have several causes and should be evaluated if it continues."
    },

    hair: {
        department: "Dermatology",
        doctor: "Dermatologist",
        guidance: "Persistent hair loss or scalp problems can be evaluated by a dermatologist."
    },

    eye: {
        department: "Ophthalmology",
        doctor: "Ophthalmologist",
        guidance: "Eye problems should be evaluated by an eye specialist, especially if vision changes suddenly."
    },

    "eye pain": {
        department: "Ophthalmology",
        doctor: "Ophthalmologist",
        guidance: "Persistent eye pain requires professional eye examination."
    },

    "blurred vision": {
        department: "Ophthalmology",
        doctor: "Ophthalmologist",
        guidance: "Sudden or severe vision changes require urgent medical evaluation."
    },

    tooth: {
        department: "Dentistry",
        doctor: "Dentist",
        guidance: "Persistent tooth pain should be evaluated by a dentist."
    },

    "tooth pain": {
        department: "Dentistry",
        doctor: "Dentist",
        guidance: "A dentist can evaluate tooth pain and identify the underlying cause."
    },

    gum: {
        department: "Dentistry",
        doctor: "Dentist",
        guidance: "Bleeding or painful gums should be evaluated by a dental professional."
    },

    ear: {
        department: "ENT",
        doctor: "ENT Specialist",
        guidance: "Persistent ear pain or hearing problems should be evaluated by an ENT specialist."
    },

    throat: {
        department: "ENT",
        doctor: "ENT Specialist",
        guidance: "Persistent throat problems may require evaluation by an ENT specialist."
    },

    "sore throat": {
        department: "ENT",
        doctor: "ENT Specialist",
        guidance: "Persistent or severe sore throat should be evaluated by a healthcare professional."
    },

    hearing: {
        department: "ENT",
        doctor: "ENT Specialist",
        guidance: "Hearing changes should be evaluated by an ENT specialist."
    },

    joint: {
        department: "Orthopedics",
        doctor: "Orthopedic Specialist",
        guidance: "Persistent joint pain or swelling may require orthopedic evaluation."
    },

    "joint pain": {
        department: "Orthopedics",
        doctor: "Orthopedic Specialist",
        guidance: "Persistent joint pain should be evaluated by an orthopedic specialist."
    },

    bone: {
        department: "Orthopedics",
        doctor: "Orthopedic Specialist",
        guidance: "Bone injuries or persistent bone pain require professional evaluation."
    },

    back: {
        department: "Orthopedics",
        doctor: "Orthopedic Specialist",
        guidance: "Persistent back pain should be evaluated by a healthcare professional."
    },

    neck: {
        department: "Orthopedics",
        doctor: "Orthopedic Specialist",
        guidance: "Persistent neck pain may require orthopedic evaluation."
    },

    weakness: {
        department: "General Medicine",
        doctor: "General Physician",
        guidance: "Persistent weakness can have many causes. A general physician can help evaluate the symptoms."
    },

    fatigue: {
        department: "General Medicine",
        doctor: "General Physician",
        guidance: "Persistent fatigue should be evaluated to identify possible underlying causes."
    },

    diabetes: {
        department: "Endocrinology",
        doctor: "Endocrinologist",
        guidance: "Diabetes management should be guided by a qualified healthcare professional."
    },

    "high blood pressure": {
        department: "Cardiology",
        doctor: "Cardiologist",
        guidance: "Blood pressure should be monitored regularly and managed under professional medical guidance."
    },

    hypertension: {
        department: "Cardiology",
        doctor: "Cardiologist",
        guidance: "Hypertension requires regular monitoring and professional medical management."
    },

    kidney: {
        department: "Nephrology",
        doctor: "Nephrologist",
        guidance: "Persistent kidney-related symptoms should be evaluated by a healthcare professional."
    },

    urine: {
        department: "Urology",
        doctor: "Urologist",
        guidance: "Persistent urinary problems should be evaluated by a urologist."
    },

    pregnancy: {
        department: "Gynecology",
        doctor: "Gynecologist",
        guidance: "Pregnancy-related concerns should be evaluated by a qualified gynecologist or obstetrician."
    },

    period: {
        department: "Gynecology",
        doctor: "Gynecologist",
        guidance: "Persistent menstrual problems should be discussed with a qualified gynecologist."
    },

    anxiety: {
        department: "Psychiatry",
        doctor: "Psychiatrist",
        guidance: "Persistent or severe anxiety can benefit from professional mental health support."
    },

    depression: {
        department: "Psychiatry",
        doctor: "Psychiatrist",
        guidance: "If you are experiencing persistent depressive symptoms, consider speaking with a qualified mental health professional."
    },

    child: {
        department: "Pediatrics",
        doctor: "Pediatrician",
        guidance: "Children's health concerns should be evaluated by a qualified pediatrician."
    },

    infant: {
        department: "Pediatrics",
        doctor: "Pediatrician",
        guidance: "Infants should receive medical evaluation from a qualified pediatrician when health concerns arise."
    }

};


/* ==========================================
   SELECT QUICK SYMPTOM
========================================== */

function selectSymptom(symptom){

    const input =
        document.getElementById("symptomInput");

    input.value = symptom;

    input.focus();

}


/* ==========================================
   CHECK SYMPTOMS
========================================== */

function checkSymptoms(){

    const input =
        document
        .getElementById("symptomInput")
        .value
        .toLowerCase()
        .trim();


    if(input === ""){

        alert("Please enter your symptoms first.");

        return;

    }


    let result = null;


    /*
       First check multi-word symptoms
       such as chest pain, stomach pain etc.
    */

    for(const key in symptomDatabase){

        if(input.includes(key)){

            result = symptomDatabase[key];

            break;

        }

    }


    /*
       If no exact match is found
    */

    if(!result){

        result = {

            department:"General Medicine",

            doctor:"General Physician",

            guidance:
            "We could not identify a specific symptom pattern. A General Physician can evaluate your symptoms and guide you to the appropriate specialist."

        };

    }


    showResult(result);

}


/* ==========================================
   SHOW RESULT
========================================== */

function showResult(result){

    const placeholder =
        document.getElementById("resultPlaceholder");

    const content =
        document.getElementById("resultContent");


    placeholder.style.display = "none";

    content.style.display = "block";


    document.getElementById("departmentResult")
        .textContent = result.department;


    document.getElementById("doctorResult")
        .textContent = result.doctor;


    document.getElementById("guidanceResult")
        .textContent = result.guidance;


    /*
       Store recommended department
       for Find Doctors button
    */

    const doctorButton =
        document.querySelector(".find-doctor-btn");


    doctorButton.href =
        "doctor.html?department=" +
        encodeURIComponent(result.department);

}


/* ==========================================
   CLEAR
========================================== */

function clearSymptoms(){

    document.getElementById("symptomInput").value = "";


    document.getElementById("resultPlaceholder")
        .style.display = "flex";


    document.getElementById("resultContent")
        .style.display = "none";

}


/* ==========================================
   ENTER KEY SUPPORT
========================================== */

document
.getElementById("symptomInput")
.addEventListener("keydown", function(event){

    if(event.key === "Enter" && !event.shiftKey){

        event.preventDefault();

        checkSymptoms();

    }

});