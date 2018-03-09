import { SinoutComponent } from './login/sinout.component';
import { ReversePipe } from './app.pipe';
import { ShoppingModule } from './shopping/shopping.module';
import { SignUpComponent } from './login/sign-up.component';
import { SignInComponent } from './login/sign-in.component';
import { HomeComponent, NotFoundComponent, ErrorComponent } from './routes.component';
import { LoginModule } from './login/login.module';
import {MenubarModule} from "primeng/menubar";
import {RouterModule} from "@angular/router"
import { HeaderComponent } from './header.component';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms"
import {BrowserModule} from "@angular/platform-browser";
// import {} from "@angular/";
 // Refer MgModule member from the @angular/core library
import {NgModule} from "@angular/core"

// Decorate the class with Decorator NgModule
const appRoutes = [
    {path:"",component:HomeComponent},
    {path:"LogIn",component:SignInComponent},
    {path:"SignOut",component:SinoutComponent},
    {path:"SignOut",component:SignInComponent},
    {path:"SignUp",component:SignUpComponent},
    {path:"error",component:ErrorComponent},
    {path:"**",component:NotFoundComponent}];

@NgModule({
    //Add components here i.e. registering the component
    declarations:[AppComponent,HeaderComponent , HomeComponent,NotFoundComponent ,ReversePipe, ErrorComponent],
    //Startup component (root component details here)
    bootstrap: [AppComponent],
    // specify here the dependency modules
    imports:[BrowserModule, FormsModule, LoginModule , MenubarModule , RouterModule.forRoot(appRoutes,{useHash:true}) ,ShoppingModule]
})
// Define a Class for the module
export class AppModule {    

}