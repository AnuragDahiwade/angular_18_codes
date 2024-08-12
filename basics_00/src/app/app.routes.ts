import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './directive/attribute-directive/attribute-directive.component';
import { IfelseComponent } from './controlFlow/ifelse/ifelse.component';
import { SwitchComponent } from './controlFlow/switch/switch.component';
import { ForComponent } from './controlFlow/for/for.component';
import { PipeComponent } from './pipe/pipe.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { GetApiComponent } from './api-integration/get-api/get-api.component';
import { PostApiComponent } from './api-integration/post-api/post-api.component';

export const routes: Routes = [
    {
        path: 'emp-list',
        component: EmployeeListComponent
    },
    {
        path: 'add-form',
        component: EmployeeFormComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: 'structural-directive',
        component: StructuralDirectiveComponent
    },
    {
        path: 'attribute-directive',
        component: AttributeDirectiveComponent
    },
    {
        path: 'ifelse',
        component: IfelseComponent
    },
    {
        path: 'switch',
        component: SwitchComponent
    },
    {
        path: 'for',
        component: ForComponent
    },
    {
        path: 'pipe',
        component: PipeComponent
    },
    {
        path: 'template-form',
        component: TemplateFormComponent
    },
    {
        path: 'reactive-form',
        component: ReactiveComponent
    },
    {
        path: 'get-api',
        component: GetApiComponent
    },
    {
        path: 'post-api',
        component: PostApiComponent
    }
];
