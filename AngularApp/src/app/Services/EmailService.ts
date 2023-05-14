import { Injectable } from "@angular/core";
import { EmailContent } from "../models/EmailContent";

@Injectable()
export class EmailService {

    constructor(){}

    SendEmail(emailContent:EmailContent):boolean{
        if(this.validateEmail(emailContent)){
            //SendEmail

            return true;
        }
        return false;
    }

    private validateEmail(emailContent:EmailContent):boolean{
        if(emailContent.Email && emailContent.Name && emailContent.MessageBody ){
            return true;
        }
        return false;
    }
}