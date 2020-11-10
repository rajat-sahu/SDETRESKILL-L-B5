Feature: Calculating Body Mass Index
	verify the login module
@RegressionTest
Scenario Outline: Calculate Body Mass Index
Given Open Url 
When Validate the Tittle of the current page 
And Click on BMI Calculator
And I enter <Age> as age
And I enter <Height> as height
And I enter <Weight> as weight
And I press the Calculate button
Then I should Capture the BMI Result value & Print it
Then I close the browser

    Examples:
    |Age	|Height |Weight |
    |10	|127		|40			|
		|30	|156		|70			|
		|25	|152		|55			|
		|20	|160		|45			|
		|35	|160		|70			|