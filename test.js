function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      let myHeading = 'Mozilla is cool, ' + myName;
      alert(myHeading);
    }
  }