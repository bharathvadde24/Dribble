document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Your form submission logic here
});

document.addEventListener("DOMContentLoaded", function() {
    const avatarInput = document.getElementById("avatar");
    const avatarPreview = document.getElementById("avatarPreview");

    avatarInput.addEventListener("change", function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function() {
                avatarPreview.src = reader.result;
                avatarPreview.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });

});
