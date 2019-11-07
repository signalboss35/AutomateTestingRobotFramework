# https://blog.thinknet.co.th/tech/%E0%B8%97%E0%B8%B3%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B9%89-test-script-%E0%B8%8A%E0%B8%B8%E0%B8%94%E0%B9%80%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B8%A7-run-%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%97%E0%B8%B1%E0%B9%89%E0%B8%87-ios-%E0%B9%81%E0%B8%A5%E0%B8%B0-android
# robot -v DEVICE:android test-case.robot
# robot -v DEVICE:ios test-case.robot
*** Settings ***
Library             AppiumLibrary
Library             String

Resource            Keyword/${DEVICE}/keyword.robot
# Resource            Data/${LANGE}/data.robot
# Suite Teardown      Close All Applications

** Test Cases ***
Open Application
	Open App
Home Screen
    Test Page Home should Contain text
Open Profile Screen
    Test Open Profile Screen Not Profile Should Be Show Text 'Not Profile'    
Register Screen
    Test Page Register should Contain text
Not Specified Fullname
    Test Full Name Invalid
Not Specified Email Address
    Test EmailAddress Invalid
Not Specified Phone Number    
    Test PhoneNumber Invalid
Not Specified Company Name
    Test CompanyName Invalid
Not Specified Job Position Name
    Test JobPositionName Invalid
Specified All data should be success alert
    Test Specified All Data
Click Tab Profile should be show detail member
    Test Open Profile Screen have Profile Should Be Detail
Click Delete Profile From Storage Should Be Shoew Text Not Profile
    Test Delete Profile From Storage
