console.log(profileData);

//Reference:
let profileImg = document.getElementById("face");
let profileName = document.getElementById("name");
let profilePhone = document.getElementById("phone");
let profileGender = document.getElementById("gender");
let profileDOB = document.getElementById("DOB");
let profileEmail = document.getElementById("email");
let profilePass = document.getElementById("password");
let button = document.getElementById("rand_button")


function randomuser() {
    //Random Generator 
    let personIndex = Math.floor(Math.random() * profileData.length);
    let currentProfile = profileData[personIndex]; 
    //Img Profile: 
    profileImg.src = currentProfile.picture.medium;

    //Name:
    profileName.innerHTML = "Name: " + currentProfile.name.title + ". " + currentProfile.name.first + " " + currentProfile.name.last;

    //Phone:
    profilePhone.innerHTML = "Phone #: " + currentProfile.phone;

    //Gender:
    profileGender.innerHTML = "Gender: " + currentProfile.gender;

    //DOB:
    profileDOB.innerHTML = "Date of Birth: " + currentProfile.dob.date + " Age: " + currentProfile.dob.age;

    //Email:
    profileEmail.innerHTML = "Email: " + currentProfile.email;

    //Password: 
    profilePass.innerHTML = "Password: " + currentProfile.login.password;
}

button.onclick = randomuser;