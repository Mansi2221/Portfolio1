document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skill");
    skills.forEach(skill => {
        skill.addEventListener("mouseover", () => {
            skill.style.transform = "scale(1.2)";
        });
        skill.addEventListener("mouseout", () => {
            skill.style.transform = "scale(1)";
        });
    });
});
