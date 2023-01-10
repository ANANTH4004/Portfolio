import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillComponent } from './skill/skill.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"home" , component:HomeComponent},
  {path:'contact' , component: ContactComponent},
  {path:'skills' , component:SkillsComponent},
  {path:'skill' , component:SkillComponent},
  {path:'education' , component:EducationComponent},
  {path:'projects' , component:ProjectsComponent},
  {path:'experience',component:ExperienceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
