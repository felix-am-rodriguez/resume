import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "sobre-mi",
        data: {icon: "person"},
        title: "Sobre Mi",
        loadComponent: () => import("./components/pages/sobre-mi/sobre-mi.component").then(m => m.SobreMiComponent)
    },
    {
        path: "educacion",
        data: {icon: "school"},
        title: "Educación",
        loadComponent: () => import("./components/pages/educacion/educacion.component").then(m => m.EducacionComponent)
    },
    {
        path: "experiencia",
        data: {icon: "person"},
        title: "Experiencia",
        loadComponent: () => import("./components/pages/experiencia/experiencia.component").then(m => m.ExperienciaComponent)
    },
    {
        path: "portafolio",
        data: {icon: "person"},
        title: "Portafolio",
        loadComponent: () => import("./components/pages/portafolio/portafolio.component").then(m => m.PortafolioComponent)
    },
    {
        path: "contacto",
        data: {icon: "person"},
        title: "Contactame",
        loadComponent: () => import("./components/pages/contacto/contacto.component").then(m => m.ContactoComponent)
    },
    { 
        path: "",
        redirectTo: '/sobre-mi',
        pathMatch: 'full'
    }
];
