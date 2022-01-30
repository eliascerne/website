import React, { useEffect } from 'react'

function Terminal({ terminalShow, setTerminalShow }) {
    function hideTerminal() {
        setTerminalShow(false);
    }

    useEffect(() => {
        /* TERMINAL CLI */
        const terminalInput = document.getElementById('terminal_input');
        const teriminalText = document.getElementById('terminal_command_text');
        const terminalMain = document.getElementById('terminal_main');
        const terminalWidthHTML = document.getElementById('terminal_width');
        const terminalCaret = document.getElementById('terminal_caret');

        // Displays the inputted text onto the terminal (with an span tag (because a textarea cannot be shaped with a extra corner (to display the className terminal_command)))
        // and moves the caret towards its normal position when writing (caret changes in the function below)
        terminalInput.addEventListener('input', function () {
            teriminalText.innerHTML = terminalInput.value;
            //console.log(terminalInput.value);
            terminalCaret.style.transform = "translate(0rem, .2rem)";
            terminalMain.scrollTop = terminalMain.scrollHeight;
        }, false);

        // Change the text of the element with the current size
        var terminalWidth = function terminalWidth() {
            // Calculates from px to rem (1px = 0.06rem)
            var terminalWidth = Math.round(terminalMain.offsetWidth * 0.06);

            terminalWidthHTML.innerHTML = terminalWidth;

            //console.log(terminalWidth);
        };
        window.addEventListener('resize', terminalWidth);
        terminalWidth();

        // move the caret when user hits space bar
        terminalInput.addEventListener('keyup', event => {
            if (event.code === 'Space') {
                // teriminalText.innerHTML = terminalInput.value + '&nbsp;';
                terminalCaret.style.transform = "translate(0rem, .2rem)";
                sessionStorage.setItem('terminalCaretMove', 1);
            }
        });

        // User Focus the input
        terminalInput.addEventListener('focus', (event) => {
            terminalCaret.classList.add('terminal_caret_focus');
        });
        // User does not Focus input any more (clicked elsewhere)
        terminalInput.addEventListener('blur', (event) => {
            terminalCaret.classList.remove('terminal_caret_focus');
        });

        // Focuses (lets the user input) if the main terminal section is pressed
        terminalMain.addEventListener('click', function () {
            terminalInput.focus();
        })

        // Disables arrow keys because there is no need for them now (the caret has to move with the arrow keys which is not implemented yet)
        terminalInput.addEventListener("keydown", function (e) {
            if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
                e.preventDefault();
            }
        }, false);

        // // Terminal
        // const terminalPop = document.getElementById('terminal-pop');
        // const terminalHTML = document.getElementById('terminal');
        // const terminalButtonRed = document.getElementById('terminal_button_red');

        // var counter = 0;
        // terminalPop.addEventListener('click', function (e) {
        //     counter += 1;
        //     //console.log(counter);
        //     if (counter === 5) {
        //         terminalHTML.classList.remove('hide');
        //     };
        // });

        // terminalButtonRed.addEventListener('click', function (e) {
        //     terminalHTML.classList.add('hide');
        //     counter = 0;
        // });
    })

    return (
        <section className={"terminal " + (terminalShow ? undefined : "hide")} id="terminal">
            <div className="terminal_container">
                <div className="terminal_content">
                    <div className="terminal_top">
                        <div className="terminal_buttons">
                            <div className="terminal_button_red" id="terminal_button_red" onClick={() => hideTerminal()}><div className="close_button_1"></div><div className="close_button_2"></div></div>
                            <div className="terminal_button_yellow"></div>
                            <div className="terminal_button_green"></div>
                        </div>
                        <span className="terminal_title">eliascerne.com - fish - <span className="terminal_width" id="terminal_width"></span>x16</span>
                        <div className="terminal_line"></div>
                    </div>
                    <div className="terminal_main" id="terminal_main">
                        <div className="terminal_command_container">
                            <span className="terminal_command">eliascerne.com ~%</span>
                            <span className="terminal_command_text" id="terminal_command_text"></span>
                            <div className="terminal_caret" id="terminal_caret"></div>
                        </div>
                    </div>
                </div>
            </div>
            <textarea className="terminal_input" id="terminal_input" type="text"></textarea>
        </section>
    )
}

export default Terminal
