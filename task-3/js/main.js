let stylesArr = [
    {
        name: "color",
        value: "blue",
    },
    {
        name: "font-size",
        value: "16px",
    },
    {
        name: "font-weight",
        value: "bold",
    },
    {
        name: "text-decoration",
        value: "underline",
    },
    {
        name: "background-color",
        value: "yellow",
    },
]

let someText = "Мороз и солнце - день чудесный";

function showText(arr, text) {
    document.write(
        '<p style = "' + arr[0].name + ': ' + arr[0].value + '">' + text + '</p>'
    );
}

showText(stylesArr, someText);

