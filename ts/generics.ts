

// function sort<T>(arg1: T, arg2: T){
    
// }


// sort(1111, 1111)


type TUser = {
    name: string
    age: number
    isVerified: boolean
    address?: string
}

type ExternalUser = Partial<User> 

const user : ExternalUser = {
    name: "Stas"
}



type TUSerAddress = Record<string, string>

const a : TUSerAddress = {
    a: "1",
    aaaa: "true"
}


////////////////


type Todo  = {
  title: string;
  description: string;
  completed: boolean;
}
 
// type TodoPreview = Pick<Todo, "title" | "description">
type TodoPreview = Omit<Todo, "completed">
 

const todo: TodoPreview = {
  title: "Clean room",
  description: "false",
};
