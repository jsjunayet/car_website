import { ReactNode } from "react"

export type TuserPath ={
    name:string,
    path?:string,
    element?: ReactNode,
    children?:TuserPath[]

 }
export type TRoute = {
    path: string,
    element: ReactNode
}
