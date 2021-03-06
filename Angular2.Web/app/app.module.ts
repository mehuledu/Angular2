import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { TranslateModule } from "ng2-translate";

import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";
import { AppComponent } from "../app/app.component";
import { HeaderComponent } from "./header.component";

@NgModule ({
    imports: [
        BrowserModule,
        HttpModule,
        TranslateModule.forRoot(),        
        CoreModule.forRoot(),
        SharedModule,
        RouterModule.forRoot([
        { 
            path: "",
            redirectTo: "customers",
            pathMatch: "full" 
        },
        { 
            path: "customers",
            loadChildren: "app/customer/customer.module#CustomerModule"
        },
        { 
            path: "invoices",
            loadChildren: "app/invoice/invoice.module#InvoiceModule"
        },
    ])],
    exports: [
        RouterModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}
