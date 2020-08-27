function AppEdit() {
      return (
        <>
          <ul>
            <li>
              <a href="">To Do</a>
            </li>
            <li>
              <a href="">Calendar</a>
            </li>
            <li>
              <a href="">Notes</a>
            </li>
          </ul>
          <img src={logo} className="App-avatar-logo" alt="Avatar-logo" />
          <h2>Nisha</h2>
          <h1>Edit</h1>
          <div className="Todo-edit">
            <form>
              <input placeholder="Title"></input>
              <input placeholder="Description"></input>
              <input placeholder="Add image"></input>
              <button type="submit">Save</button>
            </form>
          </div>
        </>
      );
    }