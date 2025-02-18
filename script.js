document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("participant-form");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const participantData = {
                name: document.getElementById("name").value,
                age: document.getElementById("age").value,
                country: document.getElementById("country").value,
                education: document.getElementById("education").value,
                work: document.getElementById("work").value,
                exposure: document.getElementById("exposure").value,
                startTime: new Date().toISOString(),
                taskTimes: []
            };

            localStorage.setItem("participantData", JSON.stringify(participantData));
            window.location.href = "task.html"; 
        });
    }
});
