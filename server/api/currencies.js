export default defineEventHandler(() => {
    fetch('./balance.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
    return {};
});