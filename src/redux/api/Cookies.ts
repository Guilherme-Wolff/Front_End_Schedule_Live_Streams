export function setCookie(name:string, value:string, daysToExpire:any) {
    let cookie = name + "=" + value;
    if (daysToExpire) {
      const date = new Date();
      date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
      cookie += "; expires=" + date.toUTCString();
    }
    document.cookie = cookie;
  }

export function getCookie(name:string) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

export function removeCookie(name:string) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }