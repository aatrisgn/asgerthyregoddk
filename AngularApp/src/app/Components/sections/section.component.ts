import { Directive } from "@angular/core";

//TODO: Understand inheritance in angular better
@Directive({
    selector: 'section'
})
class SectionComponent {

  public panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}