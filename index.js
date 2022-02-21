const webhooker = require("./webhooker.js")
webhooker.init()
webhooker.addslug("hooky", (req) => {
  console.log("Recieved post body successfully outside of module:")
  console.log(req);
})
webhooker.addslug("apples", (req) => {
  console.log("Recieved post body successfully outside of module:")
  console.log(req);
});

