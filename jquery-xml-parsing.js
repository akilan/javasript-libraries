var value="<?xml version='1.0' encoding='UTF-8'?><Auditrandom_array><random><dump_name>All products</dump_name></random></Auditrandom_array>"; //Sample xml, you can use get file path also
    
	var xmltojson=$.parseXML(value); // converting string to xml
    
	$xmltojson=$(xmltojson)
    
	$dump_name=$xmltojson.find("dump_name").text(); // getting the xml