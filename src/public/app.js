$(function () {

  const URI = '/api/products';

  // GET PRODUCTS
  $('#getProducts').on('click', () => {
    $.ajax({
      url: URI,
      success: function (products) {
        let tbody = $('tbody');
        tbody.html('');
        products.forEach(product => {
          tbody.append(`
              <tr>
                <td class="id">${product.id}</td>
                <td>
                  <input placeholder="Employee_Name" type="text" class="name" value="${product.name}"/>
                </td>
                 <td>
                  <input placeholder="Skills" type="text" class="name1" value="${product.name1}"/>
                  </td>
                 <td>
                 <input placeholder="emp_id" type="text" class="emp" value="${product.emp}"/>
                 </td>
                <td>
                  <button class="update-button">UPDATE</button>
                  <button class="delete-button">DELETE</button>
                </td>
              </tr>
          `)
        })
      }
    });
  });

  // POST PRODUCTS
  $('#productForm').on('submit', (e) => {
    e.preventDefault();
    let newProduct = $('#newProduct');
    let name1=$('#name');
    let emp=$('#empno');
    console.log(emp);    
    $.ajax({
      url: URI,
      method: 'POST',
      data: {
        name: newProduct.val(),
        name1: name1.val(),
        emp: emp.val(),        
      },
      success: function(response) {
       newProduct.val('');
       name1.val('');
       emp.val('');       
       $('#getProducts').click();
      },
      error: function (err) {
        console.log(err);
      }
    });
  });
  
  $('table').on('click', '.update-button', function() {
    let row = $(this).closest('tr');
    let id = row.find('.id').text();
    let name = row.find('.name').val();
    let name1= row.find('.name1').val();
    let emp=  row.find('.emp').val();

    $.ajax({
      url: `${URI}/${id}`,
      method: 'PUT',

      data: {
        name: name,
        name1 : name1,
        emp : emp, 
      },
      success: function(response) {
        console.log(response);
        $('#getProducts').click();
      }
    });
  });

  $('table').on('click', '.delete-button', function() {
    let row = $(this).closest('tr');
    let id = row.find('.id').text();

    $.ajax({
      url: `${URI}/${id}`,
      method: 'DELETE',
      success: function (response) {
       $('#getProducts').click();
      }
    });
  });

});
