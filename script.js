const joinBtn = document.getElementById("joinBtn");
const application = document.getElementById("application");

const webhookURL = "https://discord.com/api/webhooks/1527966817845514301/i93cK7wypVi_T2OYGDwIpqmFCxEtMBUxQmxsZYX3XyNaU41txm3cSXH4oUDWnykPfd21";

joinBtn.addEventListener("click", () => {

application.classList.remove("hidden");

application.innerHTML = `
<h2 style="color:#d4af37;text-align:center;">
SANTOS MAFIA APPLICATION
</h2>

<form id="applyForm">

<input id="name" placeholder="One State Nickname" required>

<input id="age" type="number" placeholder="Age" required>

<input id="discord" placeholder="Discord Username" required>

<input id="level" type="number" placeholder="Level" required>

<input id="ak" type="number" placeholder="AK Level" required>

<select id="mic">
<option>Microphone?</option>
<option>Yes</option>
<option>No</option>
</select>

<select id="oldGang">
<option>No Previous Gang</option>
<option>Yes</option>
</select>

<input id="gangName" placeholder="Previous Gang Name">

<textarea id="reason" placeholder="Why do you want to join?"></textarea>

<button class="submit">
SUBMIT APPLICATION
</button>

</form>
`;

document.getElementById("applyForm").onsubmit = async (e)=>{
e.preventDefault();

let message = {
content:
`🔥 **NEW SANTOS MAFIA APPLICATION**

👤 Name: ${name.value}
🎂 Age: ${age.value}
🎮 Discord: ${discord.value}
⭐ Level: ${level.value}
🔫 AK Level: ${ak.value}
🎤 Microphone: ${mic.value}
🏴 Previous Gang: ${oldGang.value}
🏴 Gang Name: ${gangName.value}

📝 Reason:
${reason.value}
`
};

await fetch(webhookURL,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(message)
});

alert("Application Sent Successfully!");

};

application.scrollIntoView({
behavior:"smooth"
});

});
