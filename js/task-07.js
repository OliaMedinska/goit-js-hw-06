const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

const onInputElInput = () => { spanEl.style.fontSize = inputEl.value + "px"; };

inputEl.addEventListener("input", onInputElInput);
