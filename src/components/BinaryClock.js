import React, { useEffect } from 'react'

function BinaryClock() {

    useEffect(() => {
        function DecToBin(value) {
            var result = '';
            while (value != 0) {
                result = (((value % 2) > 0) ? '1' : '0') + result;
                value = value >> 1;
            }
            return result;
        }

        binaryClock();
        function binaryClock() {
            var current = new Date();

            var units = [['h', DecToBin(current.getHours())],
            ['m', DecToBin(current.getMinutes())],
            ['s', DecToBin(current.getSeconds())]];

            // document.getElementById('hr').innerHTML = current.getHours();
            // document.getElementById('mr').innerHTML = current.getMinutes();
            // document.getElementById('sr').innerHTML = current.getSeconds();

            for (var i = 0; i < 6; i++) {
                for (var u = 0; u < units.length; u++) {
                    var id = units[u][0] + Math.pow(2, i);
                    var obj = document.getElementById(id);

                    if (obj != null) {
                        obj.className = 'inactive';
                        var index = (units[u][1].length - 1) - i;
                        if (index > -1) {
                            if (units[u][1].charAt(index) == '1') {
                                obj.className = 'active';
                            }
                        }
                    }
                }
            }
            setTimeout(binaryClock, 1000);
        }
    }, [])
    return (
        <div className="onProgressContainer" id="onProgressContainer">
            <table className="onProgress" id="binary-clock">
                <tr><td className="res" id="hr"></td><td id="h32">&nbsp;</td><td id="h16">&nbsp;</td><td id="h8">&nbsp;</td><td id="h4">&nbsp;</td><td id="h2">&nbsp;</td><td id="h1">&nbsp;</td></tr>
                <tr><td className="res" id="mr"></td><td id="m32">&nbsp;</td><td id="m16">&nbsp;</td><td id="m8">&nbsp;</td><td id="m4">&nbsp;</td><td id="m2">&nbsp;</td><td id="m1">&nbsp;</td></tr>
                <tr><td className="res" id="sr"></td><td id="s32">&nbsp;</td><td id="s16">&nbsp;</td><td id="s8">&nbsp;</td><td id="s4">&nbsp;</td><td id="s2">&nbsp;</td><td id="s1">&nbsp;</td></tr>
            </table>
        </div>
    )
}

export default BinaryClock
