const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "Male",
    lookingFor: "Female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/81/jpg"
  },
  {
    name: "Sara Rodriguez",
    age: 28,
    gender: "Female",
    lookingFor: "Male",
    location: "New York NY",
    image: "https://randomuser.me/api/portraits/women/81/jpg"
  },
  {
    name: "Phobe Dakota",
    age: 26,
    gender: "Female",
    lookingFor: "Male",
    location: "Dallas TX",
    image: "https://randomuser.me/api/portraits/women/82/jpg"
  }
];

const profiles = profileIterator(data);

// NEXT BUTTON
document.getElementById("next").addEventListener("click", nextProfile);

// NEXT PROFILE FUNCTION
function nextProfile() {
  // GET THE CURRENT PROFILE
  const currentProfile = profiles.next().value;

  const profile = document.getElementById("profileDisplay");
  profile.innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>    
        <li class="list-group-item">Age: ${currentProfile.age}</li>    
        <li class="list-group-item">Location: ${
          currentProfile.location
        }</li>    
        <li class="list-group-item">Preference: ${
          currentProfile.gender
        } looking for ${currentProfile.lookingFor}</li>     
    </ul>`;
}

// ITERATOR
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}
