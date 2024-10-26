// 1. Search Box Alert 

document.getElementById('search-btn').addEventListener('click', function () { 

        const searchValue = document.getElementById('search-box').value; 
    
        if (searchValue) { 
    
            alert(`Searching for: ${searchValue}`); 
    
        } else { 
    
            alert('Please enter something to search!'); 
    
        } 
    
    }); 
    
     
    
    // 2. Profile Picture Upload 
    
    const profilePic = document.getElementById('profile-pic'); 
    
    const uploadProfile = document.getElementById('upload-profile'); 
    
     
    
    uploadProfile.addEventListener('change', function (event) { 
    
        const file = event.target.files[0]; 
    
        if (file) { 
    
            const reader = new FileReader(); 
    
            reader.onload = function (e) { 
    
                profilePic.src = e.target.result; 
    
            }; 
    
            reader.readAsDataURL(file); 
    
        } 
    
    }); 
    
     
    
    // 3. Add New Course Dynamically 
    
    const coursesContainer = document.getElementById('courses-container'); 
    
    const addCourseBtn = document.getElementById('add-course-btn'); 
    
     
    
    addCourseBtn.addEventListener('click', function () { 
    
        const newCourse = document.createElement('img'); 
    
        newCourse.src = 'course4.jpg';  // Replace with actual image or placeholder 
    
        newCourse.alt = 'New Course'; 
    
        newCourse.style.width = '30%'; 
    
        newCourse.style.height = '100px'; 
    
        newCourse.style.objectFit = 'cover'; 
    
        newCourse.style.borderRadius = '5px'; 
    
        coursesContainer.appendChild(newCourse); 
    
    }); 
    
     
    
    // 4. Toggle Application Status 
    
    const toggleStatusBtn = document.getElementById('toggle-status-btn'); 
    
    const statusSection = document.getElementById('status-section'); 
    
     
    
    toggleStatusBtn.addEventListener('click', function () { 
    
        statusSection.classList.toggle('hidden'); 
    
    }); 
    
     
    
    // 5. Reminder Notification 
    
    document.getElementById('reminder-btn').addEventListener('click', function () { 
    
        alert('This is your reminder!'); 
    
    }); 