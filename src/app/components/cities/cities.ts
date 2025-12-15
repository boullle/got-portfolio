import { Component,inject,OnInit } from '@angular/core';
import { Router, RouterOutlet,ActivatedRoute} from '@angular/router';
import { citiesModel } from '../../shared/models/cities.model';
import { Title } from '@angular/platform-browser';
import { CitiesList } from "../cities-list/cities-list";

@Component({
  selector: 'app-cities',
  imports: [RouterOutlet, CitiesList],
  templateUrl: './cities.html',
  styleUrl: './cities.scss',
})
export class Cities implements OnInit {
  protected currentTitle:string='';
  protected cities!:citiesModel[];
  private activateRoute=inject(ActivatedRoute);
  private router =inject(Router);
  private titleService=inject(Title);

  ngOnInit(): void {
    this.getTitle();
    this.getCities();  
   
  }
  protected changeTitle() {
    
    this.titleService.setTitle('Villes');
    this.currentTitle = this.titleService.getTitle();
  }
  private getCities():void {
    this.activateRoute.data.subscribe((data)=>{
    this.cities =data['cities'];
    })
  }
    protected goToCityDetails(id:number):void{
    this.router.navigate(['/cities',id]);
    }
    private getTitle(){
       this.currentTitle=this.titleService.getTitle();
    }
}
