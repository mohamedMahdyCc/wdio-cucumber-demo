/**
 * check if element exist
 * @param {string} selector to be checked
 * @returns {boolean} true if exist and false if not exist
 */
export function checkIfElementExists(selector) {
    const elem = $(selector);
    return elem.isExisting();
}
/**
 * go to url
 * @param {string} url to go
 */
export function goToUrl(url) {
    browser.url(url);
}
/**
 * click on element
 * @param {string} selector to be clicked
 */
export function clickSelector(selector) {
    const submitSelector = selector;
    if (checkIfElementExists(submitSelector)) {
        $(submitSelector).click();
    }
}

/**
 * set value inside element
 * @param {string} selector to be filled
 * @param {string} value to be inserted
 */
export function inputSelectorValue(selector, value) {
    const inputSelector = selector;
    if (checkIfElementExists(inputSelector)) {
        $(inputSelector).setValue(value);
    }
}

/**
 * assert url
 * @param {string} url to be asserted
 */
export function checkUrl(url) {
    const currentUrl = browser.getUrl();
    expect(currentUrl).to
        .contain(
            url,
            `Expected URL "${currentUrl}" to contain "${url}"`
        );
}

/**
 * check webpage title
 * @param {string} title of webpage
 */
export function checkTitle(title) {
    const currentTitle = browser.getTitle();
    expect(currentTitle).to
        .contain(
            title,
            `Expected title "${currentTitle}" to contain "${title}"`
        );
}

/**
 * assert content exist
 * @param {string} selector of content
 * @param {string} content text
 * @return {boolean} return true if text exist otherwise return false
 */
export function checkSelectorContent(selector, content) {
    const text = $(`${selector}'='+${content}`);
    if (checkIfElementExists(selector)) {
        return text.getText() === content && text.getTagName() === selector;
    }
    return false;
}
