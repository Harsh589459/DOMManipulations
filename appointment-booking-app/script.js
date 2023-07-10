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

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("data-index", i);
        deleteButton.addEventListener("click", function () {
          var index = parseInt(this.getAttribute("data-index"));
          deleteBooking(index);
        });

        listItem.appendChild(deleteButton);
        bookingsList.appendChild(listItem);
      }
    }
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