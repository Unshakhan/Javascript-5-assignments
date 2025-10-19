function deleteRow(button) {
    // button -> jis button pe click hua
    // parentElement.parentElement = uska row <tr>
    var row = button.parentElement.parentElement;
    row.remove(); // puri row delete
  }
//  _____________________ Q4
 function changeImage() {
    document.getElementById("myImage").src = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80";
  }

  function resetImage() {
    document.getElementById("myImage").src = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80";
  }
//  _____________________ Q5
  var counter = 0;

    function increaseCounter() {
      counter = counter + 1;  // counter++
      document.getElementById("counterValue").innerText = counter;
    }

    function decreaseCounter() {
      counter = counter - 1;  // counter--
      document.getElementById("counterValue").innerText = counter;
    }
