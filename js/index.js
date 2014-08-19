$(document).ready(function() {

	// compile our template
	var template = JST['index'];
	Handlebars.registerPartial('email', JST['components/email']);
	Handlebars.registerPartial('person', JST['components/person']);


	var data = {
		people: [{
			title: "Alan",
			body: "Johnson",
			phone: "1234567890",
			email: "alan@test.com",
			member_since: "Mar 25, 2011"
		}, {
			title: "Allison",
			body: "House",
			phone: "0987654321",
			email: "allison@test.com",
			member_since: "Jan 13, 2011"
		}, {
			title: "Nick",
			body: "Pettit",
			phone: "9836592272",
			email: "nick@test.com",
			member_since: "Apr 9, 2009"
		}, {
			title: "Jim",
			body: "Hoskins",
			phone: "7284927150",
			email: "jim@test.com",
			member_since: "May 21, 2010"
		}, {
			title: "Ryan",
			body: "Carson",
			phone: "8263729224",
			email: "ryan@test.com",
			member_since: "Nov 1, 2008"
		}]
	};

	$('#list').html(template(data));
});