interface user {
    readonly dbId : number
    emails: string,
    userId:number,
    googleId? : string,
    startTrial(): string,
    getCoupon(couponname: string, value: number): number
}
interface user{
    githubtoken : string

}

interface admin extends user {
    role: 'admin'| 'ta'| 'learner'
}
const hari : admin = {dbId: 33, emails:'arl@gmail.com',
              userId: 987, 
              githubtoken : 'github',
              role: 'admin',
    startTrial: ()=> {
    return 'trial started'
},
    getCoupon: (name: 'arleen10', off: 10)=>{
        return 10;
    }
}
hari.emails = 'hari@gmail.com'