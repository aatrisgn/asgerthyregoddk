export class EmailContent {
    Name:string;
    Email:string;
    MessageBody:string;

    constructor(name:string, email:string, messageBody:string){
        this.Name = name;
        this.Email = email;
        this.MessageBody = messageBody;
    }
}