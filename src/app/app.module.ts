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
import { MatTableModule } from '@angular/material/table';
import { DetailsComponent } from './details/details.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HeaderComponent } from './header/header.component';
import { CreateComponent } from './create/create.component';
import { TableComponent } from './shared/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    HomeComponent,
    DetailsComponent,
    HeaderComponent,
    CreateComponent,
    TableComponent, 
  ],
  imports: [
   HttpClientModule,
   BrowserModule,
   AppRoutingModule,
   BrowserAnimationsModule,
  // form
   ReactiveFormsModule,
   FormsModule,
  // material 
   MatSlideToggleModule,
   MatButtonModule, 
   MatDividerModule, 
   MatIconModule, 
   MatTableModule,
   MatFormFieldModule, 
   MatSelectModule,  
   MatInputModule,
   MatCheckboxModule, 
   ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
