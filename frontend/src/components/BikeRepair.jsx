import ServiceRepairPage from "./ServiceRepairPage";

const issueTypes = [
  "Bike not starting",
  "Flat tyre",
  "Brake issue",
  "Chain problem",
  "Battery issue",
  "Engine noise",
];

const mechanics = [
  {
    name: "Raj Auto Care",
    area: "1.2 km away",
    specialty: "Bike starting, brake, and chain repair",
    time: "15 min",
    rating: "4.8",
  },
  {
    name: "Quick Two Wheeler Service",
    area: "2.1 km away",
    specialty: "Flat tyre, battery, and roadside checks",
    time: "22 min",
    rating: "4.7",
  },
  {
    name: "Mitra Bike Garage",
    area: "3.4 km away",
    specialty: "Engine noise, clutch, and general repair",
    time: "30 min",
    rating: "4.6",
  },
];

function BikeRepair() {
  return (
    <ServiceRepairPage
      title="Bike Repair"
      vehicleLabel="Bike model"
      vehiclePlaceholder="Example: Splendor, Activa"
      heroTitle="Find a nearby mechanic for your bike."
      heroDescription="Share your location and bike issue to review nearby mechanic options for roadside help."
      locationDescription="Enter where your bike is stopped and the repair issue. The page will show mechanic choices styled for the current MechMitra flow."
      issuePlaceholder="Tell the mechanic what happened"
      selectPlaceholder="Select bike issue"
      issueTypes={issueTypes}
      mechanics={mechanics}
    />
  );
}

export default BikeRepair;
