const names = require('./data/names.js');
const lnames = require('./data/last-names.js');
const cities = require('./data/cities.js');
const objects = require('./data/objects.js');
const jobs = require('./data/jobs.js');


//example options
options = {
	length : 15,
	style: 'LOW',
	lang: 'EN',
	type: 'age', //TYPES last_name,city,objectos,cargos,colores,edades
 	gen: 'M'
}


module.exports = {
	ramdomdata: function (options) {
		switch (options.type) {
		  case 'names' : 
		 		return rnames(options.gen, options.length, options.style)
		 	break;
		 	case 'last_names' : 
		 		return rlnames(options.length, options.style)
		 	break;
		 	case 'cities' : 
		 		return rcities(options.length, options.style)
		 	break;
		 	case 'objects' : 
		 		return robjects(options.lang, options.length, options.style)
		 	break;
		 	case 'jobs' : 
		 		return rjobs(options.lang, options.length, options.style)
		 	break;
		 	case 'colors' : 
		 		return rcolors()
		 	break;
		 	case 'age' : 
		 		return rage()
		 	break;
		  default:
		    break;
		}
	}
}


rnames = function (gender = 'M',length = 15,style = 'UPP') {
	var n = names.names[gender]

	var name = ''
	var eng = true

	while ( eng ) {
		name = ''
		var num = Math.floor(Math.random() * n.length + 1) -1
		name = n[num]

		name.trim()

		if (name.length > 0 && name.length <= length) {
			eng = false
		}
	}

	name = convert_style(style,name)

	return name
}

rlnames = function (length = 15,style = 'UPP') {
	var n = lnames.lnames

	var lname = ''
	var eng = true

	while ( eng ) {
		lname = ''
		var num = Math.floor(Math.random() * n.length + 1) -1
		lname = n[num]

		lname.trim()

		if (lname.length > 0 && lname.length <= length) {
			eng = false
		}
	}

	lname = convert_style(style,lname)

	return lname
}

rcities = function (length = 15,style = 'UPP') {
	var n = cities.cities


	var city = ''
	var eng = true

	while ( eng ) {
		city = ''
		var num = Math.floor(Math.random() * n.length + 1) -1
		city = n[num]

		city.trim()

		if (city.length > 0 && city.length <= length) {
			eng = false
		}
	}

	city = convert_style(style,city)

	return city
}

robjects = function (lang = 'ES',length = 15,style = 'UPP') {
	var n = objects.objects[lang]


	var object = ''
	var eng = true

	while ( eng ) {
		object = ''
		var num = Math.floor(Math.random() * n.length + 1) -1
		object = n[num]

		object.trim()

		if (object.length > 0 && object.length <= length) {
			eng = false
		}
	}

	object = convert_style(style,object)

	return object
}

rjobs = function (lang = 'ES',length = 15,style = 'UPP') {
	var n = jobs.jobs[lang]


	var job = ''
	var eng = true

	while ( eng ) {
		job = ''
		var num = Math.floor(Math.random() * n.length + 1) -1
		job = n[num]

		job.trim()

		if (job.length > 0 && job.length <= length) {
			eng = false
		}
	}

	job = convert_style(style,job)

	return job
}

rcolors = function () {
	hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F") 
	color = "#"; 
	for (i=0;i<6;i++){ 
    posi = Math.floor(Math.random() * hexadecimal.length + 1) - 1
    color += hexadecimal[posi] 
	}
	return color
}

rage = function () {
  age = Math.floor(Math.random() * 90)
	return age
}

convert_style = function (style,data) {
	switch (style) {
	  case 'UPP' : 
	 		return data.toUpperCase()
	  case 'LOW':
	  	return data.toLowerCase()
	  default:
	    break;
	}
}