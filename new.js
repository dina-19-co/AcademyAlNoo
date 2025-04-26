window.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader");
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 1200);
  
    fetch("new.json")
      .then((res) => res.json())
      .then((data) => {
        const container = document.querySelector(".platforms");
        data.platforms.forEach((platform) => {
          const platformCard = document.createElement("div");
          platformCard.className = "platform-card";
  
          const platformInfo = document.createElement("div");
          platformInfo.className = "platform-info";
  
          platformInfo.innerHTML = `
            <h2>${platform.name}</h2>
            <p>${platform.description}</p>
          `;
  
          const courseList = document.createElement("div");
          courseList.className = "courses-list";
  
          platform.courses.forEach((course) => {
            const courseCard = document.createElement("div");
            courseCard.className = "course-card";
  
            courseCard.innerHTML = `
              <img src="${course.image}" alt="${course.title}" />
              <h3>${course.title}</h3>
              <p>${course.info}</p>
              <a href="${course.link}" target="_blank">ابدأ الكورس</a>
            `;
  
            courseList.appendChild(courseCard);
          });
  
          platformCard.appendChild(platformInfo);
          platformCard.appendChild(courseList);
          container.appendChild(platformCard);
        });
      });
  });
  

  