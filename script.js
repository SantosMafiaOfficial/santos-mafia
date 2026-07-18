const joinBtn = document.getElementById("joinBtn");
const application = document.getElementById("application");

joinBtn.addEventListener("click", () => {

application.classList.remove("hidden");

application.innerHTML = `
<h2 style="color:#d4af37;text-align:center;margin-bottom:25px;">
SANTOS MAFIA APPLICATION
</h2>

<form id="applyForm">

<input type="text" placeholder="One State Nickname" required>

<input type="number" placeholder="Age" required>

<input type="text" placeholder="Discord Username" required>

<input type="number" placeholder="Level" required>

<input type="number" placeholder="AK Level" required>

<select required>
<option value="">Do you have a microphone?</option>
<option>Yes</option>
<option>No</option>
</select>

<select id="gang">
<option>No Previous Gang</option>
<option>Yes</option>
</select>

<input
id="gangName"
style="display:none;"
placeholder="Previous Gang Name">

<textarea
placeholder="Why do you want to join SANTOS MAFIA?"
required></textarea>

<button class="submit">
SUBMIT APPLICATION
</button>

</form>
`;

const gang = document.getElementById("gang");
const gangName = document.getElementById("gangName");

gang.onchange = () => {

if(gang.value==="Yes"){
gangName.style.display="block";
}else{
gangName.style.display="none";
}

};

document.getElementById("applyForm").onsubmit=(e)=>{

e.preventDefault();

alert("Application Submitted Successfully!");

};

application.scrollIntoView({
behavior:"smooth"
});

});
