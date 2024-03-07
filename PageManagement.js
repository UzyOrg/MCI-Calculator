function openNewPage(id) {
  let usaRappiCardPage = document.getElementById(`${id}`);
  let mainPage = document.getElementById("mainPage");
  usaRappiCardPage.style.display = "flex";
  usaRappiCardPage.classList.remove("slide-in-bottom-reverse");
  usaRappiCardPage.classList.add("slide-in-bottom");
  setTimeout(function () {
    mainPage.style.display = "none";
  }, 200);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function backMainPage(id) {
  if (id === "page3") {
    let page2 = document.getElementById("page2");
    page2.classList.remove("slide-in-bottom");
    page2.style.display = "flex";
  }
  
 
  let currentPage = document.getElementById(`${id}`);
  let mainPage = document.getElementById("mainPage");
  currentPage.classList.add("slide-in-bottom-reverse");
  mainPage.style.display = "-webkit-flex";
  mainPage.style.display = "flex";
  mainPage.classList.remove("slide-in-bottom");
  setTimeout(function () {
    mainPage.style.removeProperty("padding");
    mainPage.style.removeProperty("position");
    currentPage.style.display = "none";
  }, 200);
}

function closeBefore(id) {
  let closePage = document.getElementById(`${id}`);
  setTimeout(function () {
    closePage.style.display = "none";
  }, 300);
}
