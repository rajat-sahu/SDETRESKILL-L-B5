package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class BMICalculatorStepDefination {
	WebDriver driver;
	
	@Given("^Open Url$")
	public void open_Url() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "C:/Rajat/chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.manage().window().maximize();
	    driver.get("https://www.calculator.net/");
	}

	@When("^Validate the Tittle of the current page$")
	public void validate_the_Tittle_of_the_current_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String title = driver.getTitle();
	    System.out.println(title);
	    Assert.assertEquals("Calculator.net: Free Online Calculators - Math, Fitness, Finance, Science", title);
	}

	@When("^Click on BMI Calculator$")
	public void click_on_BMI_Calculator() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.xpath("//*[@id='hl2']/li[1]/a")).click();
	    Thread.sleep(5000);
	}
	
	@When("^I enter (\\d+) as age$")
	public void i_enter_as_age(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.xpath("//input[@id='cage']")).clear();
	    driver.findElement(By.xpath("//input[@id='cage']")).sendKeys(String.valueOf(arg1));
	    Thread.sleep(2000);
	}

	@When("^I enter (\\d+) as height$")
	public void i_enter_as_height(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//*[@id='cheightmeter']")).clear();
	    driver.findElement(By.xpath("//*[@id='cheightmeter']")).sendKeys(String.valueOf(arg1));
	    Thread.sleep(2000);
	}

	@When("^I enter (\\d+) as weight$")
	public void i_enter_as_weight(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//*[@id='ckg']")).clear();
	    driver.findElement(By.xpath("//*[@id='ckg']")).sendKeys(String.valueOf(arg1));
	    Thread.sleep(2000);
	}

	@When("^I press the Calculate button$")
	public void i_press_the_Calculate_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.xpath("//input[@value='Calculate']")).click();
	}

	@Then("^I should Capture the BMI Result value & Print it$")
	public void i_should_Capture_the_BMI_Result_value_Print_it() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	 String bmi = driver.findElement(By.xpath("//*[@id='content']/div[4]/div/b")).getText();
	 System.out.println("BMI result : "+bmi);
	}

	@Then("^I close the browser$")
	public void i_close_the_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	 driver.close();;
	}
	
}
