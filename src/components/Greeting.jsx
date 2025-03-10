function Greeting() {
    function greetUser(name) {
      alert("Hello, " + name + "!");
    }
  
    return (
      <button onClick={function () { greetUser("Alice"); }}>
        Greet
      </button>
    );
  }
  
  export default Greeting;
 