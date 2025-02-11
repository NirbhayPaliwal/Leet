import React from 'react'
import Activity from "../components/Activity";
import VirtualContest from "../components/VirtaulContest";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../lib/useAuth.js";
import Loading from "../components/Loading.jsx"
const HomePage = () => {
    const navigate = useNavigate();
    const { user, loading } =  useAuth();
    useEffect(() => {
      if(loading) return ;
      const fetch = async () => {
        if (!user) {
          navigate("/login");
        }
      };
      fetch();
    }, [loading,user]);
    if(loading)return <Loading/> ;
  return (
    <div>
      <Activity />
      <VirtualContest />
    </div>
  );
}

export default HomePage