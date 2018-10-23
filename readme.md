

Installation:

Using npm: - in order to install:

$  npm install

and

$npm i api_restfull_task_yuna_example



Discerption:
1. Created microservice  -support CRD capabilities
2. Can run on localhost port - 3003(or can be configured )
3. Saving logs with Winston to local file for users
4. Or can run the server with heroku :

Var config to user api calls with postman are:
CLEARDB_DATABASE_URL: mysql://bd9924fc0b3651:52026a30@us-cdbr-iron-east-01.cleardb.net/heroku_1982f1217375ac8?reconnect=true

Or set in the postman URL:
https://pure-sands-60497.herokuapp.com/


Support apis:
1. Get - all logs that save  user: GET request ‘/logs’
2. Get log by id :  GET request ‘/logs/logId’
3. Update  log table with new log : POST request ‘/logs’ with the following details:
Set in body:
 {

 	"message": “enter a log“,
   	 "errorCode": int,
       	"createTime": “DATETIME” - for example : "createTime": “2018-08-09”
    }

4. Delete log - DELETE request - ‘/logs/logId’
5. In order to insert log or create new user use: in headers authorezetion:"admin" and password:"admin"
6. To run test can run script : npm run mocha


App in heroku :
https://pure-sands-60497.herokuapp.com/

5. Can track all events in sumo logic too :
https://addons-sso.heroku.com/apps/7ab560da-f44e-43c0-88fc-6241099ecfed/addons/9eb6ecf2-67a6-478f-a406-c2e4dab5034a

Search in live tail:
_sourceCategory= heroku




# apiREST-part2
