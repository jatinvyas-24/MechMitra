import ServiceRepairPage from "./ServiceRepairPage";

const issueTypes = [
  "Flat tyre",
  "Puncture repair",
  "Tyre replacement",
  "Low air pressure",
  "Valve issue",
  "Wheel check",
];

const mechanics = [
  {
    name: "Fast Tyre Point",
    area: "0.9 km away",
    specialty: "Puncture repair, air pressure, and valve support",
    time: "12 min",
    rating: "4.9",
  },
  {
    name: "Roadside Wheel Care",
    area: "1.8 km away",
    specialty: "Flat tyre, spare wheel fitting, and tyre checks",
    time: "20 min",
    rating: "4.7",
  },
  {
    name: "Mitra Tyre Service",
    area: "2.7 km away",
    specialty: "Tyre replacement, wheel checks, and puncture help",
    time: "26 min",
    rating: "4.6",
  },
];

function TyreRepair() {
  return (
    <ServiceRepairPage
      title="Tyre Repair"
      vehicleLabel="Vehicle type"
      vehiclePlaceholder="Example: Bike, car, scooter"
      heroTitle="Find nearby tyre repair support."
      heroDescription="Share your location and tyre issue to review mechanic options for puncture and wheel help."
      locationDescription="Enter where your vehicle is stopped and what happened to the tyre. The page will show nearby repair options without adding any backend service."
      issuePlaceholder="Tell the mechanic what happened to the tyre"
      selectPlaceholder="Select tyre issue"
      issueTypes={issueTypes}
      mechanics={mechanics}
    />
  );
}

export default TyreRepair;
