type TStatus = "active" | "deleted" | "suspended"

// const userStatus: TStatus = "active"

function printStatus (status : TStatus) {
    console.log(status)
}


printStatus("active")


type TAddress = {
    street: string
    street2?: string
} & Record<string, string>

type TContactInfo = {
    phone: string
    email: string
}


type TUserInfo = TAddress & TContactInfo


const userAddress : TAddress = {
    street: "Central",
    row: "Green",
    row2: "Green",
    row3: "Green",
}



let myName : unknown = "Stas"
myName = 1
myName = true


