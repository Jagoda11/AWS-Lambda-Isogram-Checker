# 📚 Isogram Checker

![Last Commit](https://img.shields.io/github/last-commit/Jagoda11/AWS-Lambda-Isogram-Checker/main?style=flat-square&color=blue)
![Open Issues](https://img.shields.io/github/issues/Jagoda11/AWS-Lambda-Isogram-Checker?style=flat-square&color=orange)
![Build Status](https://github.com/Jagoda11/AWS-Lambda-Isogram-Checker/actions/workflows/npm-update.yml/badge.svg?branch=main)

This is a serverless application that checks if a word or phrase is an isogram. An isogram (also known as a "non-pattern word") is a word or phrase without a repeating letter. However, spaces and hyphens are allowed to appear multiple times.

## 🏗️ Architecture

The application is deployed on AWS using CloudFormation. It uses an AWS Lambda function to process the words and an API Gateway to expose the functionality as a REST API. The Lambda function is written in Node.js.

The AWS resources used by the application are defined in the CloudFormation templates `cloudformation-template-update-stack.json` and `cloudformation-template-create-stack.json`.

## 🚀 Usage

You can use the API Gateway to check if a word is an isogram. Send a GET request to the API Gateway URL with the word as a query parameter.

## 📜 Scripts

- 🧪 Test: `npm run test` - Runs the Jest test suite.
- 🚀 Deploy: `npm run deploy` - Deploys the application using Serverless.

### 🛡️ Dependency Update and Vulnerability Scan 

This workflow is scheduled to run daily and can also be triggered manually. It performs the following tasks:

- **Updates all npm dependencies** to their latest versions.
- **Performs a vulnerability scan** using Debricked to ensure that updated dependencies do not introduce security vulnerabilities.
- **Commits and pushes any changes** if dependencies are updated successfully.

These workflows help maintain the health and security of the project, ensuring it remains robust and up-to-date.

## 📝 Examples of Isograms

- lumberjacks
- background
- downstream
- six-year-old

Note: The word "isograms" is not an isogram, because the letter "s" repeats.
