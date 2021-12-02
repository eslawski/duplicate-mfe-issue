import faker from "faker";

const mount = (mountPoint, props) => {
    const buttonElement = document.createElement("button");
    buttonElement.innerHTML = `mfe-button: ${props.buttonText}`;

    buttonElement.onclick = () => alert(`copied! operation_id: ${faker.random.uuid()}`);

    mountPoint.appendChild(buttonElement);
};

const sandbox = document.getElementById("_mfe-button__sandbox");
if (sandbox) {
    const mountPoint = document.getElementById("sandbox-mount-point");

    mount(mountPoint, {buttonText: "nice button"});
}

export {
    mount
}
