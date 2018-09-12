import cucumber.api.PendingException;
import cucumber.api.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Stepdefs {

    WebDriver driver;

    @Given("^User is on login page$")
    public void user_is_on_login_page() {
        System.setProperty("webdriver.gecko.driver","C:\\Users\\Milind\\Desktop\\geckodriver\\geckodriver.exe");
        driver = new FirefoxDriver();
        driver.get("http://ec2-18-207-99-80.compute-1.amazonaws.com/");

    }

    @When("^Title of login page is AutoLogin$")
    public void title_of_login_page_is_AutoLogin() {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("AutoLogin",title);
    }

    @Then("^User Enters username and password$")
    public void user_Enters_username_and_password() {
        driver.findElement(By.name("username")).sendKeys("admin");
        driver.findElement(By.name("password")).sendKeys("admin");
    }

    @Then("^User clicks on login button$")
    public void user_clicks_on_login_button() {
        WebElement loginButton = driver.findElement(By.tagName("button"));
        JavascriptExecutor je = (JavascriptExecutor) driver;
        je.executeScript("arguments[0].click();",loginButton);
    }

    @Then("^User logged in successfully$")
    public void user_logged_in_successfully() {
        String alert = driver.switchTo().alert().getText();
        Assert.assertEquals("true",alert);
//        driver.close();
    }


}

