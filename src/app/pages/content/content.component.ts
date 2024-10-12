import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  private id:string | null = "0"
  photoCover:string = ""
  contentTitle:string = ""
  contentTitleLink:string =""
  contentDescription:string = ""
  
  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    this.photoCover = result.photoCover 
    this.contentTitle = result.title
    this.contentTitleLink = result.titleLink
    this.contentDescription = result.description
  }
}
