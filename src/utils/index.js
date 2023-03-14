function clipText(str, length) {
    if (length === str.length) return str;
    else return str.slice(0, length) + "...";
}

export { clipText };
