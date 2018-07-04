// import { Component } from '@angular/core';

// import { Hero }    from '../hero';

// @Component({
//   selector: 'app-hero-form',
//   templateUrl: './hero-form.component.html',
//   styleUrls: ['./hero-form.component.css']
// })
// export class HeroFormComponent {

//   powers = ['', 'Super Flexible',
//             'Super Hot', 'Weather Changer'];

//   model = new Hero(18, this.powers[0], 'Chuck Overstreet');

//   submitted = false;

//   onSubmit() { this.submitted = true; }

//   // TODO: Remove this when we're done
//   get diagnostic() { return JSON.stringify(this.model); }
// }

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Hero } from '../hero';

@Component({
 selector: 'app-hero-form',
 templateUrl: './hero-form.component.html',
 styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

 powers = ['', '',
 '', ''];

 name = '';
 language = '';
 values: any = [];
 // model = new Hero(18, this.powers[0], 'Chuck Overstreet');

 // submitted = false;

 onSubmit(form) { 
 if(form.valid) {
 this.values.push({name: this.name, language: this.language});
 form.reset()
 }
 }
 }	