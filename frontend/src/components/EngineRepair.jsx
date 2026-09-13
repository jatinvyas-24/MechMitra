import ServiceRepairPage from "./ServiceRepairPage";

const issueTypes = [
  "Engine not starting",
  "Engine overheating",
  "Unusual noise",
  "Smoke from engine",
  "Power loss",
  "Oil leak",
];

const mechanics = [
  {
    name: "Prime Engine Care",
    area: "1.7 km away",
    specialty: "Engine start problems, overheating, and smoke checks",
    time: "21 min",
    rating: "4.8",
  },
  {
    name: "Road Engine Works",
    area: "2.9 km away",
    specialty: "Noise diagnosis, oil leaks, and power loss support",
    time: "28 min",
    rating: "4.7",
  },
  {
    name: "Mitra Engine Garage",
    area: "4.0 km away",
    specialty: "General engine repair, overheating, and roadside checks",
    time: "35 min",
    rating: "4.6",
  },
];

function EngineRepair() {
  return (
    <ServiceRepairPage
      title="Engine Repair"
      vehicleLabel="Vehicle model"
      vehiclePlaceholder="Example: Pulsar, Swift, scooter"
      heroTitle="Find nearby support for engine trouble."
      heroDescription="Share your location and engine issue to review mechanic options for roadside diagnosis."
      locationDescription="Enter your current location and explain the engine problem. The page will show nearby mechanic options while staying frontend-only."
      issuePlaceholder="Tell the mechanic what engine symptoms you noticed"
      selectPlaceholder="Select engine issue"
      issueTypes={issueTypes}
      mechanics={mechanics}
    />
  );
}

export default EngineRepair;
