import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
// import { EmployeeFormComponent } from './employee-form/employee-form.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';
// import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './directive/attribute-directive/attribute-directive.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, EmployeeFormComponent, EmployeeListComponent, DataBindingComponent]
  imports: [RouterOutlet, RouterLink, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basics_00';

}
