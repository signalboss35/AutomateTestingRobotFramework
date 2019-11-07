*** Settings ***
*** Settings ***
Library           AppiumLibrary

*** Variables ***
${REMOTE_URL}   		http://localhost:4723/wd/hub
${deviceName}    		AHK7N17110007541
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