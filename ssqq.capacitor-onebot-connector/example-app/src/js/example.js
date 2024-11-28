import { Onebot } from 'capacitor-onebot-connctor';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    Onebot.echo({ value: inputValue })
}
