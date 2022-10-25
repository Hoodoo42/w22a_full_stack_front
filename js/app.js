let candy_bag = document.getElementById("candy_bag");

axios
  .request({
    url: `http://127.0.0.1:5000/api/candy`,
  })
  .then((res) => {
    
    for (i = 0; i < res[`data`].length; i++) {
      
      candy_bag.insertAdjacentHTML(
      
        `beforeend`,

        `<article id="candy">
        <h3>${res[`data`][i][1]}</h3>
        <img id="candy_img" src="${res[`data`][i][2]}" alt="">
        <h4>${res[`data`][i][3]}</h4>
      </article>`
      );
     
    }

      let candy = document.getElementById("candy_img");
      candy[`height`] = `250`
      candy[`width`] = `250`
      
    
  })
  .catch((err) => {
    document.body.insertAdjacentHTML(`afterbegin`, `<h3>Error!</h3>`);
  });

function add_candy(){
  axios.request({
    url: 'http://127.0.0.1:5000/api/candy',
    method: 'POST',

    data:{
      "name": document.getElementById('name').value,
      "img_url": document.getElementById('img').value,
      "description": document.getElementById('description').value
    }


  }).then((res)=>{
    document.body.insertAdjacentHTML(`afterbegin`, `<h3>Candy Added!</h3>`);
  }).catch((err)=>{
    document.body.insertAdjacentHTML(`afterbegin`, `<h3>Error!</h3>`);
  })
}
 let submit_candy = document.getElementById('submit_add_candy');
 submit_candy.addEventListener('click', add_candy)