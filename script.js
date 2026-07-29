// ===========================
// JOIN BUTTON SCROLL
// ===========================

const joinBtn = document.getElementById("joinBtn");
const applySection = document.getElementById("apply");

joinBtn.addEventListener("click", function(){

    applySection.scrollIntoView({
        behavior:"smooth"
    });

});



// ===========================
// DISCORD WEBHOOK
// ===========================

const webhookURL = "https://discord.com/api/webhooks/1527966817845514301/i93cK7wypVi_T2OYGDwIpqmFCxEtMBUxQmxsZYX3XyNaU41txm3cSXH4oUDWnykPfd21";



// ===========================
// FORM SUBMIT
// ===========================

const form = document.getElementById("applyForm");


form.addEventListener("submit", async function(e){

    e.preventDefault();


    const inputs = form.querySelectorAll("input, select, textarea");


    const data = {

        nickname: inputs[0].value,
        age: inputs[1].value,
        discord: inputs[2].value,
        level: inputs[3].value,
        ak: inputs[4].value,
        activity: inputs[5].value,
        voice: inputs[6].value,
        previousGang: inputs[7].value,
        reason: inputs[8].value

    };



    const message = {

        embeds:[{

            title:"🔥 NEW VITTORIO MAFIA APPLICATION",

            color:15844367,

            fields:[

                {
                    name:"Nickname",
                    value:data.nickname,
                    inline:true
                },

                {
                    name:"Age",
                    value:data.age,
                    inline:true
                },

                {
                    name:"Discord",
                    value:data.discord,
                    inline:true
                },

                {
                    name:"Game Level",
                    value:data.level,
                    inline:true
                },

                {
                    name:"AK Level",
                    value:data.ak,
                    inline:true
                },

                {
                    name:"Daily Activity",
                    value:data.activity+" Hours",
                    inline:true
                },

                {
                    name:"Voice Chat",
                    value:data.voice,
                    inline:true
                },

                {
                    name:"Previous Gang",
                    value:data.previousGang || "None"
                },

                {
                    name:"Reason",
                    value:data.reason
                }

            ],

            footer:{
                text:"VITTORIO MAFIA Recruitment"
            }

        }]

    };



    await fetch(webhookURL, {

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(message)

    });



    form.innerHTML = `

        <div class="success">

            <h2>
            APPLICATION SENT
            </h2>

            <p>
            Welcome to VITTORIO MAFIA.
            </p>

            <p>
            Our leaders will review your application.
            </p>

        </div>

    `;


});
