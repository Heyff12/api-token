let token = ''

if (!token) {
    console.log('----------onCompleted-----------------')
    console.log(token)
    chrome.webRequest.onCompleted.addListener(
        (details) => {
            const a = details.responseHeaders.find(item => item.name === 'Traceid')
            token = a['value']
            console.log(a)
            console.log(token)
        }, {
            urls: ['*://www.baidu.com/*'],
            // type:[]
        }, ["responseHeaders"]
    );
}


chrome.webRequest.onBeforeSendHeaders.addListener(
    (details) => {
        details.requestHeaders.push({
            name: 'haha',
            value: token
        })
        return {
            requestHeaders: details.requestHeaders
        };
    }, {
        urls: ['*://www.yaya12.com/*']
    }, ["blocking", "requestHeaders"]
);