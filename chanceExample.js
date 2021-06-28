 getDataUserRegister() {
    var dataUserRegister = {
      name: chance.first(),
      lastname: chance.last(),
      email: chance.email({ domain: "gmail.com" }),
      phone: chance.phone(),
      address: chance.address(),
      city: chance.city(),
      postcode: chance.postcode(),
      password: chance.string(),
    };
    return dataUserRegister;
  }