import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { citiesModel } from '../../shared/models/cities.model';
import { HoverHighlight } from '../../shared/directives/hover-highlight';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cities-list',
  imports: [HoverHighlight, ReactiveFormsModule],
  templateUrl: './cities-list.html',
  styleUrl: './cities-list.scss',
})
export class CitiesList {

  @Input() cities!: citiesModel[];
  @Output() cityCreated=new EventEmitter<citiesModel>();


  protected cityForm = new FormGroup({
    name: new FormControl<string>('Bangkok',[Validators.required, Validators.minLength(3)]),
    inhabitants: new FormControl<number>(100, [Validators.required, Validators.minLength(1)]),
    typicalDish: new FormControl<string>('Pad Thai', [Validators.required, Validators.minLength(3)]),
    currency: new FormControl<string>('Baht Thai', [Validators.required, Validators.minLength(3)]),
    flag: new FormControl<string>('🇹🇭', [Validators.required,Validators.minLength(2), Validators.maxLength(2)])
})
protected addCity():void{
  if(this.cityForm.invalid){
    this.cityForm.markAllAsTouched();
    return;
  }
  const values = this.cityForm.value;
  console.log(values);
  const newCity:citiesModel={
    id: Date.now(),
    name: values.name ?? '',
    inhabitants: values.inhabitants ?? 0,
    typicalDish: values.typicalDish ?? '',
    currency: values.currency ?? '',
    flag: values.flag ?? '',
  }
  this.cityCreated.emit(newCity);
  this.cityForm.reset();
}
}
