import React, { Component } from "react";
import LayoutDashboard from "@/components/layout/layoutDashboard";
import ActiveChargingPreview from "@/components/previewComponents/activeChargingPreview";
import billingPreview from "@/components/previewComponents/billingPreview";
import userManagementPreview from "@/components/previewComponents/userManagementPreview";
import vehicleManagementPreview from "@/components/previewComponents/vehicleManagementPreview";

class dashboard extends Component {
  render() {
    return (
      <>
        <LayoutDashboard pageName={"Dashboard"} />
        {/* <ActiveChargingPreview />
        <billingPreview />
        <userManagementPreview />
        <vehicleManagementPreview /> */}
        {/* Costing Breakdown */}
        {/* Vehicle Management */}
        {/* User Management Preview */}
      </>
    );
  }
}

export default dashboard;
