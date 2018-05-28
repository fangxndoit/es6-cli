function addTextToBody(text) {
    const div = document.createElement('div');
    div.textContent = text;
    document.body.appendChild(div);
}
function foo(params) {
    console.log('foo');
}
function bar(params) {
    console.log('bar');
}

export { foo, bar }
export {addTextToBody as default};


