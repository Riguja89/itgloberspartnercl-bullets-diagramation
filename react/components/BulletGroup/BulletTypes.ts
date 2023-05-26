export type BulletsSchema = Array <{
    image:string
    titleBullet:string
    link?:LinkProps
}>

export interface LinkProps {
    url:string
    attributeNotfollow?:boolean
    attributeTitle?:string
    openNewTab?:boolean
    newTab?:boolean
}