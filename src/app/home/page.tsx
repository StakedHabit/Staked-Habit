'use client'
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react";
import { format } from 'date-fns';
import { DockDemo } from "./components/dock";
import DatePickerWithRange from "./components/date"
import CircularPlusButton from "./components/button";
import CircularMinusButton from './components/minusButton'

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


  const handleClick = () => {
    console.log("hdafod");
  }

  const handleMinusClick = () => {
    console.log("hdafod");
  }

  return (
    <div className="my-10 flex flex-col items-center gap-4">
      <div className="grid w-full max-w-sm items-center gap-1.5 border rounded-md">
        <textarea id="picture" placeholder="Staked amount" />
      </div>
      <div className="flex space-x-4">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Lines of Code</CardTitle>
            <CardDescription>Set your daily activity goal</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-4">
              <CircularPlusButton onClick={handleClick} />
            </div>
            <div className="p-4">
              <CircularMinusButton onClick={handleMinusClick}/>
            </div>
            <h1>250</h1>
            <h2>loc/day</h2>
          </CardContent>
        </Card>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Commits per Day</CardTitle>
            <CardDescription>Set your daily activity goal</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-4">
              <CircularPlusButton onClick={handleClick} />
            </div>
            <div className="p-4">
              <CircularMinusButton onClick={handleMinusClick}/>
            </div>
            <h1>4</h1>
            <h2>commits/day</h2>
          </CardContent>
        </Card>
      </div>

      <div>
        <DatePickerWithRange/>
      </div>
      <div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Input id="picture" type="text" placeholder="Staked amount" />
        </div>
        <div>
          <DockDemo />
        </div>
      </div>
    </div>
  )
}

export default CardWithForm;
