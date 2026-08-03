const student= [
  {
    name: "Aarav Sharma",
    class: "10A",
    marks: 87,
    address: "Lucknow, Uttar Pradesh"
  },
  {
    name: "Priya Verma",
    class: "10B",
    marks: 92,
    address: "Kanpur, Uttar Pradesh"
  },
  {
    name: "Rohan Singh",
    class: "9A",
    marks: 76,
    address: "Varanasi, Uttar Pradesh"
  },
  {
    name: "Ananya Gupta",
    class: "9B",
    marks: 89,
    address: "Jaipur, Rajasthan"
  },
  {
    name: "Aditya Mishra",
    class: "10A",
    marks: 81,
    address: "Prayagraj, Uttar Pradesh"
  },
  {
    name: "Sneha Patel",
    class: "8A",
    marks: 95,
    address: "Ahmedabad, Gujarat"
  },
  {
    name: "Kunal Yadav",
    class: "10B",
    marks: 68,
    address: "Gorakhpur, Uttar Pradesh"
  },
  {
    name: "Ishita Kapoor",
    class: "9A",
    marks: 84,
    address: "New Delhi, Delhi"
  },
  {
    name: "Rahul Tiwari",
    class: "8B",
    marks: 73,
    address: "Ayodhya, Uttar Pradesh"
  },
  {
    name: "Neha Joshi",
    class: "10A",
    marks: 90,
    address: "Dehradun, Uttarakhand"
  },
  {
    name: "Arjun Mehta",
    class: "9B",
    marks: 79,
    address: "Mumbai, Maharashtra"
  },
  {
    name: "Pooja Choudhary",
    class: "8A",
    marks: 86,
    address: "Jodhpur, Rajasthan"
  },
  {
    name: "Vivek Pandey",
    class: "10B",
    marks: 64,
    address: "Mirzapur, Uttar Pradesh"
  },
  {
    name: "Riya Saxena",
    class: "9A",
    marks: 91,
    address: "Bareilly, Uttar Pradesh"
  },
  {
    name: "Siddharth Kumar",
    class: "8B",
    marks: 77,
    address: "Patna, Bihar"
  },
  {
    name: "Kavya Nair",
    class: "10A",
    marks: 88,
    address: "Kochi, Kerala"
  },
  {
    name: "Manish Dubey",
    class: "9B",
    marks: 71,
    address: "Jhansi, Uttar Pradesh"
  },
  {
    name: "Simran Kaur",
    class: "8A",
    marks: 93,
    address: "Amritsar, Punjab"
  },
  {
    name: "Nikhil Agarwal",
    class: "10B",
    marks: 82,
    address: "Agra, Uttar Pradesh"
  },
  {
    name: "Aditi Srivastava",
    class: "9A",
    marks: 85,
    address: "Noida, Uttar Pradesh"
  },
  {
    name: "Harsh Rajput",
    class: "8B",
    marks: 69,
    address: "Bhopal, Madhya Pradesh"
  },
  {
    name: "Meera Iyer",
    class: "10A",
    marks: 96,
    address: "Chennai, Tamil Nadu"
  },
  {
    name: "Abhishek Tripathi",
    class: "9B",
    marks: 74,
    address: "Sultanpur, Uttar Pradesh"
  },
  {
    name: "Tanvi Deshmukh",
    class: "8A",
    marks: 83,
    address: "Pune, Maharashtra"
  },
  {
    name: "Deepak Maurya",
    class: "10B",
    marks: 66,
    address: "Jaunpur, Uttar Pradesh"
  },
  {
    name: "Shreya Banerjee",
    class: "9A",
    marks: 94,
    address: "Kolkata, West Bengal"
  },
  {
    name: "Mohit Chauhan",
    class: "8B",
    marks: 72,
    address: "Meerut, Uttar Pradesh"
  },
  {
    name: "Nandini Rao",
    class: "10A",
    marks: 89,
    address: "Hyderabad, Telangana"
  },
  {
    name: "Akash Jaiswal",
    class: "9B",
    marks: 78,
    address: "Chandauli, Uttar Pradesh"
  },
  {
    name: "Sakshi Malhotra",
    class: "8A",
    marks: 87,
    address: "Chandigarh, Chandigarh"
  }
]


const container=document.getElementById("student-info");
// function to return student cards
const renderCards=(student)=>{
  const cards=student.map((student) =>{
    if(!student.name) return" ";
 return `
 <div class="student-card"> 
 <p>Name:${student.name}</p>
 <p>Class:${student.class} </p>
 <p>Marks:${student.marks } </p>
 <p>Address:${student.address} </p>
 </div>`;
}).join("");
container.innerHTML=cards;  
}
renderCards(student);


const searchResult=document.getElementById("searchBar");

searchResult.addEventListener("input",(e)=>{
  const searchTerm=e.target.value.toLowerCase().split(" ");
  // const infoStu=student[name].value.toLowerCase().trim();
  const filteredStudent=student.filter((student)=>{
    return student.name && student.name.toLowerCase().startsWith(searchTerm);
  })
  renderCards(filteredStudent);
});

const searchForm=document.querySelector(".search-bar form");
searchForm.addEventListener("submit", (e)=>{
  e.preventDefault();
});