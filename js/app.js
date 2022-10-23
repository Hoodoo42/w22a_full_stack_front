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
      candy[`height`] = `250`;
      candy[`width`] = `250`;
   
  })
  .catch((err) => {
    document.body.insertAdjacentHTML(`afterbegin`, `<h3>Error!</h3>`);
  });
