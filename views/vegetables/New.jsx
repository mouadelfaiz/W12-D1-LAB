const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <article>
          <h1>Add a new vegetables</h1>
          <form action="/vegetables" method="POST">
            Name: <input type="text" name="name" id="" />
            Color: <input type="text" name="color" />
            Is it ready to eat:{" "}
            <input
              type="checkbox"
              id="switch"
              name="readyToEat"
              role="switch"
            />
            <br />
            <input type="submit" name="" value="Create vegetables" />
          </form>
        </article>
      </div>
    );
  }
}

module.exports = New;
