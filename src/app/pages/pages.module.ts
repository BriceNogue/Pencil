import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { MaterialModule } from '../material/material.module';
import { ArtworkCardComponent } from './artwork-card/artwork-card.component';
import { PencilArtworkComponent } from './pencil-artwork/pencil-artwork.component';
import { ArtworkDetailComponent } from './artwork-detail/artwork-detail.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [/*{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      //canActivate: [AuthGuard]
    },
    {
      path: 'pencils',
      component: PencilArtworkComponent,
    },
    {
      path: 'artwork_detail',
      component: ArtworkCardComponent,
    },*/
    /*{
      path: '**',
      component: NotFoundComponent,
    },

  ],
} */{path:'home', component: HomeComponent},
    {path: 'chat_bot', component: ChatBotComponent},
    {path: 'artwork_detail/:id', component: ArtworkDetailComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    PagesComponent,
    ArtworkCardComponent,
    PencilArtworkComponent,
    ArtworkDetailComponent,
    ChatBotComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesModule { }
