const TokenKey = 'Token'
const UsernameKey = 'Username'
const PasswordKey = 'Password'

const storage=window.localStorage;
export function getToken() {
  return storage.getItem(TokenKey)
}

export function setToken(token) {
  return storage.setItem(TokenKey, token)
}

export function removeToken() {
  return storage.removeItem(TokenKey)
}

export function getUsername() {
    return storage.getItem(UsernameKey)
  }
  
  export function setUsername(username) {
    return storage.setItem(UsernameKey, username)
  }
  
  export function removeUsername() {
    return storage.removeItem(UsernameKey)
  }

  export function getPassword() {
    return storage.getItem(PasswordKey)
  }
  
  export function setPassword(password) {
    return storage.setItem(PasswordKey, password)
  }
  
  export function removePassword() {  
    return storage.removeItem(PasswordKey)
  }  