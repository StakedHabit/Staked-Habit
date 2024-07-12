
'use client'
import * as React from "react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react";
import { format } from 'date-fns';

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

const CardWithForm: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [fromDate, setFromDate] = useState<Date | undefined>(undefined);
  const [toDate, setToDate] = useState<Date | undefined>(undefined);



  return (
    <div className="flex justify-center">

    <div className="grid w-full max-w-sm items-center gap-1.5 border border-black">
      <textarea id="picture" placeholder="Staked amount" />
    </div>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Lines of Code</CardTitle>
        <CardDescription>Set your daily activity goal</CardDescription>
      </CardHeader>
      <CardContent>
      <button type="button" className="text-white bg-blue-700  focus:ring-4 rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 ">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        <span className="sr-only">Icon description</span>
      </button>
      <button type="button" className="text-white bg-blue-700  focus:ring-4 rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 ">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        <span className="sr-only">Icon description</span>
      </button>

        <button>
          +
        </button>
        <h1>250</h1>
        <h2>loc/day</h2>
      </CardContent>
      {/** button */}
      {/* <CardFooter className="flex justify-between">
        <Button>Deploy</Button>
      </CardFooter> */}
    </Card>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>commits per day</CardTitle>
        <CardDescription>Set your daily activity goal</CardDescription>
      </CardHeader>
      <CardContent>
      <button type="button" className="text-white bg-blue-700  focus:ring-4 rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 ">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        <span className="sr-only">Icon description</span>
      </button>
      <button type="button" className="text-white bg-blue-700  focus:ring-4 rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 ">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        <span className="sr-only">Icon description</span>
      </button>

        <button>
          +
        </button>
        <h1>250</h1>
        <h2>loc/day</h2>
      </CardContent>
      {/** button */}
      {/* <CardFooter className="flex justify-between">
        <Button>Deploy</Button>
      </CardFooter> */}
    </Card>
    <div className="flex flex-col sm:flex-row gap-4">
    <p>{fromDate ? format(fromDate, 'PP') : 'No date selected'}</p>
      <div>
        <h2 className="mb-2 text-lg font-semibold">From</h2>
        <Calendar
          mode="single"
          selected={fromDate}
          onSelect={setFromDate}
          className="rounded-md border"
        />
      </div>
      <div>
      <p>{toDate ? format(toDate, 'PP') : 'No date selected'}</p>
        <h2 className="mb-2 text-lg font-semibold">To</h2>
        <Calendar
          mode="single"
          selected={toDate}
          onSelect={setToDate}
          className="rounded-md border"
        />
      </div>
    </div>
    <div>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input id="picture" type="text" placeholder="Staked amount" />
    </div>
    </div>
    </div>
    
  )
}

export default CardWithForm;




