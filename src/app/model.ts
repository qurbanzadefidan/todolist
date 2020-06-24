

export class Model{
    user;
    items;


constructor (){
    this.user="Fidan";
    this.items=[
        new TodoItem("Read a book",true),
        new TodoItem("Work out",false),
        new TodoItem("Wake up 5 am",false),
        new TodoItem("Drink coffe",false)      
        ];
    
}
}
export class TodoItem{
    description;
    action;
    constructor(description, action){
        this.description=description;
        this.action=action;
    }
}