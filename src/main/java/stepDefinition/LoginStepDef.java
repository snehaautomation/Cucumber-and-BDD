package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDef {
	WebDriver driver;
	
	@Given("^User is already on Amazon Home Page$")
	public void User_is_already_on_Amazon_Home_Page() {
		System.setProperty("webdriver.chrome.driver","drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
//		System.setProperty("webdriver.gecko.driver", "drivers\\geckodriver.exe");
//		driver = new FirefoxDriver();
		driver.get("https://www.amazon.com/");
	}
	
	@When("^title of page is Amazon$")
	public void title_of_page_is_Amazon() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more", title);
	}
	
	@Then("^user hovers on signin$")
	public void user_hovers_on_signin() {
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//*[@id='nav-link-accountList']/span[1]"))).build().perform();
		WebElement SigninButton = driver.findElement(By.xpath("//*[@id='nav-flyout-ya-signin']/a/span"));
     	SigninButton.click();
	}
	
//	@Then("^user clicks on signin$")
//	public void user_clicks_on_signin() {
//		WebElement SigninButton = driver.findElement(By.xpath("//div[@id='nav-flyout-ya-signin']//a[@class='nav-action-button']//span[text()='Sign in']"));
//		SigninButton.click();
//	}
	
	@When("^title of page is signinemailid$")
	public void title_of_page_is_signinemailid() {
		String signintitle = driver.getTitle();
		System.out.println(signintitle);
		Assert.assertEquals("Amazon Sign In", signintitle);
	}
	
	@Then("^user enters emailid as \"(.*)\"$")
	public void user_enters_emailid_as(String emailid) {
		driver.findElement(By.id("ap_email")).sendKeys(emailid);
	}
	
	@And("^user clicks on continue$")
	public void user_clicks_on_continue() {
		driver.findElement(By.xpath("//span[@id='continue']")).click();
	}
	
	@Then("^user enters password as \"(.*)\"$")
	public void user_enters_password_as(String password) {
        driver.findElement(By.id("ap_password")).sendKeys(password);
	}
	
	@And("^user clicks on signinbutton$")
	public void user_clicks_on_signinbutton() {
		driver.findElement(By.id("signInSubmit")).click();
	}
	
	@Then("^user is on his account$")
	public void user_is_on_his_account() {
		String title = driver.getTitle();
		System.out.println("Title of useraccnt is :"+title);
		Assert.assertEquals("Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more", title);
//	    driver.quit();
	}
}
