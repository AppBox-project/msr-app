import React from "react";
import { AppContextType } from "../../Utils/Types";

const objectSettingsMap = {
  temps: {
    modelId: "people",
    props: {
      disableLists: true,
      applyList: "employees",
      alternativeTitle: { single: "Temp", plural: "Temps" },
      overviewId: "temps",
      detailId: "temp",
    },
  },
  customers: {
    modelId: "companies",
    props: {
      disableLists: true,
      applyList: "customers",
      alternativeTitle: { single: "Customer", plural: "Customers" },
    },
  },
  contacts: {
    modelId: "people",
    props: {
      disableLists: true,
      applyList: "customers",
      alternativeTitle: { single: "Contact", plural: "Contacts" },
    },
  },
  placements: { modelId: "msr-placements", applyList: "active" },
};

const AppActionObject: React.FC<{ action; context: AppContextType }> = ({
  action,
  context,
}) => {
  // Vars
  const objectSettings = objectSettingsMap[action];

  // UI
  return (
    <context.UI.Object.Overview
      context={context}
      modelId={objectSettings.modelId}
      baseUrl={`/msr/${action}`}
      style={{ paddingBottom: 50 }}
      {...(objectSettings.props || {})}
    />
  );
};

export default AppActionObject;
