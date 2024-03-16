import { BiLandscape, BiPieChartAlt } from 'react-icons/bi';
import { BsFillFunnelFill, BsFillHouseExclamationFill } from 'react-icons/bs'
import { FaHome,FaUser,FaBuilding,FaBed ,FaRestroom,FaHouseDamage  } from 'react-icons/fa'

//  Browse properties Home List



export const AREA_MAX = [
  'Any',
  '100',
  '200',
  '400',
  '600',
  '800',
  '1,000',
  '1,200',
  '1,600',
  '2,000',
  '2,400',
  '3,000',
  '3,600',
  '4,000',
  '6000',
  '10,000',
  '20,000',
  '30,000',
  '40,000',
  '50,000',
  '100,000',
  '200,000',
];


export const AREA_MIN = [
  '0',
  '200',
  '400',
  '600',
  '800',
  '1000',
];




export const MAX = [
  'Any',
  '1,000,000',
  '2,000,000',
  '3,000,000',
  '4,000,000',
  '5,000,000',
  '6,500,000',
  '8,000,000',
  '10,000,000',
  '12,500,000',
  '15,000,000',
  '17,500,000',
  '20,000,000',
  '22,500,000',
  '25,000,000',
  '30,000,000',
  '40,000,000',
  '50,000,000',
  '75,000,000',
  '100,000,000',
  '250,000,000',
  '500,000,000',
  '1000,000,000',
  '5,000,,000,000',
];




export const MIN = [
  '0',
  '500,000',
];

export const HomeList1 = [
  {
    name: "5 Marla",
    type: "Houses",
  },
  {
    name: "10 Marla",
    type: "Houses",
  },
  {
    name: "3 Marla",
    type: "Houses",
  },
  {
    name: "New",
    type: "Houses",
  },
  {
    name: "Low Price",
    type: "All Homes",
  },
  {
    name: "Small",
    type: "Houses",
  },
  {
    name: "On Installments",
    type: "Houses",
  },
  {
    name: "1 Bedroom",
    type: "Flats",
  },
  {
    name: "2 Bedroom",
    type: "Flats",
  },
  {
    name: "3 Bedroom",
    type: "Flats",
  },
  {
    name: "On Installments",
    type: "Flats",
  },
];



export const HomeList = 
[
  { icon: <FaHome />, text: 'House' },
  { icon: <FaBuilding />, text: 'Flats' },
  { icon: <FaBed />, text: 'Upper Portion' },
  { icon: <FaUser />, text: 'Lower Portion' },
  { icon: <BsFillHouseExclamationFill />, text: 'Farm House' },
  { icon: <FaRestroom />, text: 'Room' },
  { icon: <FaHouseDamage />, text: 'PentHouse' },
]
  


export const PlotList = [
    { icon: <BiPieChartAlt />, text: 'Residential Plot' },
    { icon: <BsFillFunnelFill />, text: 'Commercial Plot' },
    { icon: <BiLandscape />, text: 'Agricultural Land' },
    { icon: <FaBed />, text: 'Industrial Land' },
    { icon: <BsFillHouseExclamationFill />, text: 'Plot File' },
    { icon: <FaHouseDamage />, text: 'Plot Form' },
  ];

export const CommercialList = [
  { icon: <BiPieChartAlt />, text: 'Office' },
  { icon: <BsFillFunnelFill />, text: 'Shop' },
  { icon: <BiLandscape />, text: 'Warehouse' },
  { icon: <FaBed />, text: 'Factory' },
  { icon: <BsFillHouseExclamationFill />, text: 'Building' },
  { icon: <FaHouseDamage />, text: '... Others' },
];


export const AreasizeList = ["Marla", "Sq. Ft.", "Sq. M.", "Sq. Yd.", "Kanal"];
export const Bedrooms = [
  "ALL",
  "Studio",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "10+",
];
export const Bathrooms = ["1", "2", "3", "4", "5", "6"];

