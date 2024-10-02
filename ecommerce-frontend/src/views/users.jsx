import { useEffect } from "react";
import { useState } from "react"
import axiosClient from "../axiosClient";

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
            <h1>users registered</h1>
        </div>
    )
};
