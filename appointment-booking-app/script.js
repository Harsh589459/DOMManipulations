function saveBooking() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    var booking = {
      name: name,
      email: email,
      phone: phone
    };

    var bookings = localStorage.getItem("bookings");
    if (bookings) {
      bookings = JSON.parse(bookings);
    } else {
      bookings = [];
    }

    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    displayBookings();
  }

  function deleteBooking(index) {
    var bookings = localStorage.getItem("bookings");
    if (bookings) {
      bookings = JSON.parse(bookings);

      bookings.splice(index, 1);
      localStorage.setItem("bookings", JSON.stringify(bookings));

      displayBookings();
    }
  }

  function editBooking(index) {
    var bookings = localStorage.getItem("bookings");
    if (bookings) {
      bookings = JSON.parse(bookings);

      var booking = bookings[index];
      document.getElementById("name").value = booking.name;
      document.getElementById("email").value = booking.email;
      document.getElementById("phone").value = booking.phone;

      deleteBooking(index);
    }
  }

  function displayBookings() {
    var bookings = localStorage.getItem("bookings");
    if (bookings) {
      bookings = JSON.parse(bookings);

      var bookingsList = document.getElementById("bookings-list");
      bookingsList.innerHTML = "";

      for (var i = 0; i < bookings.length; i++) {
        var booking = bookings[i];
        var listItem = document.createElement("li");
        listItem.textContent =
          booking.name + " | " + booking.email + " | " + booking.phone;

        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.setAttribute("data-index", i);
        editButton.addEventListener("click", function () {
          var index = parseInt(this.getAttribute("data-index"));
          editBooking(index);
        });

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("data-index", i);
        deleteButton.addEventListener("click", function () {
          var index = parseInt(this.getAttribute("data-index"));
          deleteBooking(index);
        });

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        bookingsList.appendChild(listItem);
      }
    }
  }