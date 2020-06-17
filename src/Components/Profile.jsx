import React, { Component } from 'react';

const Profile = (props) => {
    return (
        <div>
            
            <h1> Profile Page - Name : {props.name}</h1>
            <hr></hr>
        </div>
    )
}
// class Profile extends Component {
//     state = {}
//     render() {
//         return (
//             <div className="mt-2">
//                  <hr></hr>
//                 <h1>Profile - First h1 tag</h1>
//                 <button>Profile Button</button>
//                 <hr></hr>
//             </div>
//         );
//     }
// }

export default Profile;