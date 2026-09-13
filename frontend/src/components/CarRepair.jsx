import ServiceRepairPage from "./ServiceRepairPage";

const issueTypes = [
  "Car not starting",
  "Overheating",
  "Brake problem",
  "Clutch issue",
  "Battery issue",
  "Engine warning",
];

const mechanics = [
  {
    name: "City Car Care",
    area: "1.6 km away",
    specialty: "Car starting, overheating, and engine checks",
    time: "18 min",
    rating: "4.8",
  },
  {
    name: "Highway Auto Help",
    area: "2.5 km away",
    specialty: "Brake, clutch, and roadside breakdown repair",
    time: "25 min",
    rating: "4.7",
  },
  {
    name: "Mitra Car Garage",
    area: "3.8 km away",
    specialty: "Battery, warning lights, and general car repair",
    time: "32 min",
    rating: "4.6",
  },
];

function CarRepair() {
  return (
    <ServiceRepairPage
      title="Car Repair"
      vehicleLabel="Car model"
      vehiclePlaceholder="Example: Swift, Alto, Nexon"
      heroTitle="Find a nearby mechanic for your car."
      heroDescription="Share your location and car issue to review mechanic options for breakdown support."
      locationDescription="Enter where your car needs help and describe the problem. The page will show nearby mechanic choices in the same MechMitra style."
      issuePlaceholder="Tell the mechanic what happened with the car"
      selectPlaceholder="Select car issue"
      issueTypes={issueTypes}
      mechanics={mechanics}
    />
  );
}

export default CarRepair;
