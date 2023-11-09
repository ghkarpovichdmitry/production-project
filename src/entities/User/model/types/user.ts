export interface User {
    id: string
    username: string
}

export interface UserScheme {
    authData?: User // if empty => unathorized
}
