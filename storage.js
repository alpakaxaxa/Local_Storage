window.onload = function () {
    updateStorage();
};
function addToDo() {
    const s = document.getElementById("source");
    if (s.value === "") {
        return
    }
    localStorage.setItem(localStorage.length+1, s.value);
    updateStorage();
}

function removeToDo() {
    localStorage.removeItem(localStorage.length);
    updateStorage();
}

function clearToDos() {
    localStorage.clear();
    updateStorage();
}

function updateStorage() {
    const s = document.getElementById("source");
    const c = document.getElementById("content");
    while (c.firstChild) {
        c.firstChild.remove();
    }
    for (var i = 0; i < localStorage.length; i++) {
        const t = document.createElement("h2");
        t.className = "remove has-background-light"
        t.style = "padding:10px;"
        t.innerHTML = localStorage[i+1];
        c.appendChild(t)
    }
    s.value = "";
}