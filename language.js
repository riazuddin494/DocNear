// ==========================================
// DOCNEAR LANGUAGE SYSTEM
// English + Bangla
// ==========================================

const translations = {

    en: {

        // Navbar
        home: "Home",
        doctors: "Doctors",
        hospitals: "Hospitals",
        departments: "Departments",
        aiSymptom: "AI Symptom",

        // Common
        findDoctor: "Find Doctor",
        learnMore: "Learn More",
        search: "Search",
        clear: "Clear",
        back: "Back",

        // Home
        smartHealthcare: "Smart Healthcare Platform",
        smarterHealthcare: "Smarter Healthcare",
        startsWith: "Starts With",
        docNear: "DocNear",
        findNearbyDoctors:
            "Find nearby doctors and get instant AI symptom suggestions.",

        // Symptom
        aiAssistant: "AI Healthcare Assistant",
        understandSymptoms: "Understand Your Symptoms",
        rightDoctor: "Find the Right Doctor",
        tellSymptoms: "Tell Us Your Symptoms",
        yourSymptoms: "Your Symptoms",
        checkSymptoms: "Check Symptoms",
        quickSymptoms: "Quick Symptoms",
        aiSuggestion: "AI Suggestion",

        // Results
        recommendedDepartment:
            "Recommended Department",

        recommendedDoctor:
            "Recommended Doctor",

        healthGuidance:
            "Health Guidance",

        noDoctor:
            "No Doctor Found",

        // Doctor
        bookAppointment:
            "Book Appointment",

        consultation:
            "Consultation",

        available:
            "Available",

        // Footer
        findDoctorStayHealthy:
            "Find Doctor, Stay Healthy.",

        allRights:
            "All Rights Reserved."
    },


    bn: {

        // Navbar
        home: "হোম",
        doctors: "ডাক্তার",
        hospitals: "হাসপাতাল",
        departments: "বিভাগসমূহ",
        aiSymptom: "AI উপসর্গ",

        // Common
        findDoctor: "ডাক্তার খুঁজুন",
        learnMore: "আরও জানুন",
        search: "খুঁজুন",
        clear: "মুছে ফেলুন",
        back: "ফিরে যান",

        // Home
        smartHealthcare: "স্মার্ট স্বাস্থ্যসেবা প্ল্যাটফর্ম",
        smarterHealthcare: "স্মার্ট স্বাস্থ্যসেবা",
        startsWith: "শুরু হোক",
        docNear: "DocNear",
        findNearbyDoctors:
            "কাছাকাছি ডাক্তার খুঁজুন এবং AI-এর মাধ্যমে তাৎক্ষণিক উপসর্গের পরামর্শ পান।",

        // Symptom
        aiAssistant: "AI স্বাস্থ্য সহকারী",
        understandSymptoms: "আপনার উপসর্গ বুঝুন",
        rightDoctor: "সঠিক ডাক্তার খুঁজে নিন",
        tellSymptoms: "আপনার উপসর্গ জানান",
        yourSymptoms: "আপনার উপসর্গ",
        checkSymptoms: "উপসর্গ পরীক্ষা করুন",
        quickSymptoms: "দ্রুত উপসর্গ নির্বাচন করুন",
        aiSuggestion: "AI পরামর্শ",

        // Results
        recommendedDepartment:
            "প্রস্তাবিত বিভাগ",

        recommendedDoctor:
            "প্রস্তাবিত ডাক্তার",

        healthGuidance:
            "স্বাস্থ্য পরামর্শ",

        noDoctor:
            "কোনো ডাক্তার পাওয়া যায়নি",

        // Doctor
        bookAppointment:
            "অ্যাপয়েন্টমেন্ট নিন",

        consultation:
            "কনসালটেশন",

        available:
            "উপলব্ধ",

        // Footer
        findDoctorStayHealthy:
            "ডাক্তার খুঁজুন, সুস্থ থাকুন।",

        allRights:
            "সর্বস্বত্ব সংরক্ষিত।"
    }

};


// ==========================================
// DEFAULT LANGUAGE
// ==========================================

let currentLanguage =
    localStorage.getItem("docnearLanguage") || "en";


// ==========================================
// GET TRANSLATION
// ==========================================

function t(key) {

    return translations[currentLanguage][key]
        || translations.en[key]
        || key;

}


// ==========================================
// CHANGE LANGUAGE
// ==========================================

function changeLanguage(language) {

    if (!translations[language]) {
        return;
    }

    currentLanguage = language;

    localStorage.setItem(
        "docnearLanguage",
        language
    );

    applyLanguage();

}


// ==========================================
// APPLY LANGUAGE
// ==========================================

function applyLanguage() {

    document
        .querySelectorAll("[data-lang]")
        .forEach(element => {

            const key =
                element.getAttribute("data-lang");

            element.textContent = t(key);

        });


    // Placeholder translation
    document
        .querySelectorAll("[data-placeholder]")
        .forEach(element => {

            const key =
                element.getAttribute(
                    "data-placeholder"
                );

            element.placeholder = t(key);

        });


    // Update language buttons

    const enButton =
        document.getElementById("englishBtn");

    const bnButton =
        document.getElementById("banglaBtn");


    if (enButton && bnButton) {

        enButton.classList.remove("active");
        bnButton.classList.remove("active");


        if (currentLanguage === "en") {

            enButton.classList.add("active");

        }
        else {

            bnButton.classList.add("active");

        }

    }

}


// ==========================================
// RUN WHEN PAGE LOADS
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    applyLanguage
);