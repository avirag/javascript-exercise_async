getCustomer(1)
  .then(customer => {
    console.log("Customer: ", customer);
    if (customer.isGold) {
      return getTopMovies().then(movies => {
        console.log("Top movies: ", movies);
        return sendEmail(customer.email, movies);
      });
    }
    reject();
  })
  .then(() => console.log("Email sent..."));

function getCustomer(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        id: 1,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email"
      });
    }, 2000);
  });
}

function getTopMovies() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(["movie1", "movie2"]);
    }, 2000);
  });
}

function sendEmail(email, movies) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, 2000);
  });
}
