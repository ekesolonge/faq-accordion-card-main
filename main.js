const question = document.querySelectorAll(".question");

question.forEach((question) => {
  question.addEventListener("click", (e) => {
    e.target.parentNode.parentNode.children[1].classList.toggle("show");

    if (e.target.parentNode.children[1].children[0].style.transform == "")
      return (e.target.parentNode.children[1].children[0].style.transform =
        "rotate(180deg)");

    if (
      e.target.parentNode.children[1].children[0].style.transform ===
      "rotate(180deg)"
    )
      return (e.target.parentNode.children[1].children[0].style.transform = "");
  });
});
