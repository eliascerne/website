import React from 'react'

function Terminal() {
    return (
        <section className="terminal" id="terminal">
            <div className="terminal_container">
                <div className="terminal_content">
                    <div className="terminal_top">
                        <div className="terminal_buttons">
                            <div className="terminal_button_red" id="terminal_button_red"><div className="close_button_1"></div><div className="close_button_2"></div></div>
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
