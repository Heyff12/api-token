const setCookieBtn = document.getElementById('setCookie')

const cookieNeed = ['pplogid','pplogid_BFESS','PSTM']
const cookieNeedFromPath = ['pplogid','pplogid_BFESS']
const cookieFrom = 'https://baidu.com'
const cookieFromPath = "https://passport.baidu.com"
const cookieTo = 'https://www.yaya12.com'

function getCookies(name,callback){
  const url = cookieNeedFromPath.includes(name) ? cookieFromPath : cookieFrom
  chrome.cookies.get({url,name},(cookie)=>{
    if(callback){
      callback(cookie)
    }
  })
}

function setCookie(){
  cookieNeed.forEach(item=>{
    getCookies(item,(cookie)=>{
      if(!cookie) return
      const {name,value}=cookie
      chrome.cookies.set({url:cookieTo,name,value})
    })
  })
}

setCookieBtn.onclick = setCookie()