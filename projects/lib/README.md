<!-- Logo -->
<p align="center">
  <a href="https://angular-ex.github.io/ngx-semantic-ui/">
    <img height="128" width="238" src="https://raw.githubusercontent.com/angular-ex/ngx-semantic-ui/main/projects/demo/src/assets/logo.png">
  </a>
</p>

<!-- Name -->
<h1 align="center">
  <a href="https://angular-ex.github.io/ngx-semantic-ui">@angular-ex/semantic-ui</a>
</h1>

Semantic UI Angular Integrations, written in pure Angular - **no JQuery required**.

## Introduction

Angular and jQuery don't go together - this is the fundamental principal of this library. It provides Angular component versions of the Semantic UI modules, so that you don't need to add jQuery to your app.

Note that only Semantic UI elements that use jQuery are recreated here - those written purely in CSS aren't included as they can be used in Angular apps already.

## Installation & Usage

See the [Documentation](https://angular-ex.github.io/ngx-semantic-ui) for installation instructions and extensive examples.

## Dependencies

* [Angular](https://angular.io) (^16.0.0)
* [Semantic UI CSS](http://semantic-ui.com/) (^2.3.1) (jQuery is **not** required)

## Component Support

|           Icon          |                                      Description                                    |
|-------------------------|-------------------------------------------------------------------------------------|
| :white_check_mark:      | Component supported by @angular-ex/semantic-ui.                                             |
| :rocket:                | Semantic UI plugin supported by @angular-ex/semantic-ui (not in Semantic UI Core).          |
| :ballot_box_with_check: | Component supported natively by [Semantic UI](https://semantic-ui.com/) (CSS only). |
| :x:                     | Component currently unavailable.                                                    |
| :no_entry_sign:         | Component not applicable to Angular.                                                |

|              Elements              |            Collections             |                   Views                  |              Modules              |              Behaviors              |
|------------------------------------|------------------------------------|------------------------------------------|-----------------------------------|-------------------------------------|
| :ballot_box_with_check: Button     | :ballot_box_with_check: Breadcrumb | :ballot_box_with_check: Advertisment     | :white_check_mark: Accordion      | :no_entry_sign: API                 |
| :ballot_box_with_check: Container  | :ballot_box_with_check: Form       | :ballot_box_with_check: Card             | :white_check_mark: Checkbox       | :no_entry_sign: Form Validation     |
| :ballot_box_with_check: Divider    | :ballot_box_with_check: Grid       | :ballot_box_with_check: Comment          | :rocket: Collapse                 | :rocket: Localization               |
| :ballot_box_with_check: Flag       | :ballot_box_with_check: Menu       | :ballot_box_with_check: Feed             | :rocket: Datepicker               | :x: Visibiltiy                      |
| :ballot_box_with_check: Header     | :white_check_mark: Message         | :ballot_box_with_check: Item             | :white_check_mark: Dimmer         |                                     |
| :ballot_box_with_check: Icon       | :rocket: Pagination                | :ballot_box_with_check: Statistic        | :white_check_mark: Dropdown       |                                     |
| :ballot_box_with_check: Image      | :ballot_box_with_check: Table      |                                          | :x: Embed                         |                                     |
| :ballot_box_with_check: Input      |                                    |                                          | :white_check_mark: Modal          |                                     |
| :ballot_box_with_check: Label      |                                    |                                          | :white_check_mark: Popup          |                                     |
| :ballot_box_with_check: List       |                                    |                                          | :white_check_mark: Progress       |                                     |
| :ballot_box_with_check: Loader     |                                    |                                          | :white_check_mark: Rating         |                                     |
| :ballot_box_with_check: Rail       |                                    |                                          | :white_check_mark: Search         |                                     |
| :ballot_box_with_check: Reveal     |                                    |                                          | :x: Shape                         |                                     |
| :ballot_box_with_check: Segment    |                                    |                                          | :white_check_mark: Sidebar        |                                     |
| :ballot_box_with_check: Step       |                                    |                                          | :x: Sticky                        |                                     |
|                                    |                                    |                                          | :white_check_mark: Tab            |                                     |
|                                    |                                    |                                          | :white_check_mark: Transition     |                                     |

## Want to help?

Want to file a bug, contribute some code, or improve documentation? Great! Please read the [contributing guidelines](https://github.com/angular-ex/ngx-semantic-ui/blob/main/CONTRIBUTING.md) to get going.

## Development

To generate all library files:

```bash
$ npm run lib:build
# use lib:build:w to watch for changes
```

To run the demo app:
```bash
$ npm run demo:serve
```

## Testing

To run the unit tests suite:
```bash
$ npm run test
```

## License

MIT © @angular-ex

