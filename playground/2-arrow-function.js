// all function paradigram deos find exact position to its available
const _event = {
  name: "Brithday Party",
  guestList: ["Andrew", "Jen", "Mike"],
  printGuestList() {
    console.log(`Guest List for ${this.name}`);

    this.guestList.forEach((guest) => {
      console.log(`${guest} is attending ${this.name}`);
    });
  },
};

_event.printGuestList();
