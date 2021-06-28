const searchBar = {
    selector: '#search > input',
    inputText: 'laptop',
    inputText2: 'Mac',
}

const searchButton = {
    selector:'.input-group-btn > .btn',
}

const headerResult = {
    selector: '#content > h1',
    text: 'Search - ',
}

const textProductResults = {
    textProduct: 'iMac',
}

const textSearchResults = {
    selector: '#content > :nth-child(7)',
    textNoResults: 'Your shopping cart is empty!',
}

const dashboardButton = {
    selector: '#logo > h1 > a',
}

const dashboardHeader = {
    selector: '#content > h3',
    text: 'Featured',
}

export const allElementsTest = {
    searchBar,
    headerResult,
    textProductResults,
    textSearchResults,
    dashboardButton,
    dashboardHeader,
    searchButton,
}