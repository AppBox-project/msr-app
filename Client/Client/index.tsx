import {
  FaBorderNone,
  FaBuilding,
  FaDashcube,
  FaFileContract,
  FaPeopleCarry,
  FaTable,
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
          subItems: [
            {
              key: "contacts",
              label: "Contacts",
              component: Objects,
              icon: FaUserTie,
            },
          ],
        },
        {
          key: "labour-agreements",
          label: "Agreements",
          component: Objects,
          icon: FaTable,
          group: "Customers",
          subItems: [
            {
              key: "labour-agreement-versions",
              label: "Versions",
              component: Objects,
              icon: FaBorderNone,
            },
          ],
        },
        {
          key: "placements",
          label: "Placements",
          component: Objects,
          icon: FaFileContract,
          group: "Placements",
        },
      ]);
    });
  };
}
