import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {NgIf, NgFor} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { DetailsComponent } from './details/details.component';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    HomeComponent,
    DetailsComponent,
    
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   ReactiveFormsModule,
   MatSlideToggleModule,
   MatButtonModule, 
   MatDividerModule, 
   MatIconModule, 
   BrowserAnimationsModule,
   MatTableModule,
   NgIf,
   HttpClientModule,
   MatFormFieldModule, 
   MatSelectModule,  
   MatInputModule,
   MatCheckboxModule, 
   NgFor, 
   FormsModule
  ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
