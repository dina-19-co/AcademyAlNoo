
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("orderForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();

    if (!name || !phone || !email || !address) {
      alert("من فضلك املى كل البيانات المطلوبة 💡");
      return;
    }
    alert("❌ من فضلك املى كل البيانات المطلوبة قبل إرسال الطلب!");

    form.reset();
  });
});


