<img src="./pga_logo.png" width="100" height="100" />

## PGA RECRUITING - REACT LEADERBOARD PROJECT

The purpose of this project is to give candidates the opportunity to showcase their skills using React, JavaScript, and overall Application Development.

## Overview

The application that candidates must complete will be a simple, generic score leaderboard, letting its users display, add, remove, and edit players.

Candidates should write clean, declarative, and functional code and abide by good design principles.

## Requirements

* Application must be written in React using either a boilerplate framework or none at all. Use of [CREATE REACT APP](https://github.com/facebook/create-react-app) or [NWB](https://github.com/insin/nwb) is preferred.

* The application must support the following main features.
  * Have a form so users can add/edit players. The form must include the following three fields: `firstName:String`, `lastName:String`, `score:Integer`
  * Display the leaderboard in a tabular format sorted by `score`, and `lastName` in ASCENDING order. Therefore, if two players have the same `score`, the sorting will fall back to `lastName`
  * The names displayed on the leaderboard should be combined into one field when displaying as such: `lastName, firstName`
  * Have the ability to remove players by clicking a `Delete` button in the leaderboard.

### Sample leaderboard design:

| Name          | Score |        |
| ------------- | ----- | ------ |
| Geary, Alice  | 96    | Delete |
| Junge, John   | 96    | Delete |
| Vera, Rob     | 88    | Delete |

## Submitting the project
 * Fork this project to a repo on candidate's GitHub
 * Complete application
 * Notify contact that repo is ready for review

## Bonus
These are not required to complete the project but present opportunities to showcase additional skills.

* Test coverage
* Deployment to a production runtime
* Click on leaderboard headers to override default sorting
* Form validation
* Integration with with a `REST` or `GraphQL` API