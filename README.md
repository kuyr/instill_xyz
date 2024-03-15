# Instill take-home test

This repository contains automated test scripts for the take-home assignment using WebdriverIO, Selenium, and JavaScript.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Reporting](#reporting)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed
- [WebDriver](https://webdriver.io/) or other relevant dependencies installed
- A compatible web browser (e.g., Chrome, Firefox)
- The [web application](https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login) up and running

## Installation

1. Clone this repository:

```sh
git clone https://github.com/kuyr/instill_xyz.git

```

2. Change to the project directory and install dependencies

```sh
   cd instill

   npm install
```

## Running Tests

### Note: Runs on both chrome and firefox by default

To run all the tests use this command:

```bash
      npm run wdio
```

To run the individual tests use these commands:

```bash
      npm run test

```

## Project Structure

The project follows a standard structure:

- Config: Contains configuration files, such as wdio.conf.js.
- Test/specs: Contains the test scripts and suites.
- Pages: Contains Page Object Models (POMs) for better code organization.
- Reports: Will store test reports.

## Reporting

To generate a beautiful report after running the tests:

```bash
      npm run report_generate

```
