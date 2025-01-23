'use client'
import { useEffect,useState } from "react";
import Card from "../components/Card";
import Header from "@/components/Header";


export default function Home() {
  return (
    <>
    <Header />
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card />
    </div>
    </>
  );
}