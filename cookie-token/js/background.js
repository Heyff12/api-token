const headers = ['sig','shaOne']
let headersValue = []

if (!headersValue.length) {
    chrome.webRequest.onBeforeSendHeaders.addListener(
        (details) => {
            headersValue = details.requestHeaders.filter(item=>Headers.inclues(item))
        }, {
            urls: ['*://www.baidu.com/*'],
            // types:['xmlhttprequest']
        }, ["blocking", "requestHeaders"]
    );
}


chrome.webRequest.onBeforeSendHeaders.addListener(
    (details) => {
        details.requestHeaders = details.requestHeaders.concat(headersValue)
        return {
            requestHeaders: details.requestHeaders
        };
    }, {
        urls: ['*://www.yaya12.com/*'],
        // types:['xmlhttprequest']
    }, ["blocking", "requestHeaders"]
);