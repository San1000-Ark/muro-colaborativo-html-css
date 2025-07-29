const $time = document.querySelector('.time'),
$date = document.querySelector('.date');

function digitalClock(){
    let fecha = new Date(), day = fecha.getDate(), month = fecha.getMonth() + 1, year = fecha.getFullYear(), diaSemana = fecha.getDay();
    

    let timeString = fecha.toLocaleTimeString();
    $time.innerHTML = timeString;

    $date.innerHTML = `${day}-${month}-${year}`;
}

setInterval(() => {
    digitalClock()
}, 1000);

const job32=document.getElementById('Job32');
const btn=document.getElementById('btn');

btn.addEventListener('click',function(){
    Swal.fire({
  title: "Do you want to save the changes?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    Swal.fire("Saved!", "", "success");
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
});
})

