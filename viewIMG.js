let imgs =document.querySelector("#cards > img");

console.log(imgs);

function viewIMGS (){
    imgs.style.position = "absolute";

}

function submit(name){
    const n = name.value;

    Swal.fire({
        title: "Send successful!",
        text: `Please Wait for our Response will be send to  ${n}`,
        icon: "success"
      });
}
