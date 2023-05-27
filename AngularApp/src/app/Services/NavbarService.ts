import { NavbarItem } from "../models/navbarItem";

export class NavbarService {
    private navbarItemList:Array<NavbarItem> = [
        new NavbarItem("about"),
        new NavbarItem("experience"),
        new NavbarItem("education"),
        new NavbarItem("certificates"),
        new NavbarItem("hobbies"),
        new NavbarItem("contact")
    ]

    constructor(){}

    GetNavbarItems(){
        return this.navbarItemList;
    }
}