const question = document.querySelectorAll(".question");

question.forEach((question) => {
  question.addEventListener("click", (e) => {
    e.target.parentNode.parentNode.children[1].classList.toggle("show");

    if (e.target.parentNode.children[1].children[0].style.transform == "") {
      e.target.parentNode.children[1].children[0].style.transform =
        "rotate(180deg)";
      e.target.parentNode.children[0].style.fontWeight = 700;
      return;
    }

    if (
      e.target.parentNode.children[1].children[0].style.transform ===
      "rotate(180deg)"
    )
      e.target.parentNode.children[1].children[0].style.transform = "";
    e.target.parentNode.children[0].style.fontWeight = "";
    return;
  });
});
