export interface Sub {
    nick: string
    avatar: string
    subMonth: number
    description?: string
}

export type SubResponseFromApi = Array<{
    nick: string
    months: number
    profileurl: string
    description:  string
}>