// MERN_DEVELOPER_ASSIGNMENT\1.MERN_STACK\6.ReactAndState_Management\client\src\components\User.jsx
function User({name, email, age}){
    return(
        <div>
          <h2>New User Added:</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Age: {age}</p>
        </div>
    );
}

export default User;