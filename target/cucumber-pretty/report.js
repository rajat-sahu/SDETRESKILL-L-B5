$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/BMICalculator.feature");
formatter.feature({
  "line": 1,
  "name": "Calculating Body Mass Index",
  "description": "verify the login module",
  "id": "calculating-body-mass-index",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Calculate Body Mass Index",
  "description": "",
  "id": "calculating-body-mass-index;calculate-body-mass-index",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open Url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Validate the Tittle of the current page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on BMI Calculator",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter \u003cAge\u003e as age",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \u003cHeight\u003e as height",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \u003cWeight\u003e as weight",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I press the Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should Capture the BMI Result value \u0026 Print it",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "calculating-body-mass-index;calculate-body-mass-index;",
  "rows": [
    {
      "cells": [
        "Age",
        "Height",
        "Weight"
      ],
      "line": 16,
      "id": "calculating-body-mass-index;calculate-body-mass-index;;1"
    },
    {
      "cells": [
        "10",
        "127",
        "40"
      ],
      "line": 17,
      "id": "calculating-body-mass-index;calculate-body-mass-index;;2"
    },
    {
      "cells": [
        "30",
        "156",
        "70"
      ],
      "line": 18,
      "id": "calculating-body-mass-index;calculate-body-mass-index;;3"
    },
    {
      "cells": [
        "25",
        "152",
        "55"
      ],
      "line": 19,
      "id": "calculating-body-mass-index;calculate-body-mass-index;;4"
    },
    {
      "cells": [
        "20",
        "160",
        "45"
      ],
      "line": 20,
      "id": "calculating-body-mass-index;calculate-body-mass-index;;5"
    },
    {
      "cells": [
        "35",
        "160",
        "70"
      ],
      "line": 21,
      "id": "calculating-body-mass-index;calculate-body-mass-index;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Calculate Body Mass Index",
  "description": "",
  "id": "calculating-body-mass-index;calculate-body-mass-index;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open Url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Validate the Tittle of the current page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on BMI Calculator",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter 10 as age",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter 127 as height",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter 40 as weight",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I press the Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should Capture the BMI Result value \u0026 Print it",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculatorStepDefination.open_Url()"
});
formatter.result({
  "duration": 9353449100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.validate_the_Tittle_of_the_current_page()"
});
formatter.result({
  "duration": 9185300,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 6884026400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 8
    }
  ],
  "location": "BMICalculatorStepDefination.i_enter_as_age(int)"
});
formatter.result({
  "duration": 2152229600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "127",
      "offset": 8
    }
  ],
  "location": "BMICalculatorStepDefination.i_enter_as_height(int)"
});
formatter.result({
  "duration": 2125486900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 8
    }
  ],
  "location": "BMICalculatorStepDefination.i_enter_as_weight(int)"
});
formatter.result({
  "duration": 2131420700,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.i_press_the_Calculate_button()"
});
formatter.result({
  "duration": 709815100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.i_should_Capture_the_BMI_Result_value_Print_it()"
});
formatter.result({
  "duration": 35686300,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.i_close_the_browser()"
});
formatter.result({
  "duration": 95815600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Calculate Body Mass Index",
  "description": "",
  "id": "calculating-body-mass-index;calculate-body-mass-index;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open Url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Validate the Tittle of the current page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on BMI Calculator",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter 30 as age",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter 156 as height",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter 70 as weight",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I press the Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should Capture the BMI Result value \u0026 Print it",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculatorStepDefination.open_Url()"
});
formatter.result({
  "duration": 7236612000,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.validate_the_Tittle_of_the_current_page()"
});
formatter.result({
  "duration": 15683800,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 6592661700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 8
    }
  ],
  "location": "BMICalculatorStepDefination.i_enter_as_age(int)"
});
formatter.result({
  "duration": 2129885700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "156",
      "offset": 8
    }
  ],
  "location": "BMICalculatorStepDefination.i_enter_as_height(int)"
});
formatter.result({
  "duration": 2137852400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 8
    }
  ],
  "location": "BMICalculatorStepDefination.i_enter_as_weight(int)"
});
formatter.result({
  "duration": 2127906800,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.i_press_the_Calculate_button()"
});
formatter.result({
  "duration": 633595500,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.i_should_Capture_the_BMI_Result_value_Print_it()"
});
formatter.result({
  "duration": 32823900,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.i_close_the_browser()"
});
formatter.result({
  "duration": 81903300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Calculate Body Mass Index",
  "description": "",
  "id": "calculating-body-mass-index;calculate-body-mass-index;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open Url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Validate the Tittle of the current page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on BMI Calculator",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter 25 as age",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter 152 as height",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter 55 as weight",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I press the Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should Capture the BMI Result value \u0026 Print it",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculatorStepDefination.open_Url()"
});
formatter.result({
  "duration": 7204843300,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.validate_the_Tittle_of_the_current_page()"
});
formatter.result({
  "duration": 11530400,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 7457917000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 8
    }
  ],
  "location": "BMICalculatorStepDefination.i_enter_as_age(int)"
});
formatter.result({
  "duration": 2141241300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "152",
      "offset": 8
    }
  ],
  "location": "BMICalculatorStepDefination.i_enter_as_height(int)"
});
formatter.result({
  "duration": 2131989500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55",
      "offset": 8
    }
  ],
  "location": "BMICalculatorStepDefination.i_enter_as_weight(int)"
});
formatter.result({
  "duration": 2099842600,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.i_press_the_Calculate_button()"
});
formatter.result({
  "duration": 641221600,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.i_should_Capture_the_BMI_Result_value_Print_it()"
});
formatter.result({
  "duration": 29017500,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.i_close_the_browser()"
});
formatter.result({
  "duration": 96500500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Calculate Body Mass Index",
  "description": "",
  "id": "calculating-body-mass-index;calculate-body-mass-index;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open Url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Validate the Tittle of the current page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on BMI Calculator",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter 20 as age",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter 160 as height",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter 45 as weight",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I press the Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should Capture the BMI Result value \u0026 Print it",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculatorStepDefination.open_Url()"
});
formatter.result({
  "duration": 7426985100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.validate_the_Tittle_of_the_current_page()"
});
formatter.result({
  "duration": 7212400,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 6765417100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 8
    }
  ],
  "location": "BMICalculatorStepDefination.i_enter_as_age(int)"
});
formatter.result({
  "duration": 2137968700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "160",
      "offset": 8
    }
  ],
  "location": "BMICalculatorStepDefination.i_enter_as_height(int)"
});
formatter.result({
  "duration": 2109892200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 8
    }
  ],
  "location": "BMICalculatorStepDefination.i_enter_as_weight(int)"
});
formatter.result({
  "duration": 2118225500,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.i_press_the_Calculate_button()"
});
formatter.result({
  "duration": 609775800,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.i_should_Capture_the_BMI_Result_value_Print_it()"
});
formatter.result({
  "duration": 44248900,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.i_close_the_browser()"
});
formatter.result({
  "duration": 88697200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Calculate Body Mass Index",
  "description": "",
  "id": "calculating-body-mass-index;calculate-body-mass-index;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open Url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Validate the Tittle of the current page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click on BMI Calculator",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter 35 as age",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter 160 as height",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter 70 as weight",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I press the Calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should Capture the BMI Result value \u0026 Print it",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculatorStepDefination.open_Url()"
});
formatter.result({
  "duration": 7208109200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.validate_the_Tittle_of_the_current_page()"
});
formatter.result({
  "duration": 10661300,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 6254350100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 8
    }
  ],
  "location": "BMICalculatorStepDefination.i_enter_as_age(int)"
});
formatter.result({
  "duration": 2114978100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "160",
      "offset": 8
    }
  ],
  "location": "BMICalculatorStepDefination.i_enter_as_height(int)"
});
formatter.result({
  "duration": 2128394000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 8
    }
  ],
  "location": "BMICalculatorStepDefination.i_enter_as_weight(int)"
});
formatter.result({
  "duration": 2128327100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.i_press_the_Calculate_button()"
});
formatter.result({
  "duration": 674045200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.i_should_Capture_the_BMI_Result_value_Print_it()"
});
formatter.result({
  "duration": 42469700,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculatorStepDefination.i_close_the_browser()"
});
formatter.result({
  "duration": 86514400,
  "status": "passed"
});
});