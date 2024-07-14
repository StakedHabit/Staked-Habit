'use client'
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react";
import { format } from 'date-fns';
import { DockDemo } from "./components/dock";
import DatePickerWithRange from "./components/date"
import CircularPlusButton from "./components/button";
import CircularMinusButton from './components/minusButton';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const DockProp = {
  children: "Gulshan Kumar Prasad",
  direction: "bottom"
}

const CardWithForm: React.FC = () => {
  const router = useRouter();

  const [incLoc, setIncLoc] = useState(0); // State for lines of code increment
  const [incCommit, setIncCommit] = useState(0); // State for commits increment

  const handleClickLocIncrement = () => {
    setIncLoc(incLoc + 1);
  };

  const handleClickLocDecrement = () => {
    if (incLoc > 0) {
      setIncLoc(incLoc - 1);
    }
  };

  const handleClickCommitIncrement = () => {
    setIncCommit(incCommit + 10);
  };

  const handleClickCommitDecrement = () => {
    if (incCommit > 0) {
      setIncCommit(incCommit - 10);
    }
  };

  const handleMinusClick = () => {
    console.log("hdafod");
  }

  const handleClickHome = () => {
    router.push('/home')
  }

  const handleClickLeaderBoard = () => {
    router.push('/leaderboard')
  }

  const handleClickProfile = () => {
    router.push('/profile')
  }


  

  return (
    <div>
    
    <div className="mx-10 my-5 flex items-end justify-end">
        <nav className="flex items-end flex space-x-4">
          <a href="/home" className="text-black" onClick={handleClickHome}>
            Home
          </a>
          <a href="/leaderboard" className="text-black" onClick={handleClickLeaderBoard}>
            Leaderboard
          </a>
          <a href="/profile" className="text-black" onClick={handleClickProfile}>
            Profile
          </a>
        </nav>
      </div>

    <div className="my-32 flex flex-col items-center gap-4">
     

      <div className="grid w-full max-w-sm items-center gap-1.5 border rounded-md">
        <textarea placeholder="Habit title" />
      </div>
      <div className="flex space-x-4">
      <div className="flex flex-col gap-4">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Lines of Code</CardTitle>
          <CardDescription>Set your daily activity goal</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="p-4">
              <CircularMinusButton onClick={handleClickLocDecrement} />
            </div>
            <div>
              <h1></h1>
              <h2 className="-mx-1 text-3xl font-bold">{incLoc}</h2>
              <h2 className="-mx-1 ">loc/day</h2>
            </div>
            <div className="p-4">
              <CircularPlusButton onClick={handleClickLocIncrement} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Commits per Day</CardTitle>
          <CardDescription>Set your daily activity goal</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="p-4">
              <CircularMinusButton onClick={handleClickCommitDecrement} />
            </div>
            <div>
              <h1></h1>
              <h2 className="mx-10 text-3xl font-bold">{incCommit}</h2>
              <h2 className="-mx-1 ">Lines of code/day</h2>
            </div>
            <div className="p-4">
              <CircularPlusButton onClick={handleClickCommitIncrement} />
            </div>
          </div>
        </CardContent>
      </Card>
      </div>
      </div>

      <div>
        <DatePickerWithRange/>
      </div>
      <div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Input id="picture" type="number" placeholder="Staked amount" />
        </div>
        <div>
          {/* <DockDemo /> */}
        </div>
        <div className="my-4 bg-white grid w-full max-w-sm items-center gap-1.5">
          <Button>Create Habit</Button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CardWithForm;
