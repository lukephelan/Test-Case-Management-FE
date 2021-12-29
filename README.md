# Test Case Manager

## About

An Kanban-style application for test case management.
Every time you start a new test cycle you begin with all the default test cases.
Add more test cases and retire redundant ones.
Keep a record of test cycles and cases.

## Goals

* Home page is a list of historical test cycles
* Kanban page shows the test cycle
* Clicking on a cycle in the list will show the historical version (locked)
* You can create a new cycle
* You can view a list of test cases and mark them as active or inactive
* When you create a new board, it will immediately create a new instance of each active test case
* You can "complete" a test cycle and this will lock the board
* You can leave notes in each card (screenshots too one day)
* Test cycle should show start and end time/date
* Automatically timestamp card movements (history)
* Keep a record of the person who tested
* Export to CSV (maybe)
* Connect to JIRA
* See history of a specific test case

## Steps

[X] Create pages and routes
[ ] Setup mock actions, getters and mutations
[ ] Connect to a server

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Run your unit tests

```
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
