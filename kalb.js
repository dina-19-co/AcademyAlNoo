// تغيير صورة الملف الشخصي
function changeImage() {
    const newImageUrl = prompt("أدخل رابط الصورة الجديدة:");
    if (newImageUrl) {
        document.getElementById("profile-pic").src = newImageUrl;
    }
}

// إضافة مهارة جديدة
function addSkill() {
    const skillsList = document.getElementById("skills-list");
    const newSkill = document.createElement("li");
    newSkill.contentEditable = true;
    newSkill.textContent = "مهارة جديدة";
    skillsList.insertBefore(newSkill, skillsList.lastElementChild);
}

// إضافة لغة جديدة
function addLanguage() {
    const languagesContainer = document.getElementById("languages-container");
    const newLang = document.createElement("div");
    newLang.className = "lang-item";
    newLang.innerHTML = `
        <span contenteditable="true">لغة جديدة</span>
        <select>
            <option value="5">ممتاز</option>
            <option value="4">جيد جداً</option>
            <option value="3">جيد</option>
        </select>
    `;
    languagesContainer.insertBefore(newLang, languagesContainer.lastElementChild);
}

// إضافة خبرة عمل
function addExperience() {
    const experienceContainer = document.getElementById("experience-container");
    const newExp = document.createElement("div");
    newExp.className = "timeline-item";
    newExp.innerHTML = `
        <div contenteditable="true" class="timeline-date">2023 - الحاضر</div>
        <div class="timeline-content">
            <h4 contenteditable="true">المسمى الوظيفي</h4>
            <h5 contenteditable="true">اسم الشركة</h5>
            <p contenteditable="true">وصف المسؤوليات والإنجازات</p>
        </div>
    `;
    experienceContainer.insertBefore(newExp, experienceContainer.lastElementChild);
}

// إضافة مؤهل تعليمي
function addEducation() {
    const educationContainer = document.getElementById("education-container");
    const newEdu = document.createElement("div");
    newEdu.className = "timeline-item";
    newEdu.innerHTML = `
        <div contenteditable="true" class="timeline-date">2020 - 2024</div>
        <div class="timeline-content">
            <h4 contenteditable="true">المؤهل العلمي</h4>
            <h5 contenteditable="true">اسم الجامعة</h5>
            <p contenteditable="true">التخصص</p>
        </div>
    `;
    educationContainer.insertBefore(newEdu, educationContainer.lastElementChild);
}

// إعادة تعيين السيرة الذاتية
function resetCV() {
    if (confirm("هل أنت متأكد من أنك تريد إعادة تعيين السيرة الذاتية؟ سيتم فقدان جميع التغييرات.")) {
        location.reload();
    }
}

// تحميل كملف PDF
document.getElementById("download-pdf").addEventListener("click", function() {
    const element = document.querySelector(".cv-container");
    const opt = {
        margin: 10,
        filename: 'سيرتي_الذاتية.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
});