export const cities = [
  "Karachi",
  "Lahore",
  "Faisalabad",
  "Rawalpindi",
  "Multan",
  "Gujranwala",
  "Hyderabad",
  "Peshawar",
  "Quetta",
  "Islamabad",
  "Sargodha",
  "Sialkot",
  "Bahawalpur",
  "Sukkur",
  "Larkana",
  "Sheikhupura",
  "Mirpur Khas",
  "Rahim Yar Khan",
  "Gujrat",
  "Jhang",
  "Sahiwal",
  "Attock",
  "Okara",
  "Wah",
  "Dera Ghazi Khan",
  "Muzaffargarh",
  "Nawabshah",
  "Mingora (Swat)",
  "Charsadda",
  "Kamoke",
  "Sadiqabad",
  "Kohat",
  "Muridke",
  "Mardan",
  "Jacobabad",
  "Shikarpur",
  "Hafizabad",
  "Kotli",
  "Khanewal",
  "Khairpur",
  "Khuzdar",
  "Daska",
  "Gojra",
  "Mandi Bahauddin",
  "Murree",
  "Parachinar",
  "Haripur",
  "Pakpattan",
  "Toba Tek Singh",
  "Haroonabad",
  "Shakargarh",
  "Charsadda",
  "Qila Abdullah",
  "Vehari",
  "Nowshera",
  "Dadu",
  "Ghotki",
  "Qila Saifullah",
  "Kharian",
  "Chaman",
  "Abbottabad",
  "Jalalpur Jattan",
  "Mianwali",
  "Lala Musa",
  "Kot Addu",
  "Wazirabad",
  "Chakwal",
  "Risalpur",
  "Layyah",
  "Kohlu",
  "Khalabat",
  "Taunsa",
  "Mamoori",
  "Taxila",
  "Swabi",
  "Dera Ismail Khan",
  "Nowshera Cantonment",
  "Hangu",
  "Timargara",
  "Paroa",
  "Gakhar Mandi",
  "Talagang",
  "Thatta",
  "Pattoki",
  "Tando Allahyar",
  "Umarkot",
  "Shahdadkot",
  "Pindi Gheb",
  "Ghauspur",
  "Chunian",
  "Sanghar",
  "Kamra",
  "Bannu",
  "Timergara",
  "Taunsa Sharif",
  "Shahdadpur",
  "Mansehra",
  "Tando Adam",
  "Khairpur Tamewali",
  "Zafarwal",
];

export const AreaSize = [
  {
    name: "5 Marla",
    type: "Homes",
  },
  {
    name: "3 Marla",
    type: "Homes",
  },
  {
    name: "7 Marla",
    type: "Homes",
  },
  {
    name: "8 Marla",
    type: "Homes",
  },
  {
    name: "10 Marla",
    type: "Homes",
  },
  {
    name: "1 Kanal",
    type: "Homes",
  },
  {
    name: "2 Marla",
    type: "Homes",
  },
];

//  Plots





export const Plots_Type = [
  { icon: <BiPieChartAlt />, text: 'Residential Plot' },
  { icon: <BsFillFunnelFill />, text: 'Commercial Plot' },
  { icon: <BiLandscape />, text: 'Agricultural Land' },
  { icon: <FaBed />, text: 'Industrial Land' },
  { icon: <BsFillHouseExclamationFill />, text: 'Plot File' },
  { icon: <FaHouseDamage />, text: 'Plot Form' },
];

export const Plots_Area = [
  {
    name: "3 Marla",
    type: "Residential Plots",
  },
  {
    name: "5 Marla",
    type: "Residential Plots",
  },
  {
    name: "7 Marla",
    type: "Residential Plots",
  },
  {
    name: "8 Marla",
    type: "Residential Plots",
  },
  {
    name: "10 Marla",
    type: "Residential Plots",
  },
  {
    name: "1 Kanal",
    type: "Commercial Plots",
  },
  {
    name: "2 Kanal",
    type: "Residential Plots",
  },
];

export const Plots_Popular = [
  {
    name: "5 Marla",
    type: "Residential Plots",
  },
  {
    name: "10 Marla",
    type: "Residential Plots",
  },
  {
    name: "7 Marla",
    type: "Residential Plots",
  },
  {
    name: "3 Marla",
    type: "Residential Plots",
  },
  {
    name: "On Installments",
    type: "Residential Plots",
  },
  {
    name: "On Installments",
    type: "Commercial Plots",
  },
  {
    name: "With Possession",
    type: "Residential Plots",
  },
  {
    name: "Corner",
    type: "Residential Plots",
  },
  {
    name: "Park Facing",
    type: "Residential Plots",
  },
];

// Commercial


export const Commercial_Type = [
  { icon: <BiPieChartAlt />, text: 'Office' },
  { icon: <BsFillFunnelFill />, text: 'Shop' },
  { icon: <BiLandscape />, text: 'Warehouse' },
  { icon: <FaBed />, text: 'Factory' },
  { icon: <BsFillHouseExclamationFill />, text: 'Building' },
  { icon: <FaHouseDamage />, text: '... Others' },
];



export const Commercial_Area = [
  {
    name: "3 Marla",
    type: "Commercial",
  },
  {
    name: "5 Marla",
    type: "Commercial",
  },
  {
    name: "7 Marla",
    type: "Commercial",
  },
  {
    name: "8 Marla",
    type: "Commercial",
  },
  {
    name: "10 Marla",
    type: "Commercial",
  },
  {
    name: "1 Kanal",
    type: "Commercial",
  },
  {
    name: "2 Kanal",
    type: "Commercial",
  },
];

export const Commercial_Popular = [
  {
    name: "Small",
    type: "Offices",
  },
  {
    name: "New",
    type: "Offices",
  },
  {
    name: "On Installmemts",
    type: "Shops",
  },
  {
    name: "Small",
    type: "Shops",
  },
  {
    name: "New",
    type: "Shops",
  },
  {
    name: "Running",
    type: "Shops",
  },
];
