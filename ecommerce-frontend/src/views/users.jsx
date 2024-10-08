import { useEffect } from "react";
import { useState } from "react"
import axiosClient from "../axiosClient";
import { Link } from "react-router-dom";

export default function Users() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        getUsers();
    }, []);

    const getUsers = () => {
        setLoading(true)
        axiosClient.get('/users')
          .then(({ data }) => {
            setLoading(false)
            setUsers(data.data)
          })
          .catch(() => {
            setLoading(false)
          })
      }
    return(
        <div>
          <div><h1>users</h1></div>
            <Link to="/users/new">Add User</Link>
        </div>
    )
};
