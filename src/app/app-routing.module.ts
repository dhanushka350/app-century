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
import {CreateCustomerComponent} from './sales/create-customer/create-customer.component';
import {SalesMainComponent} from './sales/sales-main/sales-main.component';
import {SalesDashboardComponent} from './sales/sales-dashboard/sales-dashboard.component';
import {ListCustomersComponent} from './sales/list-customers/list-customers.component';
import {ProjectCodesComponent} from './sales/project-codes/project-codes.component';
import {PreviousAgreementsComponent} from './sales/previous-agreements/previous-agreements.component';
import {ApprovalRequestComponent} from './sales/approval-request/approval-request.component';
import {ProjectLotsComponent} from './sales/project-lots/project-lots.component';
import {AdvancePaymentsComponent} from './sales/advance-payments/advance-payments.component';
import {BankLoanComponent} from './sales/bank-loan/bank-loan.component';
import {CreateDirectCustomerComponent} from './sales/create-direct-customer/create-direct-customer.component';
import {EarlySettlementsScheduleComponent} from './sales/early-settlements-schedule/early-settlements-schedule.component';
import {EarlySettlementComponent} from './sales/early-settlement/early-settlement.component';
import {OutrightComponent} from './sales/outright/outright.component';
import {ScheduleComponent} from './sales/schedule/schedule.component';
import {AfterAdvanceComponent} from './sales/after-advance/after-advance.component';

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
    path: 'sales', component: SalesMainComponent, children: [
      {path: 'dashboard', component: SalesDashboardComponent},
      {path: 'create-customer', component: CreateCustomerComponent},
      {path: 'list-customer', component: ListCustomersComponent},
      {path: 'project-codes', component: ProjectCodesComponent},
      {path: 'previous-agreements', component: PreviousAgreementsComponent},
      {path: 'approval-request', component: ApprovalRequestComponent},
      {path: 'advance-payments', component: AdvancePaymentsComponent},
      {path: 'bank-loan', component: BankLoanComponent},
      {path: 'create-direct-customer', component: CreateDirectCustomerComponent},
      {path: 'early-settlements-schedule', component: EarlySettlementsScheduleComponent},
      {path: 'early-settlement', component: EarlySettlementComponent},
      {path: 'outright', component: OutrightComponent},
      {path: 'schedule', component: ScheduleComponent},
      {path: 'after-advance', component: AfterAdvanceComponent},
      {path: 'project-lots', component: ProjectLotsComponent}
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
