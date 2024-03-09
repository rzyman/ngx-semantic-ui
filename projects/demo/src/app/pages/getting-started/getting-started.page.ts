import { Component } from "@angular/core";

@Component({
    selector: "demo-page-getting-started",
    templateUrl: "./getting-started.page.html",
    styles: [`
.dividing.header {
    margin-top: 1em;
    margin-bottom: 0.5em;
}
`]
})
export class GettingStartedPage {
    public installCode:string = `$ npm install @angular-ex/semantic-ui --save`;

    public includeCssCode:string =
`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css">`;

    public importCode:string = `import {SuiModule} from '@angular-ex/semantic-ui';`;
    public moduleImportCode:string = `
import {SuiModule} from '@angular-ex/semantic-ui';

@NgModule({
    declarations: [AppComponent, ...],
    imports: [SuiModule, ...],  
    bootstrap: [AppComponent]
})
export class AppModule {}
`;
    public systemJSCode:string = `
var config = {
    ...
    map: {
        ...
        '@angular-ex/semantic-ui': 'npm:@angular-ex/semantic-ui/fesm2022/lib.mjs'
    }
}
`;
    public individualImportCode:string = `import {SuiCheckboxModule, SuiRatingModule} from '@angular-ex/semantic-ui';`;
}
