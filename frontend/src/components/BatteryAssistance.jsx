import ServiceRepairPage from "./ServiceRepairPage";

const issueTypes = [
  "Battery dead",
  "Jump-start needed",
  "Loose terminal",
  "Weak battery",
  "Charging issue",
  "Lights not working",
];

const mechanics = [
  {
    name: "Power Start Assist",
    area: "1.1 km away",
    specialty: "Jump-starts, weak battery checks, and terminal fixes",
    time: "14 min",
    rating: "4.8",
  },
  {
    name: "Battery Mitra Point",
    area: "2.3 km away",
    specialty: "Battery testing, charging issues, and roadside support",
    time: "24 min",
    rating: "4.7",
  },
  {
    name: "Quick Charge Auto",
    area: "3.1 km away",
    specialty: "Dead battery, lights issue, and basic electrical checks",
    time: "29 min",
    rating: "4.6",
  },
];

function BatteryAssistance() {
  return (
    <ServiceRepairPage
      title="Battery Assistance"
      vehicleLabel="Vehicle model"
      vehiclePlaceholder="Example: Activa, Swift, Bullet"
      heroTitle="Find nearby battery assistance."
      heroDescription="Share your location and battery issue to review mechanic options for quick electrical help."
      locationDescription="Enter where your vehicle is stopped and the battery problem. The page will show nearby assistance options in the current MechMitra frontend tone."
      issuePlaceholder="Tell the mechanic what battery problem you are facing"
      selectPlaceholder="Select battery issue"
      issueTypes={issueTypes}
      mechanics={mechanics}
    />
  );
}

export default BatteryAssistance;
