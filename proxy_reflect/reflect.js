let user = {
    name: "John",
  };
  
  user = new Proxy(user, {
    get(target, prop, receiver) {
      alert(`GET ${prop}`);
      return Reflect.get(target, prop, receiver); // (1)
    },
    set(target, prop, val, receiver) {
      alert(`SET ${prop}=${val}`);
      return Reflect.set(target, prop, val, receiver); // (2)
    }
  });
  
  let name = user.name; // shows "GET name"
  user.name = "Pete"; // shows "SET name=Pete"