// 测试mongo 是否可以插入数据

var userName = "Mario123"
var timeStamp = Date.parse(new Date());
var jsonDatabase = {"loginName": userName, "loginTime": timeStamp}
var db = connect("log")
db.login.insert(jsonDatabase)


print('[demo]: log print success');