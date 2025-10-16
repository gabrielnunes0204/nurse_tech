import { Routes } from '@angular/router';
import { HomeComponent } from './container/components/home/home.component';
import { ConsultaEnfermidadeComponent } from './container/components/consulta-enfermidade/consulta-enfermidade.component';
import { TeleconsultaComponent } from './container/components/teleconsulta/teleconsulta.component';
import { MonitoramentoComponent } from './container/components/monitoramento/monitoramento.component';
import { VideoComponent } from './container/components/video/video.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'teleconsulta', component: TeleconsultaComponent },
    { path: 'monitoramento', component: MonitoramentoComponent },
    { path: 'consulta_enfermidade', component: ConsultaEnfermidadeComponent },
    { path: 'video', component: VideoComponent },
];
