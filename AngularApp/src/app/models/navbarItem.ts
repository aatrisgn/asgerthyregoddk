export class NavbarItem {
    DisplayName:string;
    Link:string;

    constructor(link:string) {
        this.Link = link;
        this.DisplayName = link.charAt(0).toUpperCase() + link.slice(1);;
    }
  }
  