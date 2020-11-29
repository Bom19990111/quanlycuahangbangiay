  $(document).ready(function() {
      $(".add-row").click(function() {
          var name = $("#name").val();
          var email = $("#email").val();
          var address = $("#address").val();
          var phone = $("#phone").val();
          var markup = "<tr><td>" + name + "</td><td>" + email + "</td><td>" + address + "</td><td>" + phone + "</td></tr>";
          $("table tbody").append(markup);
          $("#name").val("");
          $("#email").val("");
          $("#address").val("");
          $("#phone").val("");
      });
  });
  /* TÌM KIẾM */
  function myFunction() {
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("table");
      tr = table.getElementsByTagName("tr");
      for (i = 1; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
              } else {
                  tr[i].style.display = "none";
              }
          }
      }
  }
  /* SẮP XẾP */
  function sortTable() {
      var table, rows, switching, i, x, y, shouldSwitch;
      table = document.getElementById("table");
      switching = true;
      while (switching) {
          switching = false;
          rows = table.rows;
          for (i = 1; i < (rows.length - 1); i++) {
              shouldSwitch = false;
              x = rows[i].getElementsByTagName("TD")[0];
              y = rows[i + 1].getElementsByTagName("TD")[0];
              if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                  shouldSwitch = true;
                  break;
              }
          }
          if (shouldSwitch) {
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              switching = true;
          }
      }
  }