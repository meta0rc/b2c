export type userRender = {
    _id: string,
    name: String,
    job: String | any,
    JobRelationsShip: ReadonlyArray<[0]>
    img: any,
    certifications: [{name: String, url: String}],
    avaliables: [{name: String, comment: String, rate: Number}],
    bio: String,
    wwp: String | any,
    premium: Boolean,
    geo: String
    email: String,
    num: String
}
