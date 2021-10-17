import { ChatsPageComponent } from './chats-page/chats-page.component';
import { AboutSecionTwoComponent } from './about-secion-two/about-secion-two.component';
import { AboutSecionOneComponent } from './about-secion-one/about-secion-one.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatWithUserComponent } from './chat-with-user/chat-with-user.component';

const routes: Routes = [
  //here u found all my routes
   {path:"home" ,redirectTo:"full"},
   {path:"home" , component:HomePageComponent},

   { path:'chats', component:ChatsPageComponent},
   { path:'chats/user/:id', component:ChatWithUserComponent },

   {path:"contact" , component:ContactPageComponent},


   //children hedha c le nestedRouting! for about:
   { path:'about', component:AboutPageComponent, children:[
    { path:'one', component :AboutSecionOneComponent },
    { path:'two', component :AboutSecionTwoComponent },
    
  ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
