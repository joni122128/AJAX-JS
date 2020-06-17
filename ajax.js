document.querySelector('#b-get').addEventListener('click', function(){
	getData();
})
 
function getData(){
	let url = `https://jsonplaceholder.typicode.com/users`;
	const api = new XMLHttpRequest();
	api.open('GET', url, true);
    api.send();
	api.onreadystatechange = function(){
		if(this.status == 200 && this.readyState == 4){
			let data = JSON.parse(this.responseText);
			
			let resultado = document.querySelector('#tb');
			resultado.innerHTML = '';
			for (item of data){
				resultado.innerHTML += `
				                         <td>${item.id}</td>
				                         <td>${item.name}</td>
				                         <td>${item.username}</td>
				                         <td>${item.email}</td>
				                         <td>${item.address.city}</td>
				                          `
			}
		}
	}

}