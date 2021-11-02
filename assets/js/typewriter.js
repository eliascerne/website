/*!
 * CLI
 * @version : 1.0.0
 * @author : Elias Cerne (https://eliascerne.com)
 * @license: MIT
 */

function typeWriter(selector, type, interval) {

    var el = document.querySelectorAll(selector), // Getting elements in the DOM
        i = 0,
        len = el.length, // Length of element on the page
        list = [], // List of elements on the page in the DOM
        a,
        all,
        text,
        start,
        end,
        nextText,
        sectionId = selector.replace(/^#/, ''),
        targetSection = document.getElementById(sectionId),
        sections = document.getElementsByTagName("section")[0],
        targetSiblings = [].slice.call(sections.parentNode.children).filter(function (v) { return v !== targetSection }),
        cmd = document.querySelector(".command"),
        clear;

    for (; i < len; i++) {

        list.push(el[i]); // Pushing the element in the list array
    }

    for (a in list) {

        all = list[a]; // List of all element
        text = all.innerHTML; // InnerHTML of the elements 
        start = 0; // Start index of the text in the elements 
        end = 0; // End index of the text in the elements


        //Setting the default interval to 100 when interval is not set by the user
        if (typeof interval === "undefined") {

            interval = 100;

        }

        if (arguments[1] === "true") {

            setTimeout(function () {
                targetSection.classList.add("current_open");
                targetSection.classList.add("open");
            }, 200);

            for (var i = 0; i < targetSiblings.length; i++) {
                targetSiblings[i].classList.remove("current_open");
                targetSection.classList.add("open");
            }

            clear = setInterval(function () { // Animation start
                var newText = text.substr(start, end);

                all.innerHTML = newText;

                end = end + 1; //loops through the text in the element

                if (newText === text) {

                    clearInterval(clear); // Animation end
                    cmd.classList.add("current_open");
                    input.focus();

                }

            }, interval);

        }

        return all;

    }

}

export { typeWriter }