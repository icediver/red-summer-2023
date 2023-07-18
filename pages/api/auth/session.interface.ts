export interface ISession {
    user: IUser
    accessToken?: string
    expires: Date // This is the expiry of the session, not any of the tokens within the session
}

export interface IUser {
    name: string
    email: string
    image: string
}
export interface ISessionWithToken {
    session: ISession
    token: {
        name: string,
        email: string,
        picture: string,
        sub: string,
        accessToken: string,
        iat: number,
        exp: number,
        jti: string
    }
    user: undefined | IUser
}
export interface IJwt {
    token: {
        name: string,
        email: string,
        picture: string,
        sub: string
        accessToken: string
    }
    account: {
        provider: string,
        type: string,
        providerAccountId: string,
        access_token: string,
        expires_at: number,
        scope: string,
        token_type: string,
        id_token: string
    }
}
