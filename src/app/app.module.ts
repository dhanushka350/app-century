import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {TopBarComponent} from './top-bar/top-bar.component';
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
import {SuiModule} from 'ng2-semantic-ui';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {LandingComponent} from './landing/landing.component';
import {SweetAlert2Module} from '@toverux/ngx-sweetalert2';
import { CreateCustomerComponent } from './sales/create-customer/create-customer.component';
import { SalesSideBarComponent } from './sales/sales-side-bar/sales-side-bar.component';
import { SalesMainComponent } from './sales/sales-main/sales-main.component';
import { SalesDashboardComponent } from './sales/sales-dashboard/sales-dashboard.component';
import { ListCustomersComponent } from './sales/list-customers/list-customers.component';
import { ProjectCodesComponent } from './sales/project-codes/project-codes.component';
import { PreviousAgreementsComponent } from './sales/previous-agreements/previous-agreements.component';
import { ApprovalRequestComponent } from './sales/approval-request/approval-request.component';
import { ProjectLotsComponent } from './sales/project-lots/project-lots.component';
import { AdvancePaymentsComponent } from './sales/advance-payments/advance-payments.component';
import { BankLoanComponent } from './sales/bank-loan/bank-loan.component';
import { CreateDirectCustomerComponent } from './sales/create-direct-customer/create-direct-customer.component';
import { EarlySettlementsScheduleComponent } from './sales/early-settlements-schedule/early-settlements-schedule.component';
import { EarlySettlementComponent } from './sales/early-settlement/early-settlement.component';
import { OutrightComponent } from './sales/outright/outright.component';
import { ScheduleComponent } from './sales/schedule/schedule.component';
import {AfterAdvanceComponent} from './sales/after-advance/after-advance.component';
import { ManagerApprovalComponent } from './sales/manager-approval/manager-approval.component';
import { ReminderLetterGeneratorComponent } from './sales/reminder-letter-generator/reminder-letter-generator.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
    ApprovedProjectsComponent,
    AreawiseProjectsComponent,
    RejectedProjectsComponent,
    LocationsComponent,
    CreateProjectsComponent,
    PurchasingCostsComponent,
    DevelopmentCostComponent,
    AdvertisingCostComponent,
    ResaleCostComponent,
    SalesAndProfitabilityComponent,
    PreviewLandDetailsComponent,
    CreateLandSaleComponent,
    DashboardComponent,
    LoginComponent,
    MainComponent,
    LandingComponent,
    CreateCustomerComponent,
    SalesSideBarComponent,
    SalesMainComponent,
    SalesDashboardComponent,
    ListCustomersComponent,
    ProjectCodesComponent,
    PreviousAgreementsComponent,
    ApprovalRequestComponent,
    ProjectLotsComponent,
    AdvancePaymentsComponent,
    BankLoanComponent,
    CreateDirectCustomerComponent,
    EarlySettlementsScheduleComponent,
    EarlySettlementComponent,
    OutrightComponent,
    ScheduleComponent,
    AfterAdvanceComponent,
    ManagerApprovalComponent,
    ReminderLetterGeneratorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule,
    NgbModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'ui teal button',
      cancelButtonClass: 'ui red button'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
