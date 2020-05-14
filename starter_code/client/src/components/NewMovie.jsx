// import React, { Component } from 'react';
// import Axios from 'axios';

// class NewMovie extends Component {
//     state={
//         title: '',
//         image: ''
//     }

//     handleChange = (e) => {
//     this.setState({
// [e.target.name]: e.target.value
//     })
//     }

//     handleSubmit= (e)=>{
//         e.preventDefault()
//         Axios.post('http://localhost:5000/new-movies', this.state)
// .then(res =>{
//     console.log(res) })
//     .catch(err =>console.log(err))
//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={e =>this.handleChanges(e)}>
//                 <input name= 'title' type="text" onChange={ e => this.handleChange(e)}/>
//                 <input name ='image' type='text' onChange={e => this.handleChange(e)}/>
//                 <input type='submit'/>
//                 </form>
//             </div>
//         );
//     }
// }

// export default NewMovie;