class User{
  constructor(username, email, password) {
    (this.username = username), (this.email = email);
    this.password = password;
  }

  get password() {
    return `${this._password}`;
  }
  set password(value) {
    this._password = value;
  }
};

const aa = new User("Aman", "aman@gmail.com", "Aaman@7397");
console.log(aa.password);
