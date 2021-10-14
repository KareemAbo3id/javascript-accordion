// selectors
const buttons = document.querySelectorAll(".accordion__button");
const collapseAll = document.querySelector(".accordion__collapse-all");

// accordion collapse all button
collapseAll.addEventListener("click", () => {
    buttons.forEach(item => {
        const buttonIcon = item.children[1];
        const accordionBody = item.nextElementSibling;
        const collapse = 0;

        item.classList.remove("is-open");
        buttonIcon.classList.remove("open");
        accordionBody.style.maxHeight = collapse;
    });
});

// accordion button
buttons.forEach(item => {
    const buttonIcon = item.children[1];
    const accordionBody = item.nextElementSibling;
    const accordionContent = accordionBody.children[0];
    const collapse = 0;
    const expand = accordionContent.clientHeight + "px";

    item.addEventListener("click", event => {
        item.classList.toggle("is-open");
        buttonIcon.classList.toggle("open");

        if (!item.classList.contains("is-open")) {
            accordionBody.style.maxHeight = collapse;
        } else {
            accordionBody.style.maxHeight = expand;
        }
    });
});
