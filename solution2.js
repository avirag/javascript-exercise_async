notifyCustomer();

async function notifyCustomer() {
  const customer = await getCustomer(1);
  console.log("Customer: ", customer);

  if (customer.isGold) {
    const movies = await getTopMovies();
    console.log("Top movies: ", movies);

    await sendEmail(customer.email, movies);
    console.log("Email sent...");
  }
}

async function getCustomer(id) {
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

async function getTopMovies() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(["movie1", "movie2"]);
    }, 2000);
  });
}

async function sendEmail(email, movies) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, 2000);
  });
}
