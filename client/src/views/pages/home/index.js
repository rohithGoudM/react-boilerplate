import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';

const Home = (props)=>{
    // const [userdata,setUserData] = useState({
    //     name:"loading",
    //     picture:""
    // })
    // useEffect(()=>{
    //     if(props.user){
    //         setUserData({
    //        name:props.user.username,
    //        picture:props.user.picture
    //    })
    //     }
       
    // },[])
    switch(props.user){
      case null:
        return (  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>)
      case false:
        props.history.push('/login')
      default:
          return (
           <div>
              <h1>here is your home </h1>
              <div className="card" style={{margin:"10%",padding:"10px",textAlign:"center"}}>
                 <h2>{props.user.username}</h2>
                 <img className="circle" src={props.user.picture} alt=""/>  
              </div>
             
           </div>
      )
    }
    
}

const mapStateToProps = (state)=>{
   return {
       user:state.auth
   }
}

export default connect(mapStateToProps)(Home);