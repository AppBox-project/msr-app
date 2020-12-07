import { Grid } from "@material-ui/core";
import React from "react";
import { AppContextType } from "../../../Utils/Types";

const MsrOverview: React.FC<{ context: AppContextType }> = ({ context }) => {
  return (
    <context.UI.Animations.AnimationContainer>
      <Grid container>
        <Grid item xs={12} md={9}>
          <context.UI.Animations.AnimationItem>
            <context.UI.Design.Card withBigMargin title="Overview">
              Overview comes here
            </context.UI.Design.Card>
          </context.UI.Animations.AnimationItem>
        </Grid>
        <Grid item xs={12} md={3}>
          <context.UI.Animations.AnimationItem>
            <context.UI.Design.Card title="Stats" withBigMargin>
              Test
            </context.UI.Design.Card>
          </context.UI.Animations.AnimationItem>
        </Grid>
      </Grid>
    </context.UI.Animations.AnimationContainer>
  );
};

export default MsrOverview;
