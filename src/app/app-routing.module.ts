import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ApprovedProjectsComponent} from './approved-projects/approved-projects.component';
import {AreawiseProjectsComponent} from './areawise-projects/areawise-projects.component';
import {RejectedProjectsComponent} from './rejected-projects/rejected-projects.component';
import {LocationsComponent} from './locations/locations.component';
import {CreateProjectsComponent} from './create-projects/create-projects.component';
import {PurchasingCostsComponent} from './purchasing-costs/purchasing-costs.component';
import {DevelopmentCostComponent} from './development-cost/development-cost.component';
import {AdvertisingCostComponent} from './advertising-cost/advertising-cost.component';
import {ResaleCostComponent} from './resale-cost/resale-cost.component';
import {SalesAndProfitabilityComponent} from './sales-and-profitability/sales-and-profitability.component';
import {PreviewLandDetailsComponent} from './preview-land-details/preview-land-details.component';
import {CreateLandSaleComponent} from './create-land-sale/create-land-sale.component';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LandingComponent} from './landing/landing.component';

const routes: Routes = [
  {
    path: 'main', component: MainComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'approved-projects', component: ApprovedProjectsComponent},
      {path: 'areawise-projects', component: AreawiseProjectsComponent},
      {path: 'rejected-projects', component: RejectedProjectsComponent},
      {path: 'create-new', component: CreateProjectsComponent},
      {path: 'locations', component: LocationsComponent},
      {path: 'purchasing-costs', component: PurchasingCostsComponent},
      {path: 'development-costs', component: DevelopmentCostComponent},
      {path: 'advertising-costs', component: AdvertisingCostComponent},
      {path: 'resale-costs', component: ResaleCostComponent},
      {path: 'sales-and-profitability', component: SalesAndProfitabilityComponent},
      {path: 'preview-before-approval', component: PreviewLandDetailsComponent},
      {path: 'create-land-sale-profile', component: CreateLandSaleComponent}
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
