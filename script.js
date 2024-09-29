document.getElementById('shift-log-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Extract the shift log form data
    const tasks = document.getElementById('tasks').value;
    const issues = document.getElementById('issues').value;
    const safety = document.getElementById('safety').value;

    console.log("Task Summary: ", tasks);
    console.log("Issues: ", issues);
    console.log("Safety Concerns: ", safety);

    alert("Shift Log Submitted Successfully!");
    this.reset();
});

document.getElementById('smp-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Extract the SMP form data
    const hazard = document.getElementById('hazard').value;
    const control = document.getElementById('control').value;
    const monitoring = document.getElementById('monitoring').value;
    const responsibility = document.getElementById('responsibility').value;

    console.log("Hazard: ", hazard);
    console.log("Control Measures: ", control);
    console.log("Monitoring: ", monitoring);
    console.log("Responsibility Assigned to: ", responsibility);

    alert("SMP Submitted Successfully!");
    this.reset();
});
