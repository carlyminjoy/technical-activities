const data = {
  name: "Megaport",
  address: {
    office: {
      unit: "Level 3",
      street: "825 Ann Street",
      suburb: "Fortitude Valley",
      city: "Brisbane",
      state: "Queensland",
      postcode: 4006,
    },
  },
  industry: {
    type: "Internet and telecommunications",
    asxListed: true,
  },
};

const getPropertyValue = (path, obj) => {
  const pathProperties = path.split("/");
  let currentObj = obj;

  for (let i = 0; i < pathProperties.length; i++) {
    if (i == pathProperties.length - 1) {
      return currentObj[pathProperties[i]];
    } else {
      currentObj = currentObj[pathProperties[i]];
    }
  }
};

getPropertyValue("address/office/suburb", data); // returns "Fortitude Valley"
getPropertyValue("industry/asxListed", data); // returns true
