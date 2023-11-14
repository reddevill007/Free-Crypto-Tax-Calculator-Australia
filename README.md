# Crypto Tax Calculator Web Application

This web application is a Free Crypto Tax Calculator specifically designed for Australia. It allows users to input their financial details and calculates gains, tax rates, and taxes based on the provided logic.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)

## Demo

A live demo of the application can be found [here](https://koinx-project.vercel.app/).

# Crypto Tax Calculator for Australia

## Overview

Welcome to the Free Crypto Tax Calculator designed for Australia! This tool is designed to help you calculate your cryptocurrency gains and taxes based on your financial information. Below are the key features and tasks implemented in this application.

## Mandatory Tasks

### 1. UI Implementation

The user interface has been implemented according to the design provided in the Figma file. It provides an intuitive and user-friendly experience.

### 2. Financial Year and Country Dropdowns

Dropdowns for selecting the financial year and country have been included with predefined values, ensuring accurate tax calculations for the specified region and time period.

### 3. Gain and Tax Calculations

The calculator dynamically calculates the following based on user inputs:

- **Tax Rate Changes:** The tax rate adjusts based on the selected annual income range.
- **Capital Gains Amount:** Calculated as (Sale Price - Purchase Price - Expenses).
- **Long Term Capital Gains Discount:** Set at 50% of the Capital Gains Amount for long-term investments.
- **Net Capital Gains:** Calculated as (Capital Gains Amount - Discount for Long Term Gains).
- **Tax to be Paid:** Computed according to the provided logic.

### 4. GitHub Repository

The source code for the Crypto Tax Calculator has been hosted on GitHub. You can find it at [GitHub Repository Link](https://github.com/reddevill007/Free-Crypto-Tax-Calculator-Australia).

### 5. Deployment

The application has been deployed using Vercel for seamless accessibility. You can use the following link to access the live version: [Live Demo Link](https://koinx-project.vercel.app/).

## Optional Tasks

### 1. FAQ Section

An efficient FAQ section has been implemented, providing answers to commonly asked questions. The data for this section is sourced from an array, ensuring easy maintenance and updates.

### 2. Responsive Design

The user interface is designed to be responsive, adapting to different screen sizes. The layout changes from multiple rows to a single column for improved usability on various devices.

## Installation

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
