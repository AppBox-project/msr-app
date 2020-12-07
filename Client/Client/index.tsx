import FourOhFour from "../../Components/FourOhFour";
import {
  FaBuilding,
  FaDashcube,
  FaPeopleCarry,
  FaUserTie,
} from "react-icons/fa";
import Objects from "./Objects";
import MsrOverview from "./Overview";

export default class App {
  context: any;

  constructor(context) {
    this.context = context;
  }

  appConfig = {
    actions: {
      filter: true,
      group: true,
      mobile: { displayAs: "bottom-navigation" },
    },
  };

  getActions = () => {
    return new Promise((resolve) => {
      resolve([
        {
          key: "overview",
          label: "Overview",
          component: MsrOverview,
          icon: FaDashcube,
        },
        {
          key: "temps",
          label: "Temps",
          component: Objects,
          icon: FaPeopleCarry,
          group: "People",
        },
        {
          key: "customers",
          label: "Customers",
          component: Objects,
          icon: FaBuilding,
          group: "Customers",
        },
        {
          key: "contacts",
          label: "Contacts",
          component: Objects,
          icon: FaUserTie,
          group: "Customers",
        },
        {
          key: "placements",
          label: "Placements",
          component: Objects,
          icon: FaUserTie,
          group: "Placements",
        },
      ]);
    });
  };
}
