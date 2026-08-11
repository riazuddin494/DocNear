function searchSymptom(){

  let input = document.getElementById("symptomInput").value.toLowerCase();
  let result = document.getElementById("resultText");

  let suggestion = "";
  let tips = [];

  if(input.includes("fever")){
    suggestion = "👉 General Physician / Medicine Department";

    tips = [
      "Drink plenty of fluids 💧",
      "Take proper rest 😴",
      "Monitor body temperature 🌡️"
    ];
  }

  else if(input.includes("headache")){
    suggestion = "👉 Neurology Department";

    tips = [
      "Avoid screen time 📱",
      "Stay hydrated 💧",
      "Take short rest in dark room 🌙"
    ];
  }

  else if(input.includes("chest")){
    suggestion = "👉 Cardiology (Urgent Check)";

    tips = [
      "Avoid physical strain 🏃",
      "Seek medical help quickly 🏥",
      "Do not ignore pain ⚠️"
    ];
  }

  else if(input.includes("skin")){
    suggestion = "👉 Dermatology";

    tips = [
      "Keep skin clean 🧼",
      "Avoid harsh chemicals 🚫",
      "Stay hydrated 💧"
    ];
  }

  else{
    suggestion = "👉 Please describe your symptom more clearly";

    tips = [
      "Try simple words 📝",
      "Mention main symptom only 🎯",
      "Avoid mixed symptoms ❗"
    ];
  }

  result.innerHTML = `
    <b>${suggestion}</b>
    <br><br>
    <b>💡 Health Tips:</b>
    <ul>
      <li>${tips[0]}</li>
      <li>${tips[1]}</li>
      <li>${tips[2]}</li>
    </ul>
  `;
}

/* REFRESH BUTTON */
function clearSearch(){
  document.getElementById("symptomInput").value = "";
  document.getElementById("resultText").innerText = "Your result will appear here" ;
}