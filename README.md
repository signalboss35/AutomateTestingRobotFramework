# AutomateTestingRobotFramework
## Installation Code
- Clone project

```bash
git clone https://github.com/signalboss35/AutomateTestingRobotFramework.git
```
- install react native package

```bash
npm install -g react-native-cli
npm install
```
## UAT Test ANDROID
- install Appium Desktop for inspect ui to xpath in robot framework https://github.com/appium/appium-desktop/releases/tag/v1.15.0-1
```bash
npm install -g appium
```
- open git command install library appium for robot framwork
```bash
pip install robotframework-appiumlibrary
```
- open application appium create server and port
![image](docs/cap3.PNG)
- click start inspector session
![image](docs/cap2.PNG)
- create criteria JSON Representation
![image](docs/cap1.PNG)
- click start session
![image](docs/cap4.PNG)
## Run script robot framework
- syntax robot framwork
```bash
*** Settings ***
*** Variables ***
*** Keywords ***
*** Test Cases ***
```
keyword.robot
```bash
*** Settings ***
*** Settings ***
Library           AppiumLibrary

*** Variables ***
${REMOTE_URL}   		http://localhost:4723/wd/hub
${deviceName}    		emulator-5554
${platformName}    	android
${appPackage}    		com.automate_test
${appActivity}    	.MainActivity
${noReset}    			True
${FullName}         Auttachai Kanthanras 
${EmailAddress}     auttachai@hii.or.th 
${PhoneNumber}      0931369196
${CompanyName}      Hydro - Informatics Institute
${JobPositionName}  Programmer

*** Keyword ***
Open App
  Open Application    ${REMOTE_URL}   deviceName=${deviceName}  platformName=${platformName}  appPackage=${appPackage}  appActivity=${appActivity}  autoAcceptAlerts=True automationName=UiAutomator2 autoGrantPermissions=True autoDismissAlerts=True noReset=${noReset}
Test Page Home should Contain text
  Wait Until Page Contains Element    xpath=//android.widget.TextView[@text='HOME']
  Page Should Contain Text    HOME
  Page Should Contain Text    REGISTER
  Page Should Contain Text    PROFILE
  Page Should Contain Text    Automated Testing Robot Framework
  Page Should Contain Text    DEV-HII
Test Page Register should Contain text
  Click Element  xpath=//android.widget.TextView[@text='REGISTER']
  Wait Until Page Contains Element    xpath=//android.widget.TextView[@text='New Member Registration']
  Page Should Contain Text  New Member Registration
Test Full Name Invalid
  Wait Until Page Contains Element    xpath=//android.widget.TextView[@text='New Member Registration']
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='5']        ${EmailAddress}
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='7']        ${PhoneNumber}
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='9']        ${CompanyName}
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='11']       ${JobPositionName}
  Page Should Contain Text  SUBMIT
  Click Element  xpath=//android.widget.TextView[@text='SUBMIT']
  Wait Until Page Contains Element     id=android:id/alertTitle
  Page Should Contain Text  Error
  Page Should Contain Text  กรุณากรอกข้อมูลทั้งหมดให้ครบถ้วน
  Page Should Contain Text  OK
  Click Element  xpath=//android.widget.Button[@text='OK']
Test EmailAddress Invalid
  Wait Until Page Contains Element    xpath=//android.widget.TextView[@text='New Member Registration']
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='3']        ${FullName}
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='7']        ${PhoneNumber}
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='9']        ${CompanyName}
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='11']       ${JobPositionName}
  Page Should Contain Text  SUBMIT
  Click Element  xpath=//android.widget.TextView[@text='SUBMIT']
  Wait Until Page Contains Element     id=android:id/alertTitle
  Page Should Contain Text  Error
  Page Should Contain Text  กรุณากรอกข้อมูลทั้งหมดให้ครบถ้วน
  Page Should Contain Text  OK
  Click Element  xpath=//android.widget.Button[@text='OK']
Test PhoneNumber Invalid
  Wait Until Page Contains Element    xpath=//android.widget.TextView[@text='New Member Registration']
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='3']        ${FullName}
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='5']        ${EmailAddress}
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='9']        ${CompanyName}
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='11']       ${JobPositionName}
  Page Should Contain Text  SUBMIT
  Click Element  xpath=//android.widget.TextView[@text='SUBMIT']
  Wait Until Page Contains Element     id=android:id/alertTitle
  Page Should Contain Text  Error
  Page Should Contain Text  กรุณากรอกข้อมูลทั้งหมดให้ครบถ้วน
  Page Should Contain Text  OK
  Click Element  xpath=//android.widget.Button[@text='OK']
Test CompanyName Invalid
  Wait Until Page Contains Element    xpath=//android.widget.TextView[@text='New Member Registration']
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='3']        ${FullName}
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='5']        ${EmailAddress}
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='7']        ${PhoneNumber}
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='11']       ${JobPositionName}
  Page Should Contain Text  SUBMIT
  Click Element  xpath=//android.widget.TextView[@text='SUBMIT']
  Wait Until Page Contains Element     id=android:id/alertTitle
  Page Should Contain Text  Error
  Page Should Contain Text  กรุณากรอกข้อมูลทั้งหมดให้ครบถ้วน
  Page Should Contain Text  OK
  Click Element  xpath=//android.widget.Button[@text='OK']
Test JobPositionName Invalid
  Wait Until Page Contains Element    xpath=//android.widget.TextView[@text='New Member Registration']
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='3']        ${FullName}
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='5']        ${EmailAddress}
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='7']        ${PhoneNumber}
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='9']        ${CompanyName}
  Page Should Contain Text  SUBMIT
  Click Element  xpath=//android.widget.TextView[@text='SUBMIT']
  Wait Until Page Contains Element     id=android:id/alertTitle
  Page Should Contain Text  Error
  Page Should Contain Text  กรุณากรอกข้อมูลทั้งหมดให้ครบถ้วน
  Page Should Contain Text  OK
  Click Element  xpath=//android.widget.Button[@text='OK']
Test Specified All Data
  Wait Until Page Contains Element    xpath=//android.widget.TextView[@text='New Member Registration']
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='3']        ${FullName}
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='5']        ${EmailAddress}
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='7']        ${PhoneNumber}
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='9']        ${CompanyName}
  Input Text  xpath=//*[@class='android.widget.EditText' and @index='11']       ${JobPositionName}
  Page Should Contain Text  SUBMIT
  Click Element  xpath=//android.widget.TextView[@text='SUBMIT']
  Wait Until Page Contains Element     id=android:id/alertTitle
  Page Should Contain Text  Successful
  Page Should Contain Text  บันทึกข้อมูลสำเร็จ
  Page Should Contain Text  OK
  Click Element  xpath=//android.widget.Button[@text='OK']
Test Open Profile Screen Not Profile Should Be Show Text 'Not Profile'
  Click Element  xpath=//android.widget.TextView[@text='PROFILE']
  Wait Until Page Contains Element    xpath=//android.widget.TextView[@text='Not Profile']
  Page Should Contain Text  Not Profile
Test Open Profile Screen have Profile Should Be Detail
  Click Element  xpath=//android.widget.TextView[@text='PROFILE']
  Wait Until Page Contains Element    xpath=//android.widget.TextView[@text='Member']
  Page Should Contain Text  Auttachai Kanthanras
  Page Should Contain Text  auttachai@hii.or.th
  Page Should Contain Text  0931369196
  Page Should Contain Text  Hydro - Informatics Institute
  Page Should Contain Text  Programmer
Test Delete Profile From Storage
  Wait Until Page Contains Element    xpath=//android.widget.TextView[@text='DELECT PROFILE']
  Click Element  xpath=//android.widget.TextView[@text='DELECT PROFILE']
  Wait Until Page Contains Element    xpath=//android.widget.TextView[@text='Not Profile']
  Page Should Contain Text  Not Profile
```
test-case.robot
```bash
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
```
- run
```bash
cd __tests__/Uat/
robot -v DEVICE:android test-case.robot
```