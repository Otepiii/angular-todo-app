// this is where everything is being declared 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { TodosComponent } from './component/todos/todos.component';

@NgModule({
  declarations: [ // declares the components
    AppComponent,  // all our components will go in here
    TodosComponent
  ],
  imports: [ // imports go here
    BrowserModule, // this would be our modules
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
