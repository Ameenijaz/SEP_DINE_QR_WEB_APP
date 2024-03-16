
"use client"
import React,{useState ,useRef} from "react";
import axios from "axios"; // You'll need axios or another HTTP library to make API requests
import Select from 'react-select';
import {ServiceUrl} from "../global"
import {HomeList ,PlotList, CommercialList , cities , AreasizeList ,Bedrooms,
   Bathrooms, } from '../GetList'


   import { BsHouseCheck } from "react-icons/bs";

import { RiDeleteBin6Line} from "react-icons/ri";

import { MdSlowMotionVideo } from "react-icons/md";
import { FaImages, FaVideo } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import { BiBuildingHouse, BiCheckCircle, } from "react-icons/bi";
import { TbHomeSearch } from "react-icons/tb"
import { GoLocation  } from "react-icons/go";
import { HiOutlineMap } from "react-icons/hi";
import LoadingSpinner from "../Loader/page";


// City dropdown

const CityDropdown = ({ selectedCity, onChange }) => {
  const options = cities.map((city) => ({ value: city, label: city }));

  return (
    <Select
      options={options}
      value={{ value: selectedCity, label: selectedCity }}
      onChange={(selectedOption) => onChange(selectedOption.value)}
      placeholder="Select a city..."
      isSearchable
      className="text-xs hover:bg-gray-100 scroll-smooth text-gray-700"
    />
  );
};











 const NewProducts = () => {

  
 
    const [file, setFile] = useState([]);
const [selectedCity, setSelectedCity] = useState(null);
const [activeTab, setActiveTab] = useState('Home');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

//  Selected Puprpose


const [selectedOption, setSelectedOption] = useState(null);

const handleOptionClick = (option) => {
  setSelectedOption(option);
};
  

    //  property Home 
    const [subType, setSubType] = useState(null);

    const handleClick = (text) => {
      setSubType(text);
    };


    //  property Plot 
    // const [selectedPlotValue, setSelectedPlotValue] = useState(null);

    const handlePlotClick = (text) => {
      setSubType(text);
    };
  
   //  property Commercial 
  //  const [selectedCommercialValue, setSelectedCommercialValue] = useState(null);

  const handleCommercialClick = (text) => {
    setSubType(text);
  };



//    Location 


const [Location, setLocation] = useState('');

const handleLocationChange = (e) => {
  setLocation(e.target.value);
};



//    Area Size 


const [Area, setArea] = useState('');

const handleAreaChange = (e) => {
  setArea(e.target.value);
};

//  Area dropdown 


const [selectedValue, setSelectedValue] = useState(null);

const handleSelect = (value) => {
  setSelectedValue(value);
  console.log(value); // Log the updated value
};


//    price 


const [price, setprice] = useState('');

const handlepriceChange = (e) => {
  setprice(e.target.value);
};


//  Bedroom value

const [selectedBedroom, setSelectedBedroom] = useState(null);

const handleBedroomClick = (item) => {
  if (selectedBedroom === item) {
    // If the same option is clicked again, deselect it
    setSelectedBedroom(null);
  } else {
    // Otherwise, select the clicked option
    setSelectedBedroom(item);
  }
};

//  Bathroom value 

const [selectedIndex, setSelectedIndex] = useState(null);

const handledivClick = (index) => {
  setSelectedIndex(index);
};


//  Title or Description value chnage 

const handleDescriptionChange = (e) => {
  setDescription(e.target.value);
};



//  get email and mobile feild 


const [email, setEmail] = useState('');
const [mobile, setMobile] = useState('');

const handleEmailChange = (e) => {
  setEmail(e.target.value);
};

const handleMobileChange = (e) => {
  setMobile(e.target.value);
};


//  Upload image

 
    const fileInputRef = React.createRef();
    const [previewImages, setPreviewImages] = useState([]);
    const handleImageUpload = (e) => {


      const files = Array.from(e.target.files);
  
  
      const newImages = files.map((file) => URL.createObjectURL(file));
      setPreviewImages(newImages);
      setFile([...file, ...e.target.files]);

    };

    


  
    const handleButtonClick = () => {
      // Trigger the hidden file input
      fileInputRef.current.click();
    };
  



//  Upload video

const [selectedVideos, setSelectedVideos] = useState([]);
const [previewVideos, setPreviewVideos] = useState([]);
const videoInputRef = React.createRef();

const handleVideoUpload = (e) => {




  const files = Array.from(e.target.files);

  const newVideos = files.map((file) => URL.createObjectURL(file));

  setPreviewVideos(newVideos)
  setSelectedVideos([...selectedVideos, ...e.target.files]);
};

const handleButtonnClick = () => {
  // Trigger the hidden video input
  videoInputRef.current.click();
};







 
const handleTabsClick = (tab) => {
  setActiveTab(tab); // Set the active tab

};


//  City value get success




    const handleCityChange = (city) => {

      setSelectedCity(city)
     console.log(selectedCity)
    };
  
  



  







//  Submit ADS butoon 


const handleUpload = async () => {
  // Check if all fields are filled
  if (
    file &&
    selectedOption &&

    selectedCity &&
    Location &&
    Area &&
    selectedValue &&
    price &&
    selectedBedroom &&
    selectedIndex &&
    title &&
    description &&
    email &&
    mobile &&
    selectedVideos 
  ) {
    // If all fields are filled, show loading state
    setLoading(true);
    const formData = new FormData();
    formData.append('purpose', selectedOption);
    formData.append('propertyType', activeTab);
    formData.append('subType',subType );
    formData.append('city', selectedCity);
    formData.append('location', Location);
    formData.append('Area_size', Area + selectedValue);
    formData.append('price', price);
    formData.append('bedrooms', selectedBedroom);
    formData.append('bathrooms', selectedIndex);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('email', email);
    formData.append('mobile', mobile);
    file.forEach((image) => {
      formData.append("imagefiles", image);
    });

    selectedVideos.forEach((video) => {
      formData.append("videofiles", video);
    });


    try {
      // Simulate API call delay (remove in production)
      setTimeout(async () => {
        const response = await axios.post(
          `${ServiceUrl}/Product`,
          formData
        );

        if (response.status === 200) {
          setSuccess(true);
          setLoading(false);
          // Handle success (e.g., redirect or show a success message)
        } else {
          setSuccess(false);
          setLoading(false);
          setError('Error uploading file.');
        }
      }, 2000); // Simulated 2-second delay
    } catch (error) {
      console.error('Error uploading file:', error);
      setSuccess(false);
      setLoading(false);
      setError('Error uploading file.');
    }
  } else {
    // If any required field is missing, display an error message
    setError('Please fill in all required fields.');
  }
};












    return (
        <main  className="h-[400vh] m-9"  >

{/* Location and Purpose Card */}


<div className="bg-white rounded-lg shadow-md p-4">
   
   <div className="flex flex-row gap-10 p-4 justify-center  w-[100%]" >
   
      <div className="flex flex-col  w-[15%]">
      <div className="border border-gray-100 bg-gray-100 p-2 rounded-lg w-10 h-10 flex justify-center items-center  " >        
        <TbHomeSearch className="w-4 h-4 text-blue-500" />
</div>        
        <h2 className="text-xl font-semibold">Location and Purpose</h2>
       </div>

{/* Select Purpose */}
 
 <div className="w-[65%]" >

 <div className="flex flex-row gap-3 ">
  <div className="border border-gray-100 bg-gray-100 p-2 rounded-full  " >
 <BiCheckCircle className="w-4 h-4 text-blue-500" />    
</div>
<h3 className="text-sm font-semibold">Select Purpose</h3>
</div>

  <div className="flex flex-grow justify-center gap-4 mb-10">
  <div
        className={`w-[95px] h-10 flex items-center justify-center text-gray-500 rounded-full text-sm border ${
          selectedOption === 'Sell'
            ? 'border-blue-700 bg-slate-700 text-white'
            : 'border-gray-500'
        } hover:bg-gray-100 hover:border-blue-700 hover:text-blue-500 cursor-pointer transition duration-400`}
        onClick={() => handleOptionClick('Sell')}
      >
        <div className="flex gap-2">
          <BsHouseCheck className="w-4 h-4" />
          <span className="text-xs">Sell</span>
        </div>
      </div>

      <div
        className={`w-[95px] h-10 flex items-center justify-center text-gray-500 rounded-full text-sm border ${
          selectedOption === 'Rent'
            ? 'border-blue-700 bg-slate-700 text-white'
            : 'border-gray-500'
        } hover:bg-gray-100 hover:border-blue-700 hover:text-blue-500 cursor-pointer transition duration-400`}
        onClick={() => handleOptionClick('Rent')}
      >
        <div className="flex gap-2">
          <BsHouseCheck className="w-4 h-4" />
          <span className="text-xs">Rent</span>
        </div>
      </div>
    </div>


{/* Select Property Type */}


<div className="flex flex-row gap-3 ">
  <div className="border border-gray-100 bg-gray-100 p-2 rounded-full  " >
 <BiBuildingHouse className="w-4 h-4 text-blue-500" />    
</div>
<h3 className="text-sm font-semibold ">Select Property Type</h3>
</div>

       <div  className=" mt-[20px]  mx-4  h-[auto] my-4">
     <div className="flex space-x-8 border-b-2">
        {['Home', 'Plots', 'Commercials'].map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer  text-black ${
              activeTab === tab
                ? 'border-b-2 border-blue-500 font-semibold transition-transform duration-500 text-blue-500 '
                : 'border-b-2 border-transparent hover:border-gray-500'
            }`}
            onClick={() => handleTabsClick(tab)}
          >
            {tab}
          </div>
        ))}
      </div>


{/*  Tabs content */}
    
      <div className="mt-9 ">
       
      {activeTab === 'Home' && (
        <div className="grid grid-cols-3 gap-4">
          {HomeList.map((item, index) => (
            <div
              key={index}
              className={`h-10 flex items-center justify-center gap-2 text-gray-500 rounded-full text-xs border ${
                subType === item.text
                  ? 'border-blue-700 text-white bg-slate-500 '
                  : 'border-gray-500'
              } cursor-pointer transition duration-400`}
              onClick={() => handleClick(item.text)}
            >
              {item.icon}
              {item.text}
            </div>
          ))}
        </div>
      )}

{activeTab === 'Plots' && (
        <div className="grid grid-cols-3 gap-4">
          {PlotList.map((item, index) => (
            <div
              key={index}
              className={`h-10 flex items-center justify-center gap-2 text-gray-500 rounded-full text-xs border ${
                subType === item.text
                  ? 'border-blue-700 text-white bg-slate-500 '
                  : 'border-gray-500'
              } cursor-pointer transition duration-400`}
              onClick={() => handlePlotClick(item.text)}
            >
              {item.icon}
              {item.text}
            </div>
          ))}
        </div>
      )}


{activeTab === 'Commercials' && (
        <div className="grid grid-cols-3 gap-4">
          {CommercialList.map((item, index) => (
            <div
              key={index}
              className={`h-10 flex items-center justify-center gap-2 text-gray-500 rounded-full text-xs border ${
                subType === item.text
                  ? 'border-blue-700 text-white bg-slate-500 '
                  : 'border-gray-500'
              } cursor-pointer transition duration-400`}
              onClick={() => handleCommercialClick(item.text)}
            >
              {item.icon}
              {item.text}
            </div>
          ))}
        </div>
      )}

      </div>
    
</div>

   

{/* City Dropdown */}

<div className="container mx-auto mt-10">
    
<div className="flex flex-row gap-3 mb-5 ">
  <div className="border border-gray-100 bg-gray-100 p-2 rounded-full  " >
 <GoLocation className="w-4 h-4 text-blue-500" />    
</div>
<h3 className="text-sm font-semibold">City</h3>
</div>

        <CityDropdown selectedCity={selectedCity} onChange={handleCityChange} />
       
      </div>


{/* Location */}
      <div
        className={` transition-all duration-500 mt-4`}
      >
        <div className="mb-2">
         
         
        <div className="flex flex-row gap-3 mb-5 ">
  <div className="border border-gray-100 bg-gray-100 p-2 rounded-full  " >
 < HiOutlineMap className="w-4 h-4 text-blue-500" />    
</div>
<h3 className="text-sm font-semibold">Location</h3>
</div>

          <input
            type="text"
            className="border border-gray-300 p-2  text-xs rounded-md w-full"
            value={Location}
            onChange={handleLocationChange}

          />
        </div>

        </div>   


   
    </div>
    
    </div>

</div>

{/*  Price and Area Card */}


<div className="bg-white rounded-lg shadow-md mt-9 p-8">
     
     <div className="flex flex-row gap-12 justify-center  w-[100%] " >

     <div className="flex flex-col  w-[15%] gap-2">
      <div className="border border-gray-100 bg-gray-100 p-2 rounded-lg w-10 h-10 flex justify-center items-center  " >        
        <img src="/price.png" className="w-4 h-4 text-blue-500" />
</div>        
        <h2 className="text-xl font-semibold">Price and Area</h2>
       </div>

      <div
        className={` transition-all duration-500 w-[65%] `}
      >
      

<div className="flex flex-grow gap-6"  >

  
<div className="mb-2">
          <div className="flex flex-row gap-3 mb-5 ">
  <div className="border border-gray-100 bg-gray-100 p-2 rounded-full  " >
 < img src="/area.png" className="w-4 h-4" />    
</div>
<label className="block text-gray-900 text-sm font-semibold ">Area Size</label>   
</div>
          <input
            type="text"
            value={Area}
            onChange={handleAreaChange}
            className="border border-gray-300 p-2 text-xs py-3 rounded-md w-full"
          />
        </div>

{/* dropdown */}

<div className="relative mt-14 text-xs">
      <select
        value={selectedValue}
        onChange={(e) => handleSelect(e.target.value)}
        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option value="" disabled>
          Select an area size
        </option>
        {AreasizeList.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>


</div>

        <div>
          <div className="flex flex-row gap-3 mb-5 ">
  <div className="border border-gray-100 bg-gray-100 p-2 rounded-full  " >
 < img src="/price.png" className="w-4 h-4" />    
</div>
<label className="block text-gray-900 text-sm font-semibold ">Price</label>   
</div>
      
          <input
            type="text"
            value={price}
            onChange={handlepriceChange}
            className="border border-gray-300 p-2 text-xs py-3 rounded-md w-full"
          />
        </div>
      </div>
    
    
      </div> 
      {/* row */}

    </div>

{/* Feature and Amenities */}



<div className="bg-white rounded-lg shadow-md mt-9 p-4 ">
     
       
<div className="flex flex-row gap-4 justify-center  w-[100%] " >

        <div className="flex flex-col  w-[15%] gap-2">
      <div className="border border-gray-100 bg-gray-100 p-2 rounded-lg w-10 h-10 flex justify-center items-center  " >        
        <img src="/price.png" className="w-4 h-4 text-blue-500" />
</div>        
        <h2 className="text-xl font-semibold">Feature and Amenities</h2>
       </div>



       <div className=" flex flex-col w-[65%]"  >

       <div className="flex flex-row gap-3 mt-5">
  <div className="border border-gray-100 bg-gray-100 p-2 rounded-full  " >
 < img src="/price.png" className="w-4 h-4" />    
</div>
<label className="block text-gray-900 text-sm font-semibold ">Bedrooms</label>   
</div>

<div className="grid grid-cols-10 gap-4 mt-2">
      {Bedrooms.map((item, index) => (
        <div
          key={index}
          onClick={() => handleBedroomClick(item)}
          className={`text-black rounded-full flex items-center justify-center text-xs p-2 border ${
            selectedBedroom === item
            ? 'border-blue-700 bg-slate-700 text-white'
              : "border-gray-700"
          } hover:bg-white hover:border-blue-500 hover:text-blue-500 cursor-pointer transition duration-300`}
        >
          {item}
        </div>
      ))}
    </div>
     
      <div className="flex flex-row gap-3 mt-5">
  <div className="border border-gray-100 bg-gray-100 p-2 rounded-full  " >
 < img src="/price.png" className="w-4 h-4" />    
</div>
<label className="block text-gray-900 text-sm font-semibold ">Bathrooms</label>   
</div>


        <div className="grid grid-cols-10 gap-4 mt-2">
        {Bathrooms.map((item, index) => (
        <div
          key={index}
          onClick={() => handledivClick(index)}
          className={`p-2 text-black rounded-full flex items-center justify-center text-sm border ${
            selectedIndex === index
            ? 'border-blue-700 bg-slate-700 text-white'
              : 'border-gray-700 hover:bg-white hover:border-blue-500 hover:text-blue-500 cursor-pointer transition duration-300'
          }`}
        >
          {item}
        </div>
      ))}
      </div>
</div>
    


    </div>
    </div>



{/* Ad Information */}



<div className="bg-white rounded-lg shadow-md mt-9 p-4">
      
      <div className="flex flex-row gap-12 justify-center w-[100%]" >

<div className="flex flex-col gap-2  w-[15%] ">
      <div className="border border-gray-100 bg-gray-100 p-2 rounded-lg w-10 h-10 flex justify-center items-center  " >        
        <img src="/price.png" className="w-4 h-4 text-blue-500" />
</div>        
        <h2 className="text-xl font-semibold">Add Information</h2>
       </div>



        <div className="flex-cols w-[65%]" >
      
      
        <div className="flex flex-row gap-3 mt-5">
  <div className="border border-gray-100 bg-gray-100 p-2 rounded-full  " >
 < img src="/price.png" className="w-4 h-4" />    
</div>
<label className="block text-gray-900 text-sm font-semibold ">Title</label>   
</div>
      
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full py-3 mb-4 mt-2 text-xs focus:outline-none focus:border-blue-500"
        placeholder="Enter a title"
      />

      
<div className="flex flex-row gap-3 mt-5">
  <div className="border border-gray-100 bg-gray-100 p-2 rounded-full  " >
 < img src="/price.png" className="w-4 h-4" />    
</div>
<label className="block text-gray-900 text-sm font-semibold ">Description</label>   
</div>
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        className="border border-gray-300 rounded p-2 w-full mb-4 mt-2 text-xs focus:outline-none focus:border-blue-500 resize-none transition-height duration-300"
        rows="4"
        placeholder="Enter a description"
      />
    </div>
      
    </div>
    </div>


{/* Property Images and Videos */}



<div className="bg-white rounded-lg shadow-md mt-9 p-4">
      

<div className="flex flex-row gap-12 justify-center w-[100%]" >


<div className="flex flex-col gap-2  w-[15%] ">
      <div className="border border-gray-100 bg-gray-100 p-2 rounded-lg w-10 h-10 flex justify-center items-center  " >        
        <img src="/price.png" className="w-4 h-4 text-blue-500" />
</div>        
        <h2 className="text-xl font-semibold">Property Images And Videos</h2>
       </div>



<div className="flex flex-col w-[65%] " >



  
<div className="flex flex-row gap-3 mt-5">
  <div className="border border-gray-100 bg-gray-100 p-2 rounded-full  " >
 < img src="/price.png" className="w-4 h-4" />    
</div>
<label className="block text-gray-900 text-sm font-semibold ">Upload Your Images</label>   
</div>

        <div className="border-dotted border-gray-500 p-4 rounded-lg border-2 mt-2">
    
        <div className="flex gap-5 w-[50%] " >

<div className=" flex justify-center items-center border border-gray-100 bg-gray-100  rounded-full w-20 h-20  " >
<img src="/image.png" className="w-12 h-12 " />    
</div>
      
      <div>
              <h1 className="text-sm font-semibold mb-4">Image Upload</h1>
    
      <button
        onClick={handleButtonClick}
        className="flex gap-2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-xs px-5 py-2.5 text-center mr-2 mb-2"
      >
        <FaImages className="w-4 h-4 " />
        Upload Image
      </button>
      
      </div>

      </div>
      
      <input
        type="file"
        accept="image/*"
        multiple
        name="imagefiles"
        onChange={handleImageUpload}
        className="hidden"
        ref={fileInputRef}
      />
      <div className="flex flex-wrap gap-4 mt-4">

      
          
        {previewImages.map((imageUrl, index) => (
          <div key={index} className="w-32 h-32 relative">
            <img
              src={imageUrl}
              alt={`Uploaded Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              className="absolute top-0 right-0 text-white mt-2 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-4 py-2 opacity-30 hover:opacity-100 text-center mr-2 mb-2"
           onClick={() => {
                const updatedImages = [...previewImages];
                updatedImages.splice(index, 1);
                setPreviewImages(updatedImages);
              }}
            >
            <RiDeleteBin6Line className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
      {/*  Upload video */}


      <div className="flex flex-row gap-3 mt-5">
  <div className="border border-gray-100 bg-gray-100 p-2 rounded-full  " >
 < img src="/price.png" className="w-4 h-4" />    
</div>
<label className="block text-gray-900 text-sm font-semibold ">Upload Your Videos</label>   
</div>

      <div className="border-dotted border-2 border-gray-500 p-4 rounded-lg mt-2">
      
    
      <div className="flex gap-5 w-[50%] " >

      <div className=" flex justify-center items-center border border-gray-100 bg-gray-100  rounded-full w-20 h-20  " >
 <img src="/play.png" className="w-12 h-12 " />    
</div>

     <div>
      <h1 className="text-sm font-semibold mb-4">Video Upload</h1>
      <button
        onClick={handleButtonnClick}
        className="flex gap-2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-xs px-5 py-2.5 text-center mr-2 mb-2"
      >
        <MdSlowMotionVideo className="w-4 h-4" />
          Upload Video
      </button>
     
      </div>
      
     
      </div>
      
      
      <input
        type="file"
        accept="video/*"
        multiple
        name="videofiles"
        onChange={handleVideoUpload}
        className="hidden"
        ref={videoInputRef}
      />
      <div className="mt-4 flex flex-wrap gap-6 ">
  
        {previewVideos.map((videoUrl, index) => (
          <div key={index} className="mb-4">
            <video
              src={videoUrl}
            
              controls
              className="w-[200px] h-[200px] rounded-lg  "
            />
            <button
              onClick={() => {
                const updatedVideos = [...previewVideos];
                updatedVideos.splice(index, 1);
                setPreviewVideos(updatedVideos);
              }}
              className="text-white mt-2 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
           >
              <RiDeleteBin6Line />
            </button>
          </div>
        ))}
      </div>
    </div>

</div>


</div>

 </div>



{/* Contact Information */}






<div className="bg-white rounded-lg shadow-md mt-9 p-4">


<div className="flex flex-row gap-12 justify-center w-[100%]" >


<div className="flex flex-col gap-2  w-[15%] ">
      <div className="border border-gray-100 bg-gray-100 p-2 rounded-lg w-10 h-10 flex justify-center items-center  " >        
        <img src="/price.png" className="w-4 h-4 text-blue-500" />
</div>        
        <h2 className="text-xl font-bold">Contact Information</h2>
       </div>



        <div className="w-[65%]" >
      
      
<div className="flex flex-row gap-3 mt-5">
  <div className="border border-gray-100 bg-gray-100 p-2 rounded-full  " >
 < img src="/price.png" className="w-4 h-4" />    
</div>
<label className="block text-gray-900 text-sm font-semibold ">Email</label>   
</div>


      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        className="border border-gray-300 text-xs py-3 mt-2 rounded p-2 w-full mb-4 focus:outline-none focus:border-blue-500"
        placeholder="Enter Email"
      />


<div className="flex flex-row gap-3 mt-5">
  <div className="border border-gray-100 bg-gray-100 p-2 rounded-full  " >
 < img src="/price.png" className="w-4 h-4" />    
</div>
<label className="block text-gray-900 text-sm font-semibold ">Mobile</label>   
</div>

     
      <input
        type="text"
        value={mobile}
        onChange={handleMobileChange}
        className="border border-gray-300 rounded mt-2 text-xs py-3 p-2 w-full mb-4 focus:outline-none focus:border-blue-500"
        placeholder="Enter Mobile Number "
      />
   
    </div>
      
      </div>
    
    </div>

{/* Submit Product */}


<div className="text-center">
  {error && (
    <div className="bg-red-600 text-white py-2 px-4 mt-[50px] mb-[70px] rounded-lg shadow-md my-2">
      {error}
    </div>
  )}

  {/* Show loading state while waiting for API response */}
  {loading ? (

// Loader

<LoadingSpinner />
   

  ) : (
    <>
      {success && (
        <div className="bg-blue-800 text-white py-2 px-4 mt-[50px] mb-[70px] rounded-lg my-2">
          Upload successful!
        </div>
      )}

      <button
        onClick={handleUpload}
        className="float-right mt-5 flex gap-2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-xs px-5 py-2.5 text-center mr-2 mb-5"
      >
        <IoIosSave className="w-4 h-4" />
        Submit Ad
      </button>
    </>
  )}
</div>

        </main>


    );
}

export default NewProducts;


