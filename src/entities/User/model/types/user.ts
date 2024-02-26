export interface User {
    id: string
    username: string
    avatar?: string
}

export interface UserSchema {
    authData?: User // if empty => unAuthorized

    _isInited: boolean
}
