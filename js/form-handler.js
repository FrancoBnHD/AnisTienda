document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const modal = document.getElementById("formSuccessModal");

  if (!form || !modal) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    }).then((response) => {
      if (response.ok) {
        form.reset();
        modal.style.display = "flex";
      } else {
        alert("Error al enviar el formulario.");
      }
    });
  });

  // Cerrar modal desde cualquier botón con clase `.close-modal`
  window.closeModal = function () {
    modal.style.display = "none";
  };
});
