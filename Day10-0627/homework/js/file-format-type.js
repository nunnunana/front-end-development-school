//1. 추가 버튼을 찾는다.
var addButton = document.getElementById("add_itme");
console.log(add_itme)
//2. 추가 버튼을 클릭하면 함수가 실행된다.
addButton.onclick = function(){
	//2-1. uploader를 찾는다.
	var uploader = document.getElementsByTagName("input")[0];
	
	//2-2. uploader에 입력된 파일의 name값을 찾는다.
	if ( uploader.value === "" ) {
		alert("선택된 파일이 없습니다.")
	} else {
		console.log("업로드된 파일 :" + uploadedFile);
		var uploadedFile = uploader.files[0].name;
		addNewItem(uploadedFile);
		//4. 입력된 files[0]을 초기화한다.
		uploader.value = "";
	}
	
}

//3. 화면에 새로운 아이템을 추가하는 함수
function addNewItem(fileName) {
	//3-1. 리스트를 찾는다.
	var list = document.getElementsByTagName('ul')[0];

	//3-2. 새로운 아이템을 정의한다.
	var	newItem = document.createElement("li");
	newItem.className = "file-item";
	newItem.innerHTML = "<a href="+ fileName.split(' ') +">"+ fileName +"</a>";

	//3-3. 마지막 리스트 뒤에 추가한다.
	list.appendChild(newItem);
}