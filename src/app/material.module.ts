import { NgModule } from "@angular/core";

import { FlexLayoutModule } from '@angular/flex-layout' 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';

const MODULES = [
    FlexLayoutModule,
    MatToolbarModule, MatInputModule, MatFormFieldModule, 
    MatButtonModule, MatRadioModule, MatCardModule,
    MatIconModule, MatMomentDateModule, MatDatepickerModule
];

@NgModule({
    imports: MODULES,
    exports: MODULES
})

export class MaterialModule { }