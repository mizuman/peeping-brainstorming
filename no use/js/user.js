var APP_ID = "ILyDldxKF1oXjxZhg8I6POjBRu5OcFSdEs9ZmwTi";
var JS_KEY = "GACsIhgo1E9wBZDVzpVpU94hvRAuukYLO96OpIXS";

var test_login;

var errorNotice = function(message){
	var item = '<div class="alert alert-warning fade in"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">x</button>' + message + '</div>';
	$("#notice").html(item);
};

$(document).ready(function(){
	Parse.initialize(APP_ID, JS_KEY);

	var userSignup = function(){
		var signup_user = new Parse.User();

		signup_user.set("username", $("#username").val());
		signup_user.set("password", $("#password").val());

		signup_user.signUp(null, {
			success: function(result_user){
				// changeView('service');
				document.location = "./brainstorming.html";
			},
			error: function(result_user, error){
				alert("error" + error.message);
			}
		});
	};

	var userLogin = function(){
		var username = $("#username").val();
		var password = $("#password").val();

		Parse.User.logIn(username,password,{
			success: function(result_user) {
				document.location = "./brainstorming.html";
			},
			error: function(result_user, error) {
				errorNotice(error.message);
			}
		});
	};

	test_login = function(){
		var username = "test";
		var password = "test";

		Parse.User.logIn(username,password,{
			success: function(result_user) {
				document.location = "./brainstorming.html";
			},
			error: function(result_user, error) {
				errorNotice(error.message);
			}
		});
	};

	var userLogout = function(){
		Parse.User.logOut();
		document.location = "./index.html";
	};

	$("#signup").on("click", function(){
		userSignup();
	});

	$("#login").on("click", function(){
		userLogin();
	});

	$("#logout").on("click", function(){
		userLogout();
	});	
})
