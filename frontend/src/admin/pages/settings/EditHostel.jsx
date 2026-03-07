import { useState, useRef } from "react";
import {
  Building,
  MapPin,
  Phone,
  Bed,
  DollarSign,
  Image,
  User,
} from "lucide-react";
import MobileHeader from "../../components/Back";

export default function EditHostel() {
  const fileInputRef = useRef(null);

  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const [form, setForm] = useState({
    name: "Kaveri Living Hostel",
    description: "Comfortable student hostel with mess and WiFi",

    address: "Near CCS University",
    city: "Meerut",
    state: "Uttar Pradesh",
    country: "India",
    pincode: "250001",

    phone: "+91 9876543210",
    email: "kaverihostel@gmail.com",
    whatsapp: "+91 9876543210",

    monthlyRent: "4500",
    securityDeposit: "2000",

    totalRooms: "40",
    availableRooms: "8",

    facilities: ["WiFi", "Laundry", "Parking"],

    amenities: ["AC Rooms", "Study Table", "Water Cooler"],

    rules: ["No loud music after 10PM", "Visitors allowed till 8PM"],

    ownerName: "Ramesh Kumar",
    ownerContact: "+91 9123456789",
  });

  /* HANDLE INPUT */

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* IMAGE UPLOAD */

  const handleImageUpload = (e) => {
    const files = [...e.target.files];

    setImages((prev) => [...prev, ...files]);

    const previews = files.map((file) => URL.createObjectURL(file));

    setPreviewImages((prev) => [...prev, ...previews]);
  };

  /* REMOVE IMAGE */

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
    setPreviewImages(previewImages.filter((_, i) => i !== index));
  };

  /* ARRAY FIELD */

  const updateArray = (key, values) => {
    setForm({ ...form, [key]: values });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(form).forEach((key) => {
      data.append(key, JSON.stringify(form[key]));
    });

    images.forEach((img) => {
      data.append("images", img);
    });

    console.log("SUBMIT:", form);
  };

  return (
    <div className="bg-[#f4f6f9] min-h-screen">
      {/* HEADER */}

      {/* <div className="sticky top-0 bg-white border-b border-gray-200 py-3 px-2 z-20">
        <h1 className="text-base font-semibold">Edit Hostel</h1>
      </div> */}

        <MobileHeader title={'Edit Hostel'}/>

      <div className="max-w-3xl mx-auto  md:p-6 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* BASIC INFO */}

          <Card title="Basic Information">
            <FormInput
              icon={Building}
              label="Hostel Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />

            <FormInput
              icon={Building}
              label="Description"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </Card>

          {/* LOCATION */}

          <Card title="Location">
            <FormInput
              icon={MapPin}
              label="Address"
              name="address"
              value={form.address}
              onChange={handleChange}
            />

            <div className="grid grid-cols-2 gap-3">
              <FormInput
                icon={MapPin}
                label="City"
                name="city"
                value={form.city}
                onChange={handleChange}
              />
              <FormInput
                icon={MapPin}
                label="State"
                name="state"
                value={form.state}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <FormInput
                icon={MapPin}
                label="Country"
                name="country"
                value={form.country}
                onChange={handleChange}
              />
              <FormInput
                icon={MapPin}
                label="Pincode"
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
              />
            </div>
          </Card>

          {/* CONTACT */}

          <Card title="Contact">
            <FormInput
              icon={Phone}
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
            <FormInput
              icon={Phone}
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <FormInput
              icon={Phone}
              label="Whatsapp"
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
            />
          </Card>

          {/* PRICING */}

          <Card title="Pricing">
            <FormInput
              icon={DollarSign}
              label="Monthly Rent"
              name="monthlyRent"
              value={form.monthlyRent}
              onChange={handleChange}
            />
            <FormInput
              icon={DollarSign}
              label="Security Deposit"
              name="securityDeposit"
              value={form.securityDeposit}
              onChange={handleChange}
            />
          </Card>

          {/* ROOMS */}

          <Card title="Rooms">
            <FormInput
              icon={Bed}
              label="Total Rooms"
              name="totalRooms"
              value={form.totalRooms}
              onChange={handleChange}
            />
            <FormInput
              icon={Bed}
              label="Available Rooms"
              name="availableRooms"
              value={form.availableRooms}
              onChange={handleChange}
            />
          </Card>

          {/* FACILITIES */}

          <Card title="Facilities">
            <ArrayInput
              label="Facilities"
              values={form.facilities}
              setValues={(val) => updateArray("facilities", val)}
            />

            <ArrayInput
              label="Amenities"
              values={form.amenities}
              setValues={(val) => updateArray("amenities", val)}
            />

            <ArrayInput
              label="Rules"
              values={form.rules}
              setValues={(val) => updateArray("rules", val)}
            />
          </Card>

          {/* IMAGES */}

          <Card title="Hostel Images">
            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="border px-3 py-2 text-sm flex items-center gap-2"
            >
              <Image size={16} />
              Upload Images
            </button>

            <input
              type="file"
              multiple
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
            />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
              {previewImages.map((img, i) => (
                <div key={i} className="relative">
                  <img src={img} className="h-24 w-full object-cover rounded" />

                  <button
                    type="button"
                    onClick={() => removeImage(i)}
                    className="absolute top-1 right-1 bg-black text-white text-xs px-2"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </Card>

          {/* OWNER */}

          <Card title="Owner">
            <FormInput
              icon={User}
              label="Owner Name"
              name="ownerName"
              value={form.ownerName}
              onChange={handleChange}
            />
            <FormInput
              icon={Phone}
              label="Owner Contact"
              name="ownerContact"
              value={form.ownerContact}
              onChange={handleChange}
            />
          </Card>

          {/* SUBMIT */}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 text-sm font-medium"
          >
            Save Hostel
          </button>
        </form>
      </div>
    </div>
  );
}

/* CARD */

function Card({ title, children }) {
  return (
    <div className="bg-white  py-6 px-2 md:rounded-2xl space-y-4">
      <h2 className="text-sm font-semibold">{title}</h2>
      {children}
    </div>
  );
}

/* INPUT */

function FormInput({ icon: Icon, label, name, value, onChange }) {
  return (
    <div className="flex flex-col ">
      <label className="text-xs text-gray-500 mb-1">{label}</label>

      <div className="flex items-center gap-2 border border-gray-200 px-3 py-3">
        <Icon size={16} className="text-gray-400" />

        <input
          name={name}
          value={value || ""}
          onChange={onChange}
          className="w-full text-sm outline-none bg-transparent"
        />
      </div>
    </div>
  );
}

/* ARRAY INPUT */

function ArrayInput({ label, values, setValues }) {
  const handleChange = (index, value) => {
    const updated = [...values];
    updated[index] = value;
    setValues(updated);
  };

  const addField = () => {
    setValues([...values, ""]);
  };

  const removeField = (index) => {
    setValues(values.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-2">
      <label className="text-xs text-gray-500">{label}</label>

      {values.map((value, index) => (
        <div key={index} className="flex gap-2">
          <input
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            className="flex-1 border border-gray-200 px-3 py-2 text-sm"
          />

          <button
            type="button"
            onClick={() => removeField(index)}
            className="text-xs px-2 bg-gray-200"
          >
            X
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addField}
        className="text-xs bg-black text-white px-3 py-1"
      >
        Add {label}
      </button>
    </div>
  );
}